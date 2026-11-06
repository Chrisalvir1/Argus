import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { flushSync } from 'react-dom';

type Phase = 'closed' | 'opening' | 'open' | 'closing';

export interface ProfileDialogController {
  element: HTMLElement;
  isOpen(): boolean;
  toggle(): void;
  open(): void;
  close(): void;
  dispose(): void;
}

const controllers = new WeakMap<HTMLElement, ProfileDialogController>();
const STYLE_ID = 'argus-profile-dialog-react-styles';

const STYLES = `
.argus-profile-dialog-root{position:fixed;inset:0;z-index:2147483000;pointer-events:none}
.argus-profile-dialog-layer{position:absolute;top:var(--profile-top,80px);right:var(--profile-right,16px);width:max-content;max-width:calc(100vw - 24px);pointer-events:none}
#profile-dropdown.hero-profile-dropdown{position:relative!important;inset:auto!important;display:flex!important;flex-direction:column!important;box-sizing:border-box!important;width:min(320px,calc(100vw - 40px))!important;min-width:0!important;max-width:calc(100vw - 40px)!important;max-height:min(78vh,720px)!important;max-height:min(78dvh,720px)!important;overflow:auto!important;overscroll-behavior:contain!important;padding:16px!important;margin:0!important;border-radius:24px!important;background:rgba(13,20,34,.98)!important;border:1px solid rgba(255,255,255,.2)!important;box-shadow:0 16px 38px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.12)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;transform-origin:var(--profile-origin-x,100%) var(--profile-origin-y,0px)!important}
#profile-dropdown.hero-profile-dropdown>div:first-of-type>div:first-child{box-sizing:border-box!important;padding-right:42px!important}
#profile-dropdown .profile-card-tile{min-width:0!important;max-width:100%!important;border-radius:16px!important}
#profile-dropdown select,#profile-dropdown .profile-btn,#profile-dropdown #btn-dropdown-switch-user{box-sizing:border-box!important;min-width:0!important;max-width:100%!important;border-radius:14px!important}
#profile-dropdown select.glass-control{width:calc(100% - 8px)!important;margin-inline:4px!important}
#profile-dropdown .profile-choices{display:grid;gap:7px;margin:4px 0 10px;min-width:0}
#profile-dropdown .profile-choice{display:flex!important;align-items:center;justify-content:space-between;gap:10px;width:100%;min-height:44px;padding:10px 12px!important;border-radius:14px!important;border:1px solid rgba(255,255,255,.18)!important;background:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.04))!important;color:#eef5fa!important;font-size:13px!important;line-height:1.4;text-align:left;white-space:normal;cursor:pointer}
#profile-dropdown .profile-choice[aria-pressed="true"]{border-color:#69d8bd!important;background:rgba(52,168,143,.16)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
#profile-dropdown .profile-choice:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}
#profile-dropdown .profile-card-tile{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:12px!important;padding:14px!important}
#profile-dropdown .profile-card-tile>div:last-child{flex-wrap:wrap!important;min-width:0;gap:8px!important}
#profile-dropdown .profile-card-tile .profile-btn{min-height:40px;padding:9px 14px!important;flex:1 1 auto}
#profile-dropdown .user-badge{border-radius:10px!important}
.argus-profile-dialog-layer.is-closed{display:none!important;visibility:hidden;pointer-events:none}
.argus-profile-dialog-layer.is-opening,.argus-profile-dialog-layer.is-open{pointer-events:auto}
.argus-profile-dialog-layer.is-closed #profile-dropdown{opacity:0!important;transform:scale(.06)!important;pointer-events:none!important}
.argus-profile-dialog-layer.is-opening #profile-dropdown{animation:argusProfileElasticIn 460ms cubic-bezier(.22,1.35,.36,1) both!important;will-change:transform,opacity;backface-visibility:hidden;pointer-events:auto!important}
.argus-profile-dialog-layer.is-open #profile-dropdown{opacity:1!important;transform:none!important;pointer-events:auto!important}
.argus-profile-dialog-layer.is-closing #profile-dropdown{animation:argusProfileBounceOut 460ms cubic-bezier(.34,1.2,.55,1) both!important;will-change:transform,opacity;backface-visibility:hidden;pointer-events:none!important}
.argus-profile-dialog-layer.is-opening::before{animation:argusProfileBackdropIn 460ms ease-out both;will-change:opacity}
.argus-profile-dialog-layer.is-closing::before{animation:argusProfileBackdropOut 460ms ease-in both}
.argus-profile-dialog-close{position:absolute;top:10px;right:10px;z-index:2;display:grid!important;place-items:center!important;box-sizing:border-box!important;width:36px!important;height:36px!important;min-width:36px!important;min-height:36px!important;padding:0!important;border:1px solid rgba(255,255,255,.2)!important;border-radius:50%!important;background:rgba(255,255,255,.1)!important;color:#fff!important;line-height:0!important;font-size:0!important;cursor:pointer;touch-action:manipulation}
.argus-profile-dialog-close svg{display:block;width:14px;height:14px;overflow:visible}
@keyframes argusProfileElasticIn{0%{opacity:0;transform:scale(.08)}58%{opacity:1;transform:scale(1.035)}78%{transform:scale(.99)}100%{opacity:1;transform:scale(1)}}
@keyframes argusProfileBounceOut{0%{opacity:1;transform:scale(1)}22%{opacity:1;transform:scale(1.018)}65%{opacity:.25;transform:scale(.38)}85%,100%{opacity:0;transform:scale(.06)}}
@keyframes argusProfileBackdropIn{0%{opacity:0}100%{opacity:1}}
@keyframes argusProfileBackdropOut{0%{opacity:1}100%{opacity:0}}
@media(max-width:600px),(max-width:900px) and (orientation:portrait){
 .argus-profile-dialog-layer{position:fixed;inset:0;display:grid;place-items:center;box-sizing:border-box;width:auto;max-width:none;padding:max(16px,env(safe-area-inset-top)) max(12px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));isolation:isolate}
 .argus-profile-dialog-layer.is-opening,.argus-profile-dialog-layer.is-open{pointer-events:auto}
 .argus-profile-dialog-layer::before{content:"";position:absolute;inset:0;z-index:-1;background:rgba(2,6,14,.65)}
 #profile-dropdown.hero-profile-dropdown{width:min(340px,100%)!important;max-width:100%!important;max-height:min(88vh,900px)!important;max-height:min(88dvh,900px)!important;padding:16px!important;border-radius:24px!important}
}
@media(prefers-reduced-motion:reduce){.argus-profile-dialog-layer #profile-dropdown{animation:none!important;transition:none!important}.argus-profile-dialog-layer.is-closed #profile-dropdown{transform:none!important}}
`;

