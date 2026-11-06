import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { AdaptiveFrames, deviceQualityLimit, timeBlend } from '../../performance/frames';
import { MODE_PALETTE } from './mode-palette';
import { crystalHalfSpan, createCrystalGeometry, updateCrystalGeometry } from './crystal-layout';


export type EmblemProps = { state: string; label: string; variant?: string; pulse?: string; pulseKey?: string; onSelectZone?: (id: string) => void; zonesEnabled?: boolean; zones?: Array<{id:string; name:string; area?:string; number:number; open:boolean}> };
const colors: Record<string, number> = {
  disarmed: MODE_PALETTE.disarmed.three,
  armed_home: MODE_PALETTE.home.three,
  armed_away: MODE_PALETTE.away.three,
  armed_night: MODE_PALETTE.night.three,
  triggered: MODE_PALETTE.alarm.three,
  unavailable: 0x8293a8,
  unknown: 0x8293a8,
  pending: 0xffc354,
  arming: 0xffc354,
};

/** Locally rendered geometry: no network assets, external services or continuous HA polling. */
export function SecurityEmblem3D(props: EmblemProps & { fallback: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const latest = useRef(props);
  latest.current = props;
  const [failed, setFailed] = useState(false);
  const wakeFrame = useRef<() => void>(() => {});
  useEffect(() => { wakeFrame.current(); }, [props.state, props.pulse, props.pulseKey, props.zones]);
  // One crystal per active zone, retaining the approved open-sector shape.
  const zoneCount = props.zonesEnabled === false ? 7 : (props.zones?.length ?? 0);
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    setFailed(false);
    const device = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const qualityLimit = deviceQualityLimit({ cores: device.hardwareConcurrency, memoryGB: device.deviceMemory, saveData: device.connection?.saveData });
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: qualityLimit > .7, powerPreference: 'low-power' }); }
    catch { setFailed(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.transmissionResolutionScale = 0.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // Security accents are defined in sRGB, just like the HTML controls.
    // Keep the framebuffer in that space on every display; the automatic P3
    // path produced amber SOS pixels in the macOS WebKit canvas.
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    renderer.setClearColor(0x000000, 0);
    const entry = el.closest('.entry') as HTMLElement | null;
    const emblemViewport = el.closest('.console-emblem-viewport') as HTMLElement | null;
    // The scene spans the actual panel so the away-mode corner markers can be
    // anchored to the panel border. The core itself is still scaled and
    // centered against the smaller emblem viewport.
    const surface = entry || emblemViewport || el;
    entry?.querySelectorAll('canvas.console-emblem-canvas').forEach(canvas => canvas.remove());
    renderer.domElement.className = 'console-emblem-canvas';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    surface.appendChild(renderer.domElement);
    // Project vector text with the WebGL camera, independently of its pixel budget.
    const svgNS = 'http://www.w3.org/2000/svg';
    const typography = document.createElementNS(svgNS, 'svg');
    typography.setAttribute('aria-hidden', 'true');
    Object.assign(typography.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', zIndex: '2', pointerEvents: 'none' });
    surface.appendChild(typography);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 0, 9.2);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose(); pmrem.dispose();
    const root = new THREE.Group(); scene.add(root);
    const accent = new THREE.Color(latest.current.pulse === 'sos' ? colors.triggered : (colors[latest.current.state] ?? colors.unknown));
    const glassTint = new THREE.Color();
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x426187, metalness: 0.12, roughness: 0.12, transmission: 0.8, thickness: 0.35, ior: 1.46, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const dark = new THREE.MeshPhysicalMaterial({ color: 0x122944, metalness: 0.72, roughness: 0.17, clearcoat: 1, envMapIntensity: 2 });
    const light = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 2.5, metalness: 0.35, roughness: 0.2, toneMapped: false });
    const geometries: THREE.BufferGeometry[] = [];
    const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Object3D = root) => { geometries.push(geometry); const m = new THREE.Mesh(geometry, material); parent.add(m); return m; };
    const ring = (radius: number, tube: number, material: THREE.Material, parent: THREE.Object3D = root) => mesh(new THREE.TorusGeometry(radius, tube, 8, 64), material, parent);
    const rotor = new THREE.Group(); root.add(rotor);
    const crystalPieces: THREE.Group[] = [];
    const zonePieces: THREE.Group[] = [];
    const cornerGuards: THREE.Group[] = [];
    // Each zone owns one unlit material.  Do not swap it with a physical
    // material: that split path made SOS inherit warm environment reflections
    // and look amber even while the HTML panel correctly reported red.
    const crystals: THREE.Mesh[] = [];
    const zoneMaterials: THREE.MeshBasicMaterial[] = [];
    const measureText = document.createElement('canvas').getContext('2d');
    const inscriptions: Array<{ object: THREE.Object3D; group: SVGGElement; title: SVGTextElement; area: SVGTextElement; width: number; key: string }> = [];
    const updateInscription = (index: number) => {
      const inscription = inscriptions[index];
      const zone = latest.current.zonesEnabled === false ? undefined : latest.current.zones?.[index];
      if (!inscription) return;
      inscription.group.style.display = zone ? '' : 'none';
      if (!zone) return;
      const title = `ZONA ${zone.number}`;
      const area = zone.area?.trim() || 'Sin área';
      const key = `${title}\n${area}`;
      if (key === inscription.key) return;
      const context = measureText;
      if (!context) return;
      inscription.key = key;
      const draw = (element: SVGTextElement, text: string, size: number, minSize: number, weight: number) => {
        const maxWidth = 482;
        context.font = `${weight} ${size}px system-ui, sans-serif`;
        while (size > minSize && context.measureText(text).width > maxWidth) {
          context.font = `${weight} ${--size}px system-ui, sans-serif`;
        }
        if (context.measureText(text).width > maxWidth) {
          const characters = Array.from(text);
          while (characters.length && context.measureText(characters.join('') + '…').width > maxWidth) characters.pop();
          text = characters.join('') + '…';
        }
        element.textContent = text;
        element.setAttribute('font-size', String(size));
      };
      draw(inscription.title, title, 80, 48, 850);
      draw(inscription.area, area, 51, 34, 650);
    };
    if (props.variant === 'core' || props.variant === 'crystal' || !props.variant) {
      // Preserve each rounded sector from the approved reference image.
      for (let i = 0; i < zoneCount; i++) {
        const angle = i / zoneCount * Math.PI * 2 - Math.PI / 2;
        const piece = new THREE.Group(); rotor.add(piece); zonePieces.push(piece);
        const zoneMaterial = new THREE.MeshBasicMaterial({
          color: latest.current.pulse === 'sos' ? colors.triggered : (colors[latest.current.state] ?? colors.unknown),
          toneMapped: false,
        });
        zoneMaterials.push(zoneMaterial);
        // Keep the round, curved glass crystal sectors used in Argus 2.9.81.
        // Each zone is a rounded section of the original circular core ring.
        const crystal = mesh(createCrystalGeometry(zoneCount), zoneMaterial, piece);
        crystals.push(crystal);
        crystal.position.z = -.08;
        crystal.frustumCulled = false;
        piece.userData.crystalGeometry = crystal.geometry;
        piece.userData.closure = latest.current.state === 'disarmed' ? 0 : 1;
        piece.userData.appliedSpan = -1;
        // Labels share the crystal's WebGL camera, plane and parent transform.
        const halfSpan = crystalHalfSpan(zoneCount, 0);
        const inscriptionWidth = Math.min(.86, 2 * 1.13 * Math.tan(halfSpan) * .8);
        const group = document.createElementNS(svgNS, 'g');
        group.setAttribute('fill', '#05070b');
        group.setAttribute('font-family', 'system-ui, sans-serif');
        group.setAttribute('text-anchor', 'middle');
        group.setAttribute('dominant-baseline', 'central');
        const title = document.createElementNS(svgNS, 'text');
        title.setAttribute('y', '-29');
        title.setAttribute('font-weight', '850');
        const area = document.createElementNS(svgNS, 'text');
        area.setAttribute('y', '38');
        area.setAttribute('font-weight', '650');
        group.append(title, area);
        typography.appendChild(group);
        const inscription = new THREE.Object3D();
        inscription.position.set(1.28, 0, .143);
        piece.add(inscription);
        inscriptions.push({ object: inscription, group, title, area, width: inscriptionWidth, key: '' });
        updateInscription(i);
        piece.userData.angle = angle; piece.userData.material = zoneMaterial;
      }
      ring(0.77, 0.09, dark); ring(0.8, 0.012, glass);
    } else {
      const points = props.variant === 'crystal'
        ? [[0, 1.57], [1.28, 0.93], [1.15, -0.6], [0, -1.57], [-1.15, -0.6], [-1.28, 0.93]]
        : [[0, 1.52], [1.27, 0.77], [1.12, -0.6], [0, -1.52], [-1.12, -0.6], [-1.27, 0.77]];
      for (let i = 0; i < points.length; i++) {
        const a = points[i], b = points[(i + 1) % points.length];
        const shape = new THREE.Shape();
        shape.moveTo(a[0] * .98, a[1] * .98); shape.lineTo(b[0] * .98, b[1] * .98);
        shape.lineTo(b[0] * .64, b[1] * .64); shape.lineTo(a[0] * .64, a[1] * .64); shape.closePath();
        const piece = new THREE.Group(); rotor.add(piece); crystalPieces.push(piece);
        const facet = mesh(new THREE.ExtrudeGeometry(shape, { depth: .22, bevelEnabled: true, bevelSize: .045, bevelThickness: .07, bevelSegments: 2 }), glass, piece);
        facet.position.z = -.12 + (i % 2) * .055;
        const edge = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(a[0], a[1], .18), new THREE.Vector3(b[0], b[1], .18)]);
        geometries.push(edge); piece.add(new THREE.Line(edge, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: .8 })));
      }
      if (props.variant === 'argus') {
        const eye = new THREE.CatmullRomCurve3([new THREE.Vector3(-.92,0,.23), new THREE.Vector3(0,.43,.23), new THREE.Vector3(.92,0,.23), new THREE.Vector3(0,-.43,.23)], true);
        mesh(new THREE.TubeGeometry(eye, 64, .025, 6, true), light);
      }
    }
    const lensAssembly = new THREE.Group(); root.add(lensAssembly);
    // A single dark, mirror-finish optical lens. State color lives in its trim and reflections, not an eye graphic.
    const lensMaterial = new THREE.MeshPhysicalMaterial({ color: 0x020710, metalness: .78, roughness: .055, clearcoat: 1, clearcoatRoughness: .025, envMapIntensity: 3.2, emissive: accent, emissiveIntensity: .08 });
    const lens = mesh(new THREE.SphereGeometry(.46, 48, 36), lensMaterial, lensAssembly); lens.position.z = .2;
    const glintCanvas = document.createElement('canvas'); glintCanvas.width = glintCanvas.height = 64;
    const glintContext = glintCanvas.getContext('2d');
    if (glintContext) {
      const gradient = glintContext.createRadialGradient(23, 21, 1, 32, 32, 30);
      gradient.addColorStop(0, 'rgba(255,255,255,.98)'); gradient.addColorStop(.12, 'rgba(226,246,255,.72)'); gradient.addColorStop(.42, 'rgba(151,211,255,.18)'); gradient.addColorStop(1, 'rgba(100,180,255,0)');
      glintContext.fillStyle = gradient; glintContext.fillRect(0, 0, 64, 64);
    }
    const glintTexture = new THREE.CanvasTexture(glintCanvas); glintTexture.colorSpace = THREE.SRGBColorSpace;
    const glintMaterial = new THREE.SpriteMaterial({ map: glintTexture, transparent: true, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending });
    const glint = new THREE.Sprite(glintMaterial); glint.scale.set(.23, .23, 1); lensAssembly.add(glint);
    const glintSmallMaterial = glintMaterial.clone();
    const glintSmall = new THREE.Sprite(glintSmallMaterial); glintSmall.scale.set(.105, .105, 1); lensAssembly.add(glintSmall);
    // Corner guards are only visible for Away and alarm.  Keep both on the
    // same direct colour path as the crystal segments.
    const guardAway = new THREE.MeshBasicMaterial({ color: MODE_PALETTE.away.three, toneMapped: false });
    const guardAlarm = new THREE.MeshBasicMaterial({ color: MODE_PALETTE.alarm.three, toneMapped: false });
    const guardGlow = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: .95, toneMapped: false });
    const guardShape = new THREE.Shape();
    guardShape.moveTo(-.30, -.24); guardShape.lineTo(-.30, .10);
    guardShape.quadraticCurveTo(-.30, .30, -.10, .30);
    guardShape.lineTo(.24, .30); guardShape.quadraticCurveTo(.30, .30, .30, .24);
    guardShape.lineTo(.30, .18); guardShape.lineTo(-.10, .18);
    guardShape.quadraticCurveTo(-.18, .18, -.18, .10); guardShape.lineTo(-.18, -.24);
    guardShape.quadraticCurveTo(-.18, -.30, -.24, -.30);
    guardShape.quadraticCurveTo(-.30, -.30, -.30, -.24); guardShape.closePath();
    for (let i = 0; i < 4; i++) {
      const sx = i === 0 || i === 3 ? -1 : 1;
      const sy = i < 2 ? 1 : -1;
      const guard = new THREE.Group(); guard.visible = false; scene.add(guard); cornerGuards.push(guard);
      const glassBracket = mesh(new THREE.ExtrudeGeometry(guardShape, { depth: .12, bevelEnabled: true, bevelSize: .018, bevelThickness: .025, bevelSegments: 1, curveSegments: 4 }), guardAway, guard);
      glassBracket.position.z = -.04;
      const highlight = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-.265, -.235, .105), new THREE.Vector3(-.265, .235, .105),
        new THREE.Vector3(-.245, .265, .105), new THREE.Vector3(.235, .265, .105),
      ]);
      geometries.push(highlight); guard.add(new THREE.Line(highlight, guardGlow));
    }
    // Alarm waves live in the panel-wide transparent canvas, behind the HTML
    // controls. They are anchored to the same measured point as the core.
    const waveMaterials = [0, 1, 2].map(() => new THREE.MeshBasicMaterial({
      color: 0xff1028, transparent: true, opacity: 0, depthWrite: false,
      side: THREE.DoubleSide, toneMapped: false,
    }));
    const waves = waveMaterials.map((material, index) => {
      const wave = ring(1, index === 0 ? .042 : .032, material, scene);
      wave.visible = false;
      return wave;
    });
    scene.add(new THREE.HemisphereLight(0xb9dfff, 0x080e20, .65));
    const key = new THREE.DirectionalLight(0xe9f4ff, 2); key.position.set(-3, 4, 5); scene.add(key);
    const rim = new THREE.PointLight(accent, 18, 12); rim.position.set(2, -1, 3); scene.add(rim);
    let width = 0, height = 0, emblemDiameter = 0, visible = true, disposed = false, lost = false, frame = 0, last = 0, previousState = '', previousPulse = '', transitionAt = 0, disarmReleaseAt = -10, pulseAt = -10, deployAt = -10, previousPatrolling = false, interactionUntil = 0, cornerRadius = 28;
    let offscreenTimer = 0, qualityHoldUntil = 0;
    const adaptive = new AdaptiveFrames(qualityLimit);
    const targetAccent = new THREE.Color();
    const pointer = new THREE.Vector2();
    const anchor = new THREE.Vector2();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const host = el.getRootNode() instanceof ShadowRoot ? (el.getRootNode() as ShadowRoot).host : el.closest('argus-panel');
    const essential = () => motion.matches || !!host?.classList.contains('argus-perf-essential');
    let appliedWidth = -1, appliedHeight = -1, appliedRatio = -1;
    let resolutionDirty = true;
    const updateResolution = () => { resolutionDirty = true; };
    const applyResolution = () => {
      const ceiling = host?.classList.contains('argus-perf-light') ? .75 : 1;
      const quality = essential() ? .6 : Math.min(ceiling, adaptive.quality);
      const lightGraphics = quality <= .7;
      surface.dataset.argusRenderQuality = lightGraphics ? 'light' : 'full';
      // Basic devices avoid the additional transmission pass; gradients and
      // specular highlights retain the appearance of glass without its cost.
      glass.transmission = lightGraphics ? 0 : .8;
      renderer.transmissionResolutionScale = lightGraphics ? .25 : .5;
      // The canvas covers the full console, so a small fixed pixel budget
      // forces fullscreen below CSS resolution before adaptive quality applies.
      const nativeRatio = Math.min(window.devicePixelRatio || 1, 2);
      const budget = lightGraphics ? 4_000_000 : 8_000_000;
      const minimumRatio = Math.min(nativeRatio, lightGraphics ? 1 : 1.75);
      const requestedRatio = Math.max(minimumRatio, nativeRatio * quality);
      // setPixelRatio itself calls setSize. Applying both separately allocated
      // the WebGL drawing buffer twice on each sidebar/fullscreen resize.
      const ratio = Math.min(requestedRatio, Math.sqrt(budget / (width * height)));
      // Adaptive quality can change while the effective ratio remains clamped.
      // Three.js writes canvas.width/height unconditionally, resetting the buffer
      // even for identical values. Preserve it until its effective inputs change.
      if (width > 0 && height > 0 &&
          (width !== appliedWidth || height !== appliedHeight || ratio !== appliedRatio)) {
        renderer.setDrawingBufferSize(width, height, ratio);
        appliedWidth = width; appliedHeight = height; appliedRatio = ratio;
      }
    };
    const schedule = () => { if (!disposed && !lost && visible && !document.hidden && !frame) frame = window.requestAnimationFrame(tick); };
    wakeFrame.current = schedule;
    const resize = new ResizeObserver(() => {
      const bounds = surface.getBoundingClientRect();
      const sizeChanged = width !== bounds.width || height !== bounds.height;
      width = bounds.width;
      height = bounds.height;
      if (width <= 0 || height <= 0) return;
      if (sizeChanged) updateResolution();
      camera.aspect = width / height;
      camera.position.z = Math.max(9.2, 4.8 / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect));
      camera.updateProjectionMatrix();
      cornerRadius = Number.parseFloat(getComputedStyle(surface).borderTopLeftRadius) || 0;
      const viewport = emblemViewport?.getBoundingClientRect();
      emblemDiameter = viewport ? Math.min(viewport.width, viewport.height) : Math.min(width, height);
      if (viewport) {
        const viewHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const viewWidth = viewHeight * camera.aspect;
        anchor.set(
          ((viewport.left + viewport.width / 2 - bounds.left) / width - .5) * viewWidth,
          -((viewport.top + viewport.height / 2 - bounds.top) / height - .5) * viewHeight,
        );
      } else anchor.set(0, 0);
      schedule();
    });
    resize.observe(surface);
    if (emblemViewport && emblemViewport !== surface) resize.observe(emblemViewport);
    // Keep the panel-sized canvas for positioning, but scope pointer-driven
    // parallax to the actual emblem. Listening on `surface` made every mouse
    // movement across the whole security card wake WebGL and redraw the full
    // panel; on WebKit that produced flickering bands over nearby widgets.
    const interactionSurface = emblemViewport || el;
    const move = (event: Event) => { if (!(event instanceof PointerEvent)) return; const box = surface.getBoundingClientRect(); pointer.set((event.clientX-box.left)/box.width-.5, (event.clientY-box.top)/box.height-.5); interactionUntil = performance.now() + 2200; schedule(); };
    const wake = () => { interactionUntil = performance.now() + 2200; schedule(); };
    const leave = () => pointer.set(0,0);
    const raycaster = new THREE.Raycaster();
    const selectZone = (event: Event) => {
      if (!(event instanceof MouseEvent) || !latest.current.onSelectZone) return;
      const bounds = renderer.domElement.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      raycaster.setFromCamera(new THREE.Vector2(
        2 * (event.clientX - bounds.left) / bounds.width - 1,
        1 - 2 * (event.clientY - bounds.top) / bounds.height,
      ), camera);
      const hit = raycaster.intersectObjects(crystals, false)[0];
      if (!hit) return;
      const zone = latest.current.zones?.[crystals.indexOf(hit.object as THREE.Mesh)];
      if (zone) latest.current.onSelectZone(zone.id);
    };
    interactionSurface.addEventListener('click', selectZone);
    const contextLost = (event: Event) => { event.preventDefault(); lost = true; renderer.domElement.remove(); typography.remove(); setFailed(true); };
    interactionSurface.addEventListener('pointermove', move); interactionSurface.addEventListener('pointerdown', wake); interactionSurface.addEventListener('pointerleave', leave); renderer.domElement.addEventListener('webglcontextlost', contextLost);
    const labelCenter = new THREE.Vector3();
    const labelRight = new THREE.Vector3();
    const labelDown = new THREE.Vector3();
    const animate = (now: number) => {
      if (lost || document.hidden || !visible || width <= 0 || height <= 0) return;
      // Resizing clears WebGL: apply it before drawing, never after presenting a frame.
      // Coalesce observer/adaptation notifications into this existing animation frame.
      if (resolutionDirty) { applyResolution(); resolutionDirty = false; }
      const t = now / 1000, p = latest.current, reduced = essential();
      const changed = p.state !== previousState || `${p.pulse}:${p.pulseKey}` !== previousPulse;
      const dt = last ? now - last : 1000 / 60;
      const blendAt = (factor: number) => reduced ? 1 : timeBlend(factor, dt);
      last = now;
      if (p.state !== previousState) {
        if (p.state === 'disarmed' && (previousState.startsWith('armed_') || previousState === 'triggered')) disarmReleaseAt = t;
        previousState = p.state;
        transitionAt = t;
      }
      const pulseId = `${p.pulse}:${p.pulseKey}`;
      if (pulseId !== previousPulse) { previousPulse = pulseId; if (p.pulse) pulseAt = t; }
      const alarmed = p.state === 'triggered' || p.pulse === 'sos';
      accent.lerp(targetAccent.set(alarmed ? colors.triggered : (colors[p.state] ?? colors.unknown)), blendAt(.12));
      light.color.copy(accent); light.emissive.copy(accent); rim.color.copy(accent);
      dark.color.lerp(glassTint.set(0x122944).lerp(accent, .38), blendAt(.12));
      glassTint.set(0x18243a).lerp(accent, .92); glass.color.lerp(glassTint, blendAt(.16));
      const awayState = p.state === 'armed_away' && !alarmed;
      guardGlow.color.setHex(alarmed ? MODE_PALETTE.alarm.three : MODE_PALETTE.away.three);
      guardGlow.opacity = awayState ? 1 : .58;
      lensMaterial.emissive.copy(accent);
      rotor.children.forEach(child => { if (child instanceof THREE.Line) (child.material as THREE.LineBasicMaterial).color.copy(accent); });
      const elapsed = t-pulseAt, duration = p.pulse === 'sos' ? 1.3 : .65;
      const patrolling = alarmed || p.state === 'armed_away';
      const awayAge = p.state === 'armed_away' ? t-transitionAt : Infinity;
      const sosAge = alarmed ? Math.min(t-pulseAt, t-transitionAt) : Infinity;
      if ((patrolling && !previousPatrolling) || (alarmed && changed)) deployAt = t;
      previousPatrolling = patrolling;
      const burstAge = (alarmed ? sosAge : awayAge) - .65;
      const burst = !reduced && burstAge >= 0 && burstAge < .4 ? Math.sin(Math.PI*burstAge/.4) : 0;
      const deploymentAge = t-deployAt;
      const deployment = reduced ? Number(patrolling) : patrolling ? 1-(1-Math.min(1, Math.max(0, deploymentAge-1.05)/.85))**3 : 0;
      // Keep a small, irregular vibration while SOS is active. The previous
      // shake was tied only to the short opening burst, so it stopped almost
      // immediately even though the alarm remained triggered.
      const shake = !reduced
        ? alarmed
          ? Math.sin(t*43)*.022 + Math.sin(t*67)*.009
          : Math.sin(t*82)*.105*burst
        : 0;
      const shakeY = !reduced
        ? alarmed
          ? Math.cos(t*47)*.014 + Math.sin(t*71)*.006
          : Math.cos(t*74)*.035*burst
        : 0;
      const engaged = p.state !== 'disarmed' && p.state !== 'unavailable' && p.state !== 'unknown';
      const awake = engaged || performance.now() < interactionUntil;
      const viewHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const viewWidth = viewHeight * camera.aspect;
      const gazeTargets = [[-.18,.16],[.18,.16],[.18,-.16],[-.18,-.16],[0,0]];
      const awayLensLocked = p.state === 'armed_away' && !alarmed;
      const gaze = patrolling && !reduced && !awayLensLocked ? gazeTargets[Math.floor(t*1.15) % gazeTargets.length] : [pointer.x*.55, -pointer.y*.55];
      const gazeMix = awayLensLocked ? 0 : (patrolling || awake || p.pulse === 'sensor' ? 1 : 0);
      const gazeX = gaze[0]*gazeMix, gazeY = gaze[1]*gazeMix;
      const blend = blendAt(.1);
      const releaseAge = p.state === 'disarmed' ? t - disarmReleaseAt : Infinity;
      const releasePulse = !reduced && releaseAge >= 0 && releaseAge < 1.05
        ? Math.sin(Math.PI * releaseAge / 1.05) : 0;
      lensAssembly.position.x += (gazeX + Math.sin(t * 92) * .09 * releasePulse - lensAssembly.position.x)*blend;
      lensAssembly.position.y += (gazeY + Math.cos(t * 88) * .07 * releasePulse - lensAssembly.position.y)*blend;
      const sleeping = !awake && p.pulse !== 'sensor' && p.state === 'disarmed';
      lensAssembly.rotation.x += ((reduced ? 0 : pointer.y*.12)-lensAssembly.rotation.x)*blend;
      const lensClose = !reduced && burstAge >= 0 && burstAge < .42
        ? burstAge < .15 ? Math.sin((burstAge/.15)*Math.PI/2) : Math.cos(((burstAge-.15)/.27)*Math.PI/2)
        : 0;
      lensAssembly.scale.set(1 + lensClose*.08, 1 - lensClose*.9, 1);
      const reflectionAngle = t*(sleeping ? .16 : alarmed ? 1.4 : .42) + Math.atan2(pointer.y, pointer.x)*.72 + root.rotation.y*.8;
      for (const [sprite, angle, radius] of [[glint, reflectionAngle, .22], [glintSmall, -reflectionAngle*1.35+2.1, .31]] as const) {
        const x = Math.cos(angle)*radius, y = Math.sin(angle)*radius;
        sprite.position.set(x, y, .2 + Math.sqrt(Math.max(.01, .46*.46-x*x-y*y)) + .012);
        (sprite.material as THREE.SpriteMaterial).opacity = (reduced ? .72 : sleeping ? .38 : .92) * (1-lensClose);
      }
      const idleTilt = p.state === 'disarmed' && !alarmed && !reduced;
      root.rotation.x += ((idleTilt ? pointer.y*.16 + Math.sin(t*.6)*.018 : 0)-root.rotation.x)*blendAt(.22);
      root.rotation.y += ((idleTilt ? pointer.x*.25 + Math.sin(t*.45)*.035 : 0)-root.rotation.y)*blendAt(.22);
      root.position.set(anchor.x + shake, anchor.y + shakeY, 0);
      const arriving = Math.max(0, 1-(t-transitionAt)/.8);
      // Keep the 3D assembly proportional to the compact center track. The
      // previous .78 factor made the crystals spill across their viewport and
      // visually dominate the panoramic console.
      const emblemScale = viewHeight * Math.min(260, emblemDiameter * .50) / (height * 3.2);
      root.scale.setScalar(emblemScale * (reduced ? 1 : 1 + Math.sin(t*1.6)*.009 - arriving*.07));
      cornerGuards.forEach((guard, index) => {
        guard.visible = patrolling && (reduced || deploymentAge >= 1.05);
        const bracket = guard.children.find(child => child instanceof THREE.Mesh) as THREE.Mesh | undefined;
        if (bracket) bracket.material = alarmed ? guardAlarm : guardAway;
        const sx = index === 0 || index === 3 ? -1 : 1;
        const sy = index < 2 ? 1 : -1;
        // Small rounded glass Ls sit just inside the panel's rounded border.
        // Compact brackets stay in the real rounded corners on portrait
        // phones, clear of the inset HUD and swipe controls.
        const size = viewHeight * (width < 600 ? 30 : 42) / height;
        const radiusX = viewWidth * cornerRadius / width;
        const radiusY = viewHeight * cornerRadius / height;
        // The guard geometry extends 0.30 * size toward the card edge.
        // Include that extent once so its outside edge aligns with the rounded
        // border instead of adding a second inset and floating inward.
        const insetX = width < 600 ? size*.6 : radiusX + size*.30;
        const insetY = width < 600 ? size*.6 : radiusY + size*.30;
        const targetX = sx*(viewWidth/2-insetX);
        const bounds = surface.getBoundingClientRect();
        const fullscreen = surface.closest('.ios-fullscreen');
        const visibleTop = fullscreen ? Math.max(0, -bounds.top) : 0;
        const visibleBottom = fullscreen ? Math.min(height, (window.visualViewport?.height || window.innerHeight) - bounds.top) : height;
        const edgePixel = sy > 0 ? visibleTop : visibleBottom;
        const targetY = viewHeight * (.5 - edgePixel / height) - sy * insetY;
        guard.position.set(THREE.MathUtils.lerp(anchor.x+sx*.72*emblemScale, targetX, deployment), THREE.MathUtils.lerp(anchor.y+sy*.72*emblemScale, targetY, deployment), 0);
        const guardScale = THREE.MathUtils.lerp(.6, size, deployment);
        guard.scale.set(-sx*guardScale, sy*guardScale, guardScale);
        guard.rotation.z = reduced ? 0 : (1-deployment)*Math.PI*2;
      });
      const modeProgress = Math.min(1, Math.max(0, (t-transitionAt)/.42));
      const modeTurn = reduced || p.state === 'disarmed' ? 0 : Math.PI*2*(1-(1-modeProgress)**3);
      // Restore the original slow disarmed orbit. Surface text now shares
      // the rotor transform, so it stays attached while the crystals turn.
      rotor.rotation.z = p.state === 'disarmed' && !reduced
        ? t * .25
        : modeTurn + (!reduced && props.variant === 'core' && !alarmed ? Math.sin(t*.3)*.035 : 0);
      crystalPieces.forEach((piece, index) => {
        const deploy = deployment;
        const sx = index === 0 || index === 3 ? -1 : 1;
        const sy = index < 2 ? 1 : -1;
        const cornerX = sx*(viewWidth/2-.78)-anchor.x, cornerY = sy*(viewHeight/2-.72)-anchor.y;
        piece.visible = deploy < .65;
        piece.position.set(cornerX*deploy/emblemScale, cornerY*deploy/emblemScale, 0);
        piece.scale.setScalar(1-.75*deploy);
        const modeArc = piece.userData.modeArc as THREE.Object3D | undefined;
        if (modeArc) modeArc.visible = !patrolling || deploy < .58;
        piece.rotation.y = reduced ? 0 : Math.sin(modeProgress*Math.PI)*.5;
        const slowDrift = patrolling && !reduced ? Math.sin(t*1.35+index)*.045 : 0;
        piece.rotation.z = slowDrift + (!reduced && burst > 0 ? Math.sin(t*76+index)*.08*burst : 0);
      });
      zonePieces.forEach((piece, index) => {
        const angle = Number(piece.userData.angle) || 0;
        // Disarmed is a hard open state: the pieces remain visibly detached
        // from the core and can never fall into the armed ring position.
        const openRadius = .95;
        const pendingRadius = .42;
        const closedRadius = 0;
        const forming = p.state === 'pending' || p.state === 'arming';
        // Backend state is already authoritative; keep the visual deployment
        // short so a zero-second arm request does not feel delayed.
        const formation = forming ? Math.min(1, Math.max(0, (t - transitionAt) / .48)) : p.state === 'disarmed' ? 0 : 1;
        // Expand along the circle rather than stretching X/Y into an oval.
        const targetClosure = formation;
        piece.userData.closure += (targetClosure - piece.userData.closure) * blendAt(.2);
        const halfSpan = crystalHalfSpan(zoneCount, piece.userData.closure);
        if (Math.abs(halfSpan - piece.userData.appliedSpan) > .0001) {
          const geometry = piece.userData.crystalGeometry as THREE.BufferGeometry;
          updateCrystalGeometry(geometry, halfSpan);
          piece.userData.appliedSpan = halfSpan;
        }
        const releaseProgress = p.state === 'disarmed' && releaseAge >= 0
          ? Math.min(1, Math.max(0, releaseAge / 1.05)) : 1;
        const releaseEase = 1 - (1 - releaseProgress) ** 3;
        const baseRadius = p.state === 'disarmed'
          ? openRadius * releaseEase
          : forming
          ? THREE.MathUtils.lerp(openRadius, pendingRadius, formation)
          : closedRadius;
        const alert = p.zones?.length ? Boolean(p.zones[index]?.open) : p.pulse === 'sensor' && index === 0;
        const radius = baseRadius + (alert ? .82 : 0);
        const targetX = Math.cos(angle) * radius;
        const targetY = Math.sin(angle) * radius;
        const idleFloat = p.state === 'disarmed' && !reduced;
        const drift = idleFloat ? Math.sin(t * .8 + index) * .025 : 0;
        if (p.state === 'disarmed' && releaseProgress >= 1) {
          piece.position.x = targetX;
          piece.position.y = targetY;
        } else {
          piece.position.x += (targetX - piece.position.x) * blendAt(.12);
          piece.position.y += (targetY - piece.position.y) * blendAt(.12);
        }
        piece.position.z = .05 + drift;
        piece.rotation.z = angle;
        piece.scale.setScalar(idleFloat ? 1 + Math.sin(t * 1.3 + index) * .018 : 1);
        const material = piece.userData.material as THREE.MeshBasicMaterial | undefined;
        // An alarm must never blend from the prior armed mode.  Assign the
        // alarm palette directly, independent of scene lighting or gamut.
        if (material) material.color.setHex((alarmed || alert)
          ? MODE_PALETTE.alarm.three
          : colors[p.state] ?? colors.unknown);
        piece.userData.alert = alert;
        const inscription = inscriptions[index]?.object;
        if (inscription) {
          const tangent = rotor.rotation.z + angle + Math.PI / 2;
          inscription.rotation.z = Math.PI / 2 + (Math.cos(tangent) < 0 ? Math.PI : 0);
        }
        updateInscription(index);
      });
      light.emissiveIntensity = reduced ? .65 : .7 + Math.sin(t*2)*.1 + (elapsed < duration || alarmed ? .35 : 0);
      lensMaterial.emissiveIntensity = sleeping ? .004 : alarmed ? .055 : p.state === 'armed_away' ? .045 : awake ? .012 : .006;
      const waveActive = !reduced && (alarmed || p.pulse === 'sensor');
      const wavePeriod = 2.35;
      const waveDuration = 2.2;
      // End the rings comfortably inside the panel edge. The canvas is
      // panel-sized, so this radius works in both panoramic and fullscreen.
      const maxRadius = Math.min(viewWidth, viewHeight) * .43;
      waves.forEach((wave, i) => {
        // Short offsets keep all three rings visible together as a wave train.
        const phase = ((t % wavePeriod) + wavePeriod - i * .28) % wavePeriod;
        const progress = phase / waveDuration;
        const visible = waveActive && phase < waveDuration;
        wave.visible = visible;
        if (!visible) return;
        const radius = emblemScale * .72 + (maxRadius - emblemScale * .72) * progress;
        const material = waveMaterials[i];
        wave.position.set(anchor.x, anchor.y, .05 - i * .002);
        wave.scale.setScalar(radius);
        // Start bright and clearly defined at the core, then taper both glow
        // and line weight as the wave travels across the OLED panel.
        material.opacity = .56 * (1 - progress) ** 1.35;
        wave.scale.set(radius, radius, Math.max(.28, 1 - progress * .72));
      });
      renderer.render(scene, camera);
      for (const { object, group, width: labelWidth } of inscriptions) {
        object.localToWorld(labelCenter.set(0, 0, 0)).project(camera);
        object.localToWorld(labelRight.set(labelWidth / 2, 0, 0)).project(camera);
        object.localToWorld(labelDown.set(0, -.15, 0)).project(camera);
        const a = (labelRight.x - labelCenter.x) * width / 512;
        const b = (labelCenter.y - labelRight.y) * height / 512;
        const c = (labelDown.x - labelCenter.x) * width / 144;
        const d = (labelCenter.y - labelDown.y) * height / 144;
        group.setAttribute('transform', `matrix(${a} ${b} ${c} ${d} ${(1 + labelCenter.x) * width / 2} ${(1 - labelCenter.y) * height / 2})`);
      }
    };
    const tick = (now: number) => {
      frame = 0;
      const start = performance.now();
      animate(now);
      if (!essential() && visible && !document.hidden && width > 0 && height > 0) {
        if (now >= qualityHoldUntil) {
          const quality = adaptive.quality;
          const snapshot = adaptive.sample(now, performance.now() - start);
          if (snapshot) {
            renderer.domElement.dataset.argusFrames = JSON.stringify(snapshot);
            renderer.domElement.dataset.argusColorSpace = renderer.outputColorSpace;
            if (quality !== adaptive.quality) updateResolution();
          }
        }
        schedule();
      }
    };
    const suspend = () => { window.cancelAnimationFrame(frame); frame = 0; last = 0; adaptive.reset(); };
    const onVisibility = () => { if (document.hidden) suspend(); else schedule(); };
    // Scrolling temporarily disrupts rAF cadence and can make the adaptive
    // controller misdiagnose compositor work as a slow GPU. Changing the
    // WebGL drawing-buffer size during that interval clears/reallocates the
    // canvas and appears as a flash in Safari. Keep rendering the same orbit,
    // but discard scroll-contaminated samples and adapt only after scrolling
    // has settled.
    const onScrollActivity = () => {
      const now = performance.now();
      if (now >= qualityHoldUntil) adaptive.reset();
      qualityHoldUntil = now + 1200;
    };
    const scrollListenerOptions: AddEventListenerOptions = { capture: true, passive: true };
    window.addEventListener('scroll', onScrollActivity, scrollListenerOptions);
    window.addEventListener('wheel', onScrollActivity, scrollListenerOptions);
    window.addEventListener('touchmove', onScrollActivity, scrollListenerOptions);
    const onMotion = () => { suspend(); updateResolution(); schedule(); };
    // Fullscreen and login classes do not change the graphics profile. Resetting
    // adaptation/reallocating the drawing buffer on every host class mutation
    // made those transitions perform unnecessary WebGL work.
    const graphicsProfile = () => `${essential()}:${host?.classList.contains('argus-perf-light')}`;
    let previousGraphicsProfile = graphicsProfile();
    const profileObserver = new MutationObserver(() => {
      const next = graphicsProfile();
      if (next === previousGraphicsProfile) return;
      previousGraphicsProfile = next;
      onMotion();
    });
    if (host) profileObserver.observe(host, { attributes: true, attributeFilter: ['class', 'data-argus-perf'] });
    // Keep the renderer warm across brief viewport exits. Safari can report
    // repeated intersection changes during fast scrolling and scroll-boundary
    // bounce; immediately suspending here resets frame history and causes a
    // visible stop/restart in the orbit. Only pause after the canvas stays away.
    const intersection = new IntersectionObserver(entries => {
      const intersects = entries.some(entry => entry.isIntersecting);
      if (intersects) {
        window.clearTimeout(offscreenTimer);
        offscreenTimer = 0;
        visible = true;
        schedule();
        return;
      }
      window.clearTimeout(offscreenTimer);
      offscreenTimer = window.setTimeout(() => {
        offscreenTimer = 0;
        visible = false;
        window.cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      }, 900);
    }, { rootMargin: '160px 0px' });
    intersection.observe(surface);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onMotion);
    schedule();
    return () => {
      disposed = true; wakeFrame.current = () => {}; window.clearTimeout(offscreenTimer); offscreenTimer = 0; suspend(); resize.disconnect(); intersection.disconnect(); profileObserver.disconnect();
      delete surface.dataset.argusRenderQuality;
      window.removeEventListener('scroll', onScrollActivity, scrollListenerOptions);
      window.removeEventListener('wheel', onScrollActivity, scrollListenerOptions);
      window.removeEventListener('touchmove', onScrollActivity, scrollListenerOptions);
      document.removeEventListener('visibilitychange', onVisibility); motion.removeEventListener('change', onMotion);
      interactionSurface.removeEventListener('click', selectZone);
      interactionSurface.removeEventListener('pointermove', move); interactionSurface.removeEventListener('pointerdown', wake); interactionSurface.removeEventListener('pointerleave', leave); renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      typography.remove();
      geometries.forEach(g => g.dispose()); scene.traverse(object => { if (object instanceof THREE.Line) (object.material as THREE.Material).dispose(); });
      glass.dispose(); dark.dispose(); light.dispose(); lensMaterial.dispose(); guardAway.dispose(); guardAlarm.dispose(); guardGlow.dispose(); zoneMaterials.forEach(material => material.dispose()); glintTexture.dispose(); glintMaterial.dispose(); glintSmallMaterial.dispose(); waveMaterials.forEach(material => material.dispose()); environment.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, [props.variant, zoneCount, props.zonesEnabled]);
  return <div className="console-emblem-3d" role="img" aria-label={[props.label, ...(props.zones || []).map(zone => `Zona ${zone.number}: ${zone.area?.trim() || 'Sin área'}`)].join('. ')} data-variant={props.variant || 'core'}>
    {failed ? props.fallback : <div ref={container} className="console-emblem-canvas-host" aria-hidden="true" />}
  </div>;
}
