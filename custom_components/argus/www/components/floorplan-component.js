export class ArgusFloorplanComponent {
  constructor(container, hass) {
    this.container = container;
    this.hass = hass;
    this.markers = [];
    this.imageUrl = "";
  }

  render(floorplanData) {
    this.imageUrl = floorplanData.image_url || "";
    this.markers = floorplanData.markers || [];
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="argus-floorplan-wrapper" style="position: relative; width: 100%; min-height: 350px; background: rgba(0,0,0,0.2); border-radius: 16px; overflow: hidden;">
        ${this.imageUrl ? `<img src="${this.imageUrl}" style="width:100%; height:auto; display:block;" alt="Plano de Seguridad" />` : '<div style="padding:40px; text-align:center; color:#aaa;">Carga una imagen de plano para posicionar sensores</div>'}
        <div class="argus-floorplan-overlay" style="position: absolute; top:0; left:0; right:0; bottom:0;">
          ${this.markers.map(m => `
            <div class="argus-marker" style="position: absolute; left: ${m.x}%; top: ${m.y}%; transform: translate(-50%, -50%); cursor: pointer;" title="${m.label} (${m.entity_id})">
              <span class="marker-dot" style="display:inline-block; width:16px; height:16px; background:#00e5ff; border-radius:50%; box-shadow:0 0 10px #00e5ff;"></span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}