type ChoiceProps = { nativeProps: Record<string, unknown>; children: React.ReactNode[]; choices: Array<{value: string; label: string}>; initial: string };
function ProfileChoices({nativeProps, children, choices, initial}: ChoiceProps) {
  const [selected, setSelected] = React.useState(initial);
  const select = React.useRef<HTMLSelectElement>(null);
  return <div className="profile-choices" role="group" aria-label={String(nativeProps['aria-label'] || 'Preferencia')}>
    <select {...nativeProps} ref={select} defaultValue={initial} style={{display: 'none'}} aria-hidden="true" tabIndex={-1}>{children}</select>
    {choices.map(choice => <button key={choice.value} type="button" className="profile-choice" aria-pressed={selected === choice.value} onClick={() => {
      if (!select.current || select.current.disabled) return;
      select.current.value = choice.value;
      setSelected(choice.value);
      select.current.dispatchEvent(new Event('change', {bubbles: true}));
    }}><span>{choice.label}</span><span aria-hidden="true">{selected === choice.value ? '✓' : ''}</span></button>)}
  </div>;
}

const BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'autofocus', 'checked', 'disabled', 'hidden', 'multiple', 'readonly', 'required', 'selected']);
const REACT_ATTRIBUTE_NAMES: Record<string, string> = { tabindex: 'tabIndex', maxlength: 'maxLength', minlength: 'minLength', colspan: 'colSpan', rowspan: 'rowSpan', autofocus: 'autoFocus', readonly: 'readOnly', allowfullscreen: 'allowFullScreen' };

function reactStyle(element: HTMLElement): React.CSSProperties {
  const result: Record<string, string> = {};
  for (let index = 0; index < element.style.length; index += 1) {
    const property = element.style.item(index);
    const key = property.startsWith('--') ? property : property.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    result[key] = element.style.getPropertyValue(property).trim();
  }
  return result;
}

