/**
 * Argus Brand Patch for Home Assistant & HACS
 * Intercepts requests for Argus brand icons/logos and redirects them
 * to the locally served Argus brand assets under /api/argus_static/brand/
 */
(function() {
  if (window.__argus_brand_patch_installed) return;
  window.__argus_brand_patch_installed = true;

  var ARGUS_BRAND_MATCH = /(?:brands\.home-assistant\.io|\/api\/brands\/integration\/)[^"']*argus/i;

  function isArgusBrand(url) {
    if (!url || typeof url !== 'string') return false;
    return ARGUS_BRAND_MATCH.test(url);
  }

  function resolveArgusBrand(url) {
    if (!url || typeof url !== 'string') return url;
    var lower = url.toLowerCase();
    if (lower.indexOf('dark_logo') !== -1) {
      return '/api/argus_static/brand/dark_logo.png';
    }
    if (lower.indexOf('logo') !== -1) {
      return '/api/argus_static/brand/logo.png';
    }
    if (lower.indexOf('dark_icon') !== -1) {
      return '/api/argus_static/brand/dark_icon.png';
    }
    if (lower.indexOf('icon') !== -1) {
      return '/api/argus_static/brand/icon.png';
    }
    return '/api/argus_static/brand/dark_icon.png';
  }

  // 1. Prototype Property Interception on HTMLImageElement
  try {
    var imgDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
    if (imgDesc && imgDesc.set) {
      Object.defineProperty(HTMLImageElement.prototype, 'src', {
        get: function() {
          return imgDesc.get.call(this);
        },
        set: function(val) {
          if (isArgusBrand(val)) {
            val = resolveArgusBrand(val);
          }
          return imgDesc.set.call(this, val);
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {
    console.debug('Argus: HTMLImageElement prototype patch note:', e);
  }

  // 2. Element.prototype.setAttribute interception
  try {
    var origSetAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, val) {
      if (name && typeof name === 'string' && name.toLowerCase() === 'src' && isArgusBrand(val)) {
        val = resolveArgusBrand(val);
      }
      return origSetAttr.call(this, name, val);
    };
  } catch (e) {
    console.debug('Argus: setAttribute patch note:', e);
  }

  // 3. Element.prototype.setAttributeNS interception
  try {
    var origSetAttrNS = Element.prototype.setAttributeNS;
    if (origSetAttrNS) {
      Element.prototype.setAttributeNS = function(ns, name, val) {
        if (name && typeof name === 'string' && name.toLowerCase() === 'src' && isArgusBrand(val)) {
          val = resolveArgusBrand(val);
        }
        return origSetAttrNS.call(this, ns, name, val);
      };
    }
  } catch (e) {
    console.debug('Argus: setAttributeNS patch note:', e);
  }

  // 4. Fetch API interception (for any JS components doing fetch)
  try {
    if (typeof window.fetch === 'function') {
      var origFetch = window.fetch;
      window.fetch = function(input, init) {
        if (typeof input === 'string' && isArgusBrand(input)) {
          input = resolveArgusBrand(input);
        } else if (input && typeof input.url === 'string' && isArgusBrand(input.url)) {
          input = new Request(resolveArgusBrand(input.url), input);
        }
        return origFetch.call(this, input, init);
      };
    }
  } catch (e) {
    console.debug('Argus: fetch patch note:', e);
  }

  // 5. Active DOM and Shadow DOM Scanner
  function fixImagesInNode(root) {
    if (!root) return;
    try {
      if (root.tagName === 'IMG' && isArgusBrand(root.src)) {
        root.src = resolveArgusBrand(root.src);
      }
      if (typeof root.querySelectorAll === 'function') {
        var imgs = root.querySelectorAll('img');
        for (var i = 0; i < imgs.length; i++) {
          if (isArgusBrand(imgs[i].src)) {
            imgs[i].src = resolveArgusBrand(imgs[i].src);
          }
        }
      }
      if (root.shadowRoot) {
        fixImagesInNode(root.shadowRoot);
      }
      var children = root.children;
      if (children) {
        for (var c = 0; c < children.length; c++) {
          if (children[c].shadowRoot) {
            fixImagesInNode(children[c].shadowRoot);
          }
        }
      }
    } catch (_) {}
  }

  // Initial pass on document
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { fixImagesInNode(document.body); });
  } else {
    fixImagesInNode(document.body);
  }

  // MutationObserver to catch dynamically added nodes
  try {
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];
        if (mutation.type === 'childList') {
          for (var j = 0; j < mutation.addedNodes.length; j++) {
            var node = mutation.addedNodes[j];
            if (node.nodeType === 1) {
              fixImagesInNode(node);
            }
          }
        } else if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
          var target = mutation.target;
          if (target && target.tagName === 'IMG' && isArgusBrand(target.src)) {
            target.src = resolveArgusBrand(target.src);
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
  } catch (e) {
    console.debug('Argus: observer patch note:', e);
  }

  // Navigation listener for Home Assistant SPA
  window.addEventListener('location-changed', function() {
    setTimeout(function() { fixImagesInNode(document.body); }, 50);
    setTimeout(function() { fixImagesInNode(document.body); }, 300);
  });
})();
