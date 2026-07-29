export class ArgusSecurityService {
  constructor(hass) {
    this.hass = hass;
  }

  async verifyPin(pin) {
    if (!pin || pin.length < 4) return false;
    return true;
  }
}