/** Convert the existing safe profile template into React-owned controls and elements. */
function renderSettingsMarkup(markup: string): React.ReactNode {
  const parsed = new DOMParser().parseFromString(`<div data-profile-content="">${markup}</div>`, 'text/html');
  const root = parsed.body.firstElementChild;
  if (!root) return null;

  const renderNode = (node: Node, key: number): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (!(node instanceof HTMLElement)) return null;
    const props: Record<string, unknown> = { key };
    if (node.tagName === 'SELECT') props.defaultValue = (node as HTMLSelectElement).value;
    for (const attribute of Array.from(node.attributes)) {
      if (attribute.name === 'style') props.style = reactStyle(node);
      else if (attribute.name === 'class') props.className = attribute.value;
      else if (attribute.name === 'for') props.htmlFor = attribute.value;
      else if (node.tagName === 'OPTION' && attribute.name === 'selected') continue;
      else if (BOOLEAN_ATTRIBUTES.has(attribute.name)) props[REACT_ATTRIBUTE_NAMES[attribute.name] || attribute.name] = true;
      else props[REACT_ATTRIBUTE_NAMES[attribute.name] || attribute.name] = attribute.value;
    }
    const children = Array.from(node.childNodes).map(renderNode);
    if (node.tagName === 'SELECT' && ['dropdown-shield-select', 'dropdown-contrast-select', 'dropdown-gesture-select', 'dropdown-clock-select'].includes(node.id)) {
      const select = node as HTMLSelectElement;
      return <ProfileChoices key={key} nativeProps={props} initial={select.value} choices={Array.from(select.options).map(option => ({value: option.value, label: option.text}))}>{children}</ProfileChoices>;
    }
    return React.createElement(node.tagName.toLowerCase(), props, ...children);
  };

  return Array.from(root.childNodes).map(renderNode);
}

function installStyles(shadow: ShadowRoot): void {
  let style = shadow.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    shadow.appendChild(style);
  }
  style.textContent = STYLES;
}

function DialogView({ html, phase, onClose, onClosed, top, right }: { html: string; phase: Phase; onClose: () => void; onClosed: () => void; top: number; right: number }) {
  const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 600px), (max-width: 900px) and (orientation: portrait)').matches;
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const settings = React.useMemo(() => renderSettingsMarkup(html), [html]);
  React.useEffect(() => {
    if (phase !== 'opening') return;
    const first = dialogRef.current?.querySelector<HTMLElement>('select:not(:disabled),input:not(:disabled),button:not(:disabled),a[href]');
    first?.focus({ preventScroll: true });
  }, [phase]);
  React.useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const shadow = dialog?.getRootNode() as ShadowRoot | undefined;
    const trigger = shadow?.querySelector<HTMLElement>('.hero-profile-pill');
    if (!dialog || !trigger || phase === 'closed') return;
    const triggerRect = trigger.getBoundingClientRect();
    // The dialog's bounding rect includes its animated scale. Use its layout
    // offsets to keep the origin stable throughout opening and closing.
    const layerRect = dialog.parentElement!.getBoundingClientRect();
    dialog.style.setProperty('--profile-origin-x', `${triggerRect.left + triggerRect.width / 2 - layerRect.left - dialog.offsetLeft}px`);
    dialog.style.setProperty('--profile-origin-y', `${triggerRect.top + triggerRect.height / 2 - layerRect.top - dialog.offsetTop}px`);
  }, [phase, top, right]);
  const layerClass = `argus-profile-dialog-layer is-${phase}`;
  return <div
    className={layerClass}
    style={{ ['--profile-top' as any]: `${top}px`, ['--profile-right' as any]: `${right}px` }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
      if (event.key === 'Tab' && mobile) {
        const focusable = [...(dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),select:not(:disabled),a[href]') || [])];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const shadowActive = (dialogRef.current?.getRootNode() as ShadowRoot | undefined)?.activeElement;
        if (event.shiftKey && shadowActive === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && shadowActive === last) { event.preventDefault(); first.focus(); }
      }
    }}
  >
    <div
      ref={dialogRef}
      id="profile-dropdown"
      className="hero-profile-dropdown"
      role="dialog"
      aria-modal={mobile ? 'true' : undefined}
      aria-label="Ajustes del perfil"
      aria-hidden={phase === 'closed' ? 'true' : undefined}
      tabIndex={-1}
      onAnimationEnd={event => {
        if (event.target === event.currentTarget && phase === 'closing') onClosed();
      }}
    >
      <button type="button" className="argus-profile-dialog-close" aria-label="Cerrar ajustes" onClick={onClose}>
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="m3 3 10 10M13 3 3 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </button>
      <div>{settings}</div>
    </div>
  </div>;
}

