export type SettingsPrompt = {title?: string; label?: string; placeholder?: string; type?: string; numeric?: boolean; confirmLabel?: string};

/** Shared settings form. Authentication and validation remain on the backend. */
export function showSettingsPrompt(root: ShadowRoot, message: string, options: SettingsPrompt = {}, input = false): Promise<string | null> {
  return new Promise(resolve => {
    const origin = root.activeElement as HTMLElement | null;
    const back = document.createElement('div');
    back.className = 'modal-back open';
    back.style.zIndex = '2147483001';
    const form = document.createElement('form');
    form.className = 'modal';
    form.style.cssText = 'width:min(440px,calc(100vw - 32px));max-height:calc(100dvh - 32px);overflow:auto;box-sizing:border-box';
    form.setAttribute('role', 'dialog'); form.setAttribute('aria-modal', 'true');
    form.setAttribute('aria-label', options.title || message);
    const title = document.createElement('h3'); title.textContent = options.title || message;
    const body = document.createElement('div'); body.className = 'modal-body';
    const field = document.createElement('input');
    if (input) {
      const label = document.createElement('label'); label.textContent = options.label || '';
      field.type = options.type || 'text'; field.placeholder = options.placeholder || '';
      field.setAttribute('aria-label', options.label || options.title || 'Valor');
      if (options.numeric) field.inputMode = 'numeric';
      if (field.type === 'password') field.autocomplete = 'new-password';
      field.style.cssText = 'display:block;width:100%;box-sizing:border-box;margin-top:10px';
      label.append(field); body.append(label);
    }
    const footer = document.createElement('div'); footer.className = 'modal-footer';
    footer.style.cssText = 'display:flex;justify-content:flex-end;gap:12px;flex-wrap:wrap';
    const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'ghost'; cancel.textContent = 'Cancelar';
    const accept = document.createElement('button'); accept.type = 'submit'; accept.className = 'primary'; accept.textContent = options.confirmLabel || 'Aceptar';
    footer.append(cancel, accept); form.append(title, body, footer); back.append(form); root.append(back);
    const finish = (value: string | null) => {
      back.remove();
      const target = origin?.isConnected && !origin.closest('[aria-hidden="true"]') ? origin : root.querySelector<HTMLElement>('.hero-profile-pill');
      target?.focus({preventScroll: true}); resolve(value);
    };
    cancel.addEventListener('click', () => finish(null));
    form.addEventListener('submit', event => {event.preventDefault(); finish(input ? field.value : 'confirmed');});
    back.addEventListener('click', event => {if (event.target === back) finish(null);});
    form.addEventListener('keydown', event => {
      if (event.key === 'Escape') {event.preventDefault(); event.stopPropagation(); finish(null);}
      if (event.key !== 'Tab') return;
      const first = input ? field : cancel;
      if (event.shiftKey && root.activeElement === first) {event.preventDefault(); accept.focus();}
      else if (!event.shiftKey && root.activeElement === accept) {event.preventDefault(); first.focus();}
    });
    (input ? field : cancel).focus({preventScroll: true});
  });
}
