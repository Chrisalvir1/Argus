import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export type EmblemProps = { state: string; label: string; variant?: string; pulse?: string; pulseKey?: string };
const colors: Record<string, number> = { disarmed: 0x35e7a1, armed_home: 0xffa338, armed_away: 0xff405b, armed_night: 0x319aff, triggered: 0xff2549, unavailable: 0x8293a8, unknown: 0x8293a8, pending: 0xffc354, arming: 0xffc354 };

/** Locally rendered geometry: no network assets, external services or continuous HA polling. */
export function SecurityEmblem3D(props: EmblemProps & { fallback: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const latest = useRef(props);
  latest.current = props;
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    setFailed(false);
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
    catch { setFailed(true); return; }
    renderer.setPixelRatio(1);
    renderer.transmissionResolutionScale = 0.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 0, 9.2);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose(); pmrem.dispose();
    const root = new THREE.Group(); scene.add(root);
    const accent = new THREE.Color(colors[latest.current.state] ?? colors.unknown);
    const glassTint = new THREE.Color();
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x426187, metalness: 0.12, roughness: 0.12, transmission: 0.8, thickness: 0.35, ior: 1.46, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const dark = new THREE.MeshPhysicalMaterial({ color: 0x122944, metalness: 0.72, roughness: 0.17, clearcoat: 1, envMapIntensity: 2 });
    const light = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 2.5, metalness: 0.35, roughness: 0.2, toneMapped: false });
    const geometries: THREE.BufferGeometry[] = [];
    const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Object3D = root) => { geometries.push(geometry); const m = new THREE.Mesh(geometry, material); parent.add(m); return m; };
    const ring = (radius: number, tube: number, material: THREE.Material, parent = root) => mesh(new THREE.TorusGeometry(radius, tube, 8, 64), material, parent);
    const rotor = new THREE.Group(); root.add(rotor);
    const crystalPieces: THREE.Group[] = [];
    const cornerGuards: THREE.Group[] = [];
    if (props.variant === 'core' || !props.variant) {
      // Four bevelled glass arc segments surround a separate spherical core.
      for (let i = 0; i < 4; i++) {
        const shape = new THREE.Shape(); const a = i * Math.PI / 2 + 0.055, b = (i + 1) * Math.PI / 2 - 0.055;
        shape.absarc(0, 0, 1.45, a, b, false); shape.absarc(0, 0, 1.02, b, a, true); shape.closePath();
        const piece = new THREE.Group(); rotor.add(piece); crystalPieces.push(piece);
        mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.19, bevelEnabled: true, bevelSize: 0.055, bevelThickness: 0.055, bevelSegments: 2, steps: 1, curveSegments: 24 }), glass, piece).position.z = -0.18;
        const arc = mesh(new THREE.TorusGeometry(1.04, 0.022, 8, 32, b - a), light, piece); arc.rotation.z = a; arc.position.z = 0.12; piece.userData.modeArc = arc;
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
    const guardGlass = new THREE.MeshPhysicalMaterial({ color: 0x91bce8, metalness: .12, roughness: .075, transmission: .42, thickness: .22, ior: 1.48, clearcoat: 1, clearcoatRoughness: .035, envMapIntensity: 2.6 });
    const guardGlow = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: .58, toneMapped: false });
    const guardShape = new THREE.Shape();
    guardShape.moveTo(-.30, -.24); guardShape.lineTo(-.30, .25); guardShape.quadraticCurveTo(-.30, .30, -.25, .30);
    guardShape.lineTo(.24, .30); guardShape.quadraticCurveTo(.30, .30, .30, .24); guardShape.lineTo(.30, .17);
    guardShape.lineTo(-.16, .17); guardShape.quadraticCurveTo(-.17, .17, -.17, .16); guardShape.lineTo(-.17, -.24);
    guardShape.quadraticCurveTo(-.17, -.30, -.23, -.30); guardShape.lineTo(-.24, -.30); guardShape.quadraticCurveTo(-.30, -.30, -.30, -.24); guardShape.closePath();
    for (let i = 0; i < 4; i++) {
      const sx = i === 0 || i === 3 ? -1 : 1;
      const sy = i < 2 ? 1 : -1;
      const guard = new THREE.Group(); guard.visible = false; scene.add(guard); cornerGuards.push(guard);
      const glassBracket = mesh(new THREE.ExtrudeGeometry(guardShape, { depth: .12, bevelEnabled: true, bevelSize: .018, bevelThickness: .025, bevelSegments: 1, curveSegments: 4 }), guardGlass, guard);
      glassBracket.position.z = -.04;
      const highlight = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-.265, -.235, .105), new THREE.Vector3(-.265, .235, .105),
        new THREE.Vector3(-.245, .265, .105), new THREE.Vector3(.235, .265, .105),
      ]);
      geometries.push(highlight); guard.add(new THREE.Line(highlight, guardGlow));
    }
    const waveMaterials = [light.clone(), light.clone()];
    waveMaterials.forEach(material => { material.transparent = true; material.depthWrite = false; });
    const waves = [ring(1.6, .018, waveMaterials[0]), ring(1.6, .012, waveMaterials[1])]; waves.forEach(w => { w.visible = false; });
    scene.add(new THREE.HemisphereLight(0xb9dfff, 0x080e20, .65));
    const key = new THREE.DirectionalLight(0xe9f4ff, 2); key.position.set(-3, 4, 5); scene.add(key);
    const rim = new THREE.PointLight(accent, 18, 12); rim.position.set(2, -1, 3); scene.add(rim);
    let width = 0, height = 0, visible = true, lost = false, frame = 0, last = 0, previousState = '', previousPulse = '', transitionAt = 0, pulseAt = -10, deployAt = -10, previousPatrolling = false, interactionUntil = 0, scrollingUntil = 0;
    const pointer = new THREE.Vector2();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const host = el.getRootNode() instanceof ShadowRoot ? (el.getRootNode() as ShadowRoot).host : el.closest('argus-panel');
    const essential = () => motion.matches || !!host?.classList.contains('argus-perf-essential');
    const resize = new ResizeObserver(entries => { const box = entries[0].contentRect; width = box.width; height = box.height; if (width > 0 && height > 0) { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25, Math.sqrt(600000 / (width * height)))); renderer.setSize(width, height, false); camera.aspect = width / height; camera.position.z = Math.max(9.2, 4.8 / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect)); camera.updateProjectionMatrix(); } }); resize.observe(el);
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); observer.observe(el);
    const interactionSurface = el.closest('.security-console') || el;
    const move = (event: Event) => { if (!(event instanceof PointerEvent)) return; const box = el.getBoundingClientRect(); pointer.set((event.clientX-box.left)/box.width-.5, (event.clientY-box.top)/box.height-.5); interactionUntil = performance.now() + 2200; };
    const wake = () => { interactionUntil = performance.now() + 2200; };
    const leave = () => pointer.set(0,0);
    const onScroll = () => { scrollingUntil = performance.now() + 180; };
    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    const contextLost = (event: Event) => { event.preventDefault(); lost = true; setFailed(true); };
    interactionSurface.addEventListener('pointermove', move); interactionSurface.addEventListener('pointerdown', wake); interactionSurface.addEventListener('pointerleave', leave); renderer.domElement.addEventListener('webglcontextlost', contextLost);
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      if (lost || !visible || document.hidden || now < scrollingUntil || width <= 0 || height <= 0 || now-last < 33) return;
      const t = now / 1000, p = latest.current, reduced = essential();
      const changed = p.state !== previousState || `${p.pulse}:${p.pulseKey}` !== previousPulse;
      if (reduced && !changed && now-last < 1000) return;
      last = now;
      if (p.state !== previousState) { previousState = p.state; transitionAt = t; }
      const pulseId = `${p.pulse}:${p.pulseKey}`;
      if (pulseId !== previousPulse) { previousPulse = pulseId; if (p.pulse) pulseAt = t; }
      accent.lerp(new THREE.Color(colors[p.state] ?? colors.unknown), .12);
      light.color.copy(accent); light.emissive.copy(accent); rim.color.copy(accent);
      glassTint.set(0x426187).lerp(accent, .68); glass.color.lerp(glassTint, reduced ? 1 : .1);
      guardGlass.color.lerp(glassTint.set(0x91bce8).lerp(accent, .22), reduced ? 1 : .1);
      guardGlow.color.copy(accent);
      lensMaterial.emissive.copy(accent);
      rotor.children.forEach(child => { if (child instanceof THREE.Line) (child.material as THREE.LineBasicMaterial).color.copy(accent); });
      const elapsed = t-pulseAt, duration = p.pulse === 'sos' ? 1.3 : .65;
      const alarmed = p.state === 'triggered' || p.pulse === 'sos';
      const patrolling = alarmed || p.state === 'armed_away';
      const awayAge = p.state === 'armed_away' ? t-transitionAt : Infinity;
      const sosAge = alarmed ? t-pulseAt : Infinity;
      if (patrolling && !previousPatrolling) deployAt = t;
      previousPatrolling = patrolling;
      const burstAge = alarmed ? sosAge : awayAge;
      const burst = !reduced && burstAge >= 0 && burstAge < .9 ? (1-burstAge/.9) ** 2 : 0;
      const deploymentAge = t-deployAt;
      const deployment = reduced ? Number(patrolling) : patrolling ? 1-(1-Math.min(1, Math.max(0, deploymentAge)/.62))**3 : 0;
      const shake = !reduced ? Math.sin(t*82)*.105*burst : 0;
      const engaged = p.state !== 'disarmed' && p.state !== 'unavailable' && p.state !== 'unknown';
      const awake = engaged || performance.now() < interactionUntil;
      const viewHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const viewWidth = viewHeight * camera.aspect;
      const gazeTargets = [[-.38*viewWidth,.36*viewHeight],[.38*viewWidth,.36*viewHeight],[.38*viewWidth,-.36*viewHeight],[-.38*viewWidth,-.36*viewHeight],[0,0]];
      const gaze = patrolling && !reduced ? gazeTargets[Math.floor(t*1.15) % gazeTargets.length] : [pointer.x*.55, -pointer.y*.55];
      const gazeMix = patrolling || awake || p.pulse === 'sensor' ? 1 : 0;
      const gazeX = gaze[0]*gazeMix, gazeY = gaze[1]*gazeMix;
      const blend = reduced ? 1 : .1;
      lensAssembly.position.x += (gazeX-lensAssembly.position.x)*blend;
      lensAssembly.position.y += (gazeY-lensAssembly.position.y)*blend;
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
      root.rotation.x += ((reduced ? 0 : pointer.y*.16 + Math.sin(t*.6)*.018 + Math.sin(t*76)*.045*burst)-root.rotation.x)*.22;
      root.rotation.y += ((reduced ? 0 : pointer.x*.25 + Math.sin(t*.45)*.035 + Math.cos(t*71)*.05*burst)-root.rotation.y)*.22;
      root.position.set(shake, Math.cos(t*74)*.035*burst, 0);
      const arriving = Math.max(0, 1-(t-transitionAt)/.8);
      root.scale.setScalar(reduced ? 1 : 1 + Math.sin(t*1.6)*.009 - arriving*.07);
      cornerGuards.forEach((guard, index) => {
        guard.visible = patrolling && deployment > .72;
        const sx = index === 0 || index === 3 ? -1 : 1;
        const sy = index < 2 ? 1 : -1;
        guard.position.set(sx*(viewWidth/2-.62), sy*(viewHeight/2-.62), 0);
        const guardArrival = Math.max(0, Math.min(1, (deployment-.72)/.28));
        const guardScale = reduced ? 1 : (guard.visible ? .35 + guardArrival*.65 + (alarmed ? burst*.045 : 0) : .35);
        guard.scale.set(sx*guardScale, sy*guardScale, guardScale);
        guard.rotation.z = !reduced && alarmed ? Math.sin(t*76+index)*.04*burst : (!reduced && arriving>0 ? Math.sin(arriving*Math.PI)*.035 : 0);
      });
      rotor.rotation.z = !reduced && props.variant === 'core' && !alarmed ? t*.045 : 0;
      crystalPieces.forEach((piece, index) => {
        const deploy = deployment;
        const sx = index === 0 || index === 3 ? 1 : -1;
        const sy = index < 2 ? 1 : -1;
        const cornerX = sx*(viewWidth/2-.78), cornerY = sy*(viewHeight/2-.72);
        piece.visible = deploy < .98;
        piece.position.set(cornerX*deploy, cornerY*deploy, 0);
        piece.scale.setScalar(1-.75*deploy);
        const modeArc = piece.userData.modeArc as THREE.Object3D | undefined;
        if (modeArc) modeArc.visible = !patrolling || deploy < .58;
        const slowDrift = patrolling && !reduced ? Math.sin(t*1.35+index)*.045 : 0;
        piece.rotation.z = slowDrift + (!reduced && burst > 0 ? Math.sin(t*76+index)*.08*burst : 0);
      });
      light.emissiveIntensity = reduced ? .65 : .7 + Math.sin(t*2)*.1 + (elapsed < duration || alarmed ? .35 : 0);
      lensMaterial.emissiveIntensity = sleeping ? .004 : alarmed ? .025 : awake ? .012 : .006;
      waves.forEach((wave, i) => { const age = elapsed-i*.18; wave.visible = !reduced && age >= 0 && age < .8; wave.scale.setScalar(1+Math.max(0,age)*.55); waveMaterials[i].opacity = Math.max(0, 1-age/.8); waveMaterials[i].color.copy(accent); waveMaterials[i].emissive.copy(accent); });
      renderer.render(scene, camera);
    }; frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
      window.removeEventListener('scroll', onScroll, true);
      interactionSurface.removeEventListener('pointermove', move); interactionSurface.removeEventListener('pointerdown', wake); interactionSurface.removeEventListener('pointerleave', leave); renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      geometries.forEach(g => g.dispose()); scene.traverse(object => { if (object instanceof THREE.Line) (object.material as THREE.Material).dispose(); });
      glass.dispose(); dark.dispose(); light.dispose(); lensMaterial.dispose(); guardGlass.dispose(); guardGlow.dispose(); glintTexture.dispose(); glintMaterial.dispose(); glintSmallMaterial.dispose(); waveMaterials.forEach(material => material.dispose()); environment.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, [props.variant]);
  return failed ? <>{props.fallback}</> : <div ref={container} className="console-emblem-3d" role="img" aria-label={props.label} data-variant={props.variant || 'core'} />;
}
