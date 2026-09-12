/**
 * Argus Brand Patch for Home Assistant & HACS v2
 * 
 * ROOT CAUSE: HACS frontend (chunk 9452) renders icons like:
 *   <img src="${brandUrlFn({domain:'argus',type:'icon',useFallback:true,...})}" referrerpolicy="no-referrer">
 * The brand URL is set INSIDE a Lit component shadow DOM via its property binding.
 * The img.src setter IS called by Lit's property update mechanism, so our prototype 
 * patch WILL intercept it — but only if this script runs BEFORE the component renders.
 *
 * This script is registered BOTH as es5 (sync <script> tag) AND as module (import())
 * to guarantee coverage in all loading orders.
 *
 * Additionally, we use an aggressive polling scanner that patches already-rendered icons.
 */
(function() {
  if (window.__argus_brand_patch_v2) return;
  window.__argus_brand_patch_v2 = true;

  // Match any brands.home-assistant.io URL that references argus
  var ARGUS_ICON_MATCH = /brands\.home-assistant\.io[^"'\s]*argus[^"'\s]*/i;
  var ARGUS_API_MATCH = /\/api\/brands\/integration\/argus/i;

  function isArgusBrand(url) {
    if (!url || typeof url !== 'string') return false;
    return ARGUS_ICON_MATCH.test(url) || ARGUS_API_MATCH.test(url);
  }

  function resolveArgusBrand(url) {
    if (!url || typeof url !== 'string') return url;
    var lower = url.toLowerCase();
    if (lower.indexOf('dark_logo') !== -1) return '/api/argus_static/brand/dark_logo.png';
    if (lower.indexOf('logo') !== -1) return '/api/argus_static/brand/logo.png';
    if (lower.indexOf('dark_icon') !== -1) return '/api/argus_static/brand/dark_icon.png';
    if (lower.indexOf('icon') !== -1) return '/api/argus_static/brand/icon.png';
    return '/api/argus_static/brand/dark_icon.png';
  }

  // ── 1. HTMLImageElement.prototype.src setter ────────────────────────────
  // This intercepts Lit's property update: element.src = brandUrl(...)
  try {
    var nativeSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
    if (nativeSrcDesc && nativeSrcDesc.set) {
      Object.defineProperty(HTMLImageElement.prototype, 'src', {
        get: function() { return nativeSrcDesc.get.call(this); },
        set: function(val) {
          if (isArgusBrand(val)) val = resolveArgusBrand(val);
          nativeSrcDesc.set.call(this, val);
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch(e) {}

  // ── 2. Element.prototype.setAttribute ──────────────────────────────────
  try {
    var nativeSetAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, val) {
      if (name === 'src' && isArgusBrand(val)) val = resolveArgusBrand(val);
      nativeSetAttr.call(this, name, val);
    };
  } catch(e) {}

  // ── 3. CSSStyleDeclaration.setProperty (for background-image: url(...)) ─
  try {
    var nativeSetProperty = CSSStyleDeclaration.prototype.setProperty;
    CSSStyleDeclaration.prototype.setProperty = function(prop, val, priority) {
      if (val && (prop === 'background-image' || prop === '--argus-icon') && isArgusBrand(val)) {
        val = 'url("' + resolveArgusBrand(val.replace(/url\(["']?|["']?\)/g, '')) + '")';
      }
      nativeSetProperty.call(this, prop, val, priority);
    };
  } catch(e) {}

  // ── 4. CSSStyleDeclaration backgroundImage property setter ──────────────
  try {
    var nativeBgImgDesc = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, 'backgroundImage');
    if (nativeBgImgDesc && nativeBgImgDesc.set) {
      Object.defineProperty(CSSStyleDeclaration.prototype, 'backgroundImage', {
        get: function() { return nativeBgImgDesc.get.call(this); },
        set: function(val) {
          if (val && isArgusBrand(val)) {
            val = 'url("' + resolveArgusBrand(val.replace(/url\(["']?|["']?\)/g, '')) + '")';
          }
          nativeBgImgDesc.set.call(this, val);
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch(e) {}

  // ── 5. fetch interception ────────────────────────────────────────────────
  try {
    var nativeFetch = window.fetch;
    window.fetch = function(input, init) {
      var url = typeof input === 'string' ? input : (input && input.url);
      if (url && isArgusBrand(url)) {
        input = resolveArgusBrand(url);
      }
      return nativeFetch.call(this, input, init);
    };
  } catch(e) {}

  // ── 6. XMLHttpRequest interception ──────────────────────────────────────
  try {
    var nativeOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      if (url && isArgusBrand(url)) url = resolveArgusBrand(url);
      var args = Array.prototype.slice.call(arguments);
      args[1] = url;
      nativeOpen.apply(this, args);
    };
  } catch(e) {}

  // ── 7. Active DOM scanner (handles already-rendered icons) ───────────────
  function fixImgInRoot(root) {
    if (!root) return;
    try {
      // Direct img
      if (root.tagName === 'IMG') {
        var src = root.getAttribute('src');
        if (src && isArgusBrand(src)) {
          root.setAttribute('src', resolveArgusBrand(src));
        }
      }
      // Query all imgs
      if (typeof root.querySelectorAll === 'function') {
        var imgs = root.querySelectorAll('img');
        for (var i = 0; i < imgs.length; i++) {
          var s = imgs[i].getAttribute('src');
          if (s && isArgusBrand(s)) {
            imgs[i].setAttribute('src', resolveArgusBrand(s));
          }
        }
      }
      // Recurse into shadow roots of all children
      var walk = function(el) {
        if (!el || !el.children) return;
        for (var c = 0; c < el.children.length; c++) {
          var child = el.children[c];
          if (child.shadowRoot) {
            fixImgInRoot(child.shadowRoot);
          }
          walk(child);
        }
      };
      walk(root);
    } catch(_) {}
  }

  function fixAll() {
    fixImgInRoot(document.documentElement);
  }

  // ── 8. MutationObserver ─────────────────────────────────────────────────
  try {
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node.nodeType === 1) {
              fixImgInRoot(node);
              // Also check if added node has shadow root
              if (node.shadowRoot) fixImgInRoot(node.shadowRoot);
            }
          }
        } else if (m.type === 'attributes' && m.attributeName === 'src') {
          var tgt = m.target;
          if (tgt && tgt.tagName === 'IMG') {
            var s = tgt.getAttribute('src');
            if (s && isArgusBrand(s)) tgt.setAttribute('src', resolveArgusBrand(s));
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    });
  } catch(e) {}

  // ── 9. Periodic aggressive scan (catches shadow-dom-rendered icons) ──────
  // HACS renders inside shadow DOM which MutationObserver subtree may not see
  // across shadow boundaries. We poll every 500ms for 30 seconds after page load.
  var scanCount = 0;
  var scanTimer = setInterval(function() {
    fixAll();
    scanCount++;
    if (scanCount >= 60) clearInterval(scanTimer); // Stop after 30s
  }, 500);

  // Initial fix on DOMContentLoaded and load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixAll);
  } else {
    fixAll();
  }
  window.addEventListener('load', fixAll);

  // ── 10. SPA navigation listener ─────────────────────────────────────────
  window.addEventListener('location-changed', function() {
    scanCount = 0; // Reset scan counter on navigation
    fixAll();
    setTimeout(fixAll, 300);
    setTimeout(fixAll, 1000);
  });

  window.addEventListener('hashchange', function() {
    fixAll();
    setTimeout(fixAll, 300);
  });

})();
