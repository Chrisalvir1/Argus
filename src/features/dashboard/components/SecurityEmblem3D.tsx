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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 0, 7.4);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose(); pmrem.dispose();
    const root = new THREE.Group(); scene.add(root);
    const accent = new THREE.Color(colors[latest.current.state] ?? colors.unknown);
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x426187, metalness: 0.12, roughness: 0.12, transmission: 0.8, thickness: 0.35, ior: 1.46, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const dark = new THREE.MeshPhysicalMaterial({ color: 0x071323, metalness: 0.85, roughness: 0.17, clearcoat: 1, envMapIntensity: 2 });
    const light = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 2.5, metalness: 0.35, roughness: 0.2, toneMapped: false });
    const geometries: THREE.BufferGeometry[] = [];
    const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Object3D = root) => { geometries.push(geometry); const m = new THREE.Mesh(geometry, material); parent.add(m); return m; };
    const ring = (radius: number, tube: number, material: THREE.Material, parent = root) => mesh(new THREE.TorusGeometry(radius, tube, 8, 64), material, parent);
    const rotor = new THREE.Group(); root.add(rotor);
    if (props.variant === 'core' || !props.variant) {
      // Four bevelled glass arc segments surround a separate spherical core.
      for (let i = 0; i < 4; i++) {
        const shape = new THREE.Shape(); const a = i * Math.PI / 2 + 0.055, b = (i + 1) * Math.PI / 2 - 0.055;
        shape.absarc(0, 0, 1.45, a, b, false); shape.absarc(0, 0, 1.02, b, a, true); shape.closePath();
        mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.19, bevelEnabled: true, bevelSize: 0.055, bevelThickness: 0.055, bevelSegments: 2, steps: 1, curveSegments: 24 }), glass, rotor).position.z = -0.18;
        const arc = mesh(new THREE.TorusGeometry(1.04, 0.022, 8, 32, b - a), light, rotor); arc.rotation.z = a; arc.position.z = 0.12;
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
        const facet = mesh(new THREE.ExtrudeGeometry(shape, { depth: .22, bevelEnabled: true, bevelSize: .045, bevelThickness: .07, bevelSegments: 2 }), glass, rotor);
        facet.position.z = -.12 + (i % 2) * .055;
        const edge = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(a[0], a[1], .18), new THREE.Vector3(b[0], b[1], .18)]);
        geometries.push(edge); rotor.add(new THREE.Line(edge, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: .8 })));
      }
      if (props.variant === 'argus') {
        const eye = new THREE.CatmullRomCurve3([new THREE.Vector3(-.92,0,.23), new THREE.Vector3(0,.43,.23), new THREE.Vector3(.92,0,.23), new THREE.Vector3(0,-.43,.23)], true);
        mesh(new THREE.TubeGeometry(eye, 64, .025, 6, true), light);
      }
    }
    const sphere = mesh(new THREE.SphereGeometry(.48, 32, 24), dark); sphere.position.z = .2;
    const iris = ring(.5, .032, light); iris.position.z = .27;
    const orbit = new THREE.Group(); root.add(orbit);
    for (let i = 0; i < 2; i++) { const arc = mesh(new THREE.TorusGeometry(.37, .035, 8, 32, 1.25), light, orbit); arc.rotation.z = i * Math.PI + .2; arc.position.z = .56; }
    const waveMaterials = [light.clone(), light.clone()];
    waveMaterials.forEach(material => { material.transparent = true; material.depthWrite = false; });
    const waves = [ring(1.6, .018, waveMaterials[0]), ring(1.6, .012, waveMaterials[1])]; waves.forEach(w => { w.visible = false; });
    scene.add(new THREE.HemisphereLight(0xb9dfff, 0x080e20, .65));
    const key = new THREE.DirectionalLight(0xe9f4ff, 2); key.position.set(-3, 4, 5); scene.add(key);
    const rim = new THREE.PointLight(accent, 18, 12); rim.position.set(2, -1, 3); scene.add(rim);
    let width = 0, height = 0, visible = true, lost = false, frame = 0, last = 0, previousState = '', previousPulse = '', transitionAt = 0, pulseAt = -10;
    const pointer = new THREE.Vector2();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const host = el.getRootNode() instanceof ShadowRoot ? (el.getRootNode() as ShadowRoot).host : el.closest('argus-panel');
    const essential = () => motion.matches || !!host?.classList.contains('argus-perf-essential');
    const resize = new ResizeObserver(entries => { const box = entries[0].contentRect; width = box.width; height = box.height; if (width > 0 && height > 0) { renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); } }); resize.observe(el);
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); observer.observe(el);
    const move = (event: PointerEvent) => { const box = el.getBoundingClientRect(); pointer.set((event.clientX-box.left)/box.width-.5, (event.clientY-box.top)/box.height-.5); };
    const leave = () => pointer.set(0,0);
    const contextLost = (event: Event) => { event.preventDefault(); lost = true; setFailed(true); };
    el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave); renderer.domElement.addEventListener('webglcontextlost', contextLost);
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      if (lost || !visible || document.hidden || width <= 0 || height <= 0 || now-last < 33) return;
      const t = now / 1000, p = latest.current, reduced = essential();
      const changed = p.state !== previousState || `${p.pulse}:${p.pulseKey}` !== previousPulse;
      if (reduced && !changed && now-last < 1000) return;
      last = now;
      if (p.state !== previousState) { previousState = p.state; transitionAt = t; }
      const pulseId = `${p.pulse}:${p.pulseKey}`;
      if (pulseId !== previousPulse) { previousPulse = pulseId; if (p.pulse) pulseAt = t; }
      accent.lerp(new THREE.Color(colors[p.state] ?? colors.unknown), .12);
      light.color.copy(accent); light.emissive.copy(accent); rim.color.copy(accent);
      rotor.children.forEach(child => { if (child instanceof THREE.Line) (child.material as THREE.LineBasicMaterial).color.copy(accent); });
      const elapsed = t-pulseAt, duration = p.pulse === 'sos' ? 1.3 : .65;
      const shake = !reduced && elapsed < duration ? Math.sin(elapsed*65)*.045*(1-elapsed/duration) : 0;
      root.rotation.x += ((reduced ? 0 : pointer.y*.22 + Math.sin(t*.6)*.025)-root.rotation.x)*.12;
      root.rotation.y += ((reduced ? 0 : pointer.x*.35 + Math.sin(t*.45)*.06)-root.rotation.y)*.12;
      root.position.x = shake;
      const arriving = Math.max(0, 1-(t-transitionAt)/.8);
      root.scale.setScalar(reduced ? 1 : 1 + Math.sin(t*1.6)*.012 - arriving*.08);
      rotor.rotation.z = props.variant === 'core' && !reduced ? t*.065 : 0;
      orbit.rotation.z = reduced ? 0 : -t*.35;
      light.emissiveIntensity = reduced ? .65 : .7 + Math.sin(t*2)*.1 + (elapsed < duration ? .35 : 0);
      waves.forEach((wave, i) => { const age = elapsed-i*.18; wave.visible = !reduced && age >= 0 && age < .8; wave.scale.setScalar(1+Math.max(0,age)*.55); waveMaterials[i].opacity = Math.max(0, 1-age/.8); waveMaterials[i].color.copy(accent); waveMaterials[i].emissive.copy(accent); });
      renderer.render(scene, camera);
    }; frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
      el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      geometries.forEach(g => g.dispose()); scene.traverse(object => { if (object instanceof THREE.Line) (object.material as THREE.Material).dispose(); });
      glass.dispose(); dark.dispose(); light.dispose(); waveMaterials.forEach(material => material.dispose()); environment.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, [props.variant]);
  return failed ? <>{props.fallback}</> : <div ref={container} className="console-emblem-3d" role="img" aria-label={props.label} data-variant={props.variant || 'core'} />;
}