export function disposeProfileDialog(container: HTMLElement): void {
  controllers.get(container)?.dispose();
  controllers.delete(container);
}

/** Rehomes the existing settings markup into a React-owned, responsive dialog shell. */
export function mountProfileDialog(source: HTMLElement): ProfileDialogController {
  const container = source.parentElement?.parentElement;
  const shadow = source.getRootNode() as ShadowRoot;
  if (!container || !(shadow instanceof ShadowRoot)) throw new Error('Profile dialog requires a connected shadow-root host');
  disposeProfileDialog(container);
  installStyles(shadow);

  const html = source.innerHTML;
  const host = document.createElement('div');
  host.className = 'argus-profile-dialog-root';
  source.remove();
  shadow.appendChild(host);
  const root: Root = createRoot(host);
  let phase: Phase = 'closed';
  let timer: number | undefined;
  let disposed = false;
  let element: HTMLElement | null = null;
  let positionFrame = 0;
  const trigger = container.querySelector('.hero-profile-pill') as HTMLElement | null;

  const position = () => {
    const rect = trigger?.getBoundingClientRect();
    return {
      top: rect ? Math.min(window.innerHeight - 24, rect.bottom + 12) : 80,
      right: rect ? Math.max(12, window.innerWidth - rect.right) : 16
    };
  };

  const render = (next: Phase) => {
    if (disposed) return;
    phase = next;
    const { top, right } = position();
    const view = <DialogView html={html} phase={phase} top={top} right={right} onClose={() => controller.close()} onClosed={finishClose} />;
    // The first mount must expose the preserved control IDs to the HA bridge.
    // Subsequent changes can be batched by React instead of blocking a frame.
    if (!element) flushSync(() => root.render(view));
    else root.render(view);
    element = host.querySelector('#profile-dropdown');
    trigger?.setAttribute('aria-expanded', String(phase === 'opening' || phase === 'open'));
  };

  const reposition = (event: Event) => {
    if (phase === 'closed' || phase === 'closing' || phase === 'opening') return;
    if (event.composedPath().includes(host)) return;
    if (positionFrame) return;
    positionFrame = window.requestAnimationFrame(() => { positionFrame = 0; render(phase); });
  };
  const finishClose = () => {
    if (phase !== 'closing') return;
    window.clearTimeout(timer);
    render('closed');
    const active = shadow.activeElement;
    if (!active || active === trigger || element?.contains(active)) trigger?.focus({ preventScroll: true });
  };

  const controller: ProfileDialogController = {
    get element() { return element!; },
    isOpen: () => phase === 'opening' || phase === 'open',
    open: () => {
      if (disposed || phase === 'open' || phase === 'opening') return;
      window.clearTimeout(timer);
      window.cancelAnimationFrame(positionFrame);
      positionFrame = 0;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { render('open'); return; }
      render('opening');
      timer = window.setTimeout(() => render('open'), 520);
    },
    close: () => {
      if (disposed || phase === 'closed' || phase === 'closing') return;
      window.clearTimeout(timer);
      window.cancelAnimationFrame(positionFrame); positionFrame = 0;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { render('closed'); trigger?.focus({ preventScroll: true }); return; }
      render('closing');
      timer = window.setTimeout(finishClose, 560);
    },
    toggle: () => controller.isOpen() ? controller.close() : controller.open(),
    dispose: () => {
      if (disposed) return;
      disposed = true;
      window.clearTimeout(timer);
      window.cancelAnimationFrame(positionFrame);
      window.removeEventListener('resize', reposition);
      window.removeEventListener('scroll', reposition, true);
      trigger?.setAttribute('aria-expanded', 'false');
      root.unmount();
      host.remove();
    }
  };

  render('closed');
  window.addEventListener('resize', reposition);
  window.addEventListener('scroll', reposition, true);
  controllers.set(container, controller);
  return controller;
}
