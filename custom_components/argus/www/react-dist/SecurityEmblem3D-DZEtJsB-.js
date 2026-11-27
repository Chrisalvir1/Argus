import { a as e, n as t, r as n, t as r } from "./mode-palette-DOtETvMO.js";
import { A as i, C as a, D as o, E as s, M as c, N as l, O as u, S as d, T as ee, _ as f, a as p, b as m, c as h, d as g, f as _, g as te, h as v, i as y, j as ne, k as b, l as re, m as ie, n as ae, o as x, p as oe, r as se, s as ce, t as le, u as ue, v as de, w as fe, x as pe, y as me } from "./three-BfrCW9wk.js";
// src/features/performance/frames.ts
var S = /* @__PURE__ */ e(n(), 1);
function he(e, t) {
	return 1 - (1 - e) ** (Math.max(0, Math.min(100, t)) / (1e3 / 60));
}
function ge(e) {
	return e.saveData || e.cores !== void 0 && e.cores <= 2 || e.memoryGB !== void 0 && e.memoryGB <= 2 ? .65 : 1;
}
var _e = class {
	maximum;
	quality;
	constructor(e = 1) {
		this.maximum = e, this.quality = e;
	}
	intervals = [];
	costs = [];
	previous = 0;
	since = 0;
	unhealthy = 0;
	healthy = 0;
	changedAt = -1e400;
	reset() {
		this.intervals = [], this.costs = [], this.previous = 0, this.since = 0, this.unhealthy = 0, this.healthy = 0;
	}
	sample(e, t) {
		if (this.previous && this.intervals.push(e - this.previous), this.previous = e, this.costs.push(t), this.since ||= e, e - this.since < 2e3 || this.intervals.length < 20) return null;
		let n = this.intervals.slice().sort((e, t) => e - t), r = n[Math.floor(n.length * .2)], i = n[Math.floor(n.length * .95)], a = this.intervals.reduce((e, t) => e + t, 0) / this.intervals.length, o = this.costs.reduce((e, t) => e + t, 0) / this.costs.length, s = i > r * 1.65 || o > r * .65;
		return this.unhealthy = s ? this.unhealthy + 1 : 0, this.healthy = !s && o < r * .35 ? this.healthy + 1 : 0, e - this.changedAt >= 8e3 && (this.unhealthy >= 2 && this.quality > .5 ? (this.quality = Math.max(.5, Math.round((this.quality - .15) * 100) / 100), this.changedAt = e, this.unhealthy = 0, this.healthy = 0) : this.healthy >= 4 && this.quality < this.maximum && (this.quality = Math.min(this.maximum, Math.round((this.quality + .1) * 100) / 100), this.changedAt = e, this.healthy = 0)), this.intervals = [], this.costs = [], this.since = e, {
			cadenceHz: Math.round(1e3 / r),
			deliveredFps: Math.round(1e3 / a),
			p95Ms: +i.toFixed(2),
			renderMs: +o.toFixed(2),
			quality: this.quality
		};
	}
};
// src/features/dashboard/components/crystal-layout.ts
function ve(e, t) {
	if (e < 1) return 0;
	let n = Math.PI / e, r = Math.min(Math.PI / 6, n);
	return r + (n - r) * Math.max(0, Math.min(1, t));
}
function ye(e) {
	let t = Math.max(32, Math.ceil(192 / Math.max(1, e))), n = 1.03, r = 1.58, i = .045, a = .22, o = [
		[1.075, a],
		[1.5350000000000001, a],
		[r, .175],
		[r, i],
		[1.5350000000000001, 0],
		[1.075, 0],
		[n, i],
		[n, .175]
	], s = [], c = [];
	for (let e = 0; e <= t; e++) for (let [n, r] of o) s.push(n, e / t * 2 - 1, r);
	for (let e = 0; e < t; e++) for (let t = 0; t < o.length; t++) {
		let n = e * 8 + t, r = e * 8 + (t + 1) % 8;
		c.push(n, r, n + 8, r, r + 8, n + 8);
	}
	for (let e of [0, t]) {
		let t = s.length / 3;
		s.push(1.3050000000000002, e === 0 ? -1 : 1, a / 2);
		for (let n = 0; n < 8; n++) {
			let r = e * 8 + n, i = e * 8 + (n + 1) % 8;
			c.push(...e === 0 ? [
				t,
				i,
				r
			] : [
				t,
				r,
				i
			]);
		}
	}
	let l = new p();
	return l.setAttribute("position", new y(new Float32Array(s.length), 3)), l.setIndex(c), l.userData.polar = Float32Array.from(s), be(l, ve(e, 0)), l;
}
function be(e, t) {
	let n = e.userData.polar, r = e.getAttribute("position");
	for (let e = 0; e < r.count; e++) {
		let i = n[e * 3], a = n[e * 3 + 1] * t;
		r.setXYZ(e, i * Math.cos(a), i * Math.sin(a), n[e * 3 + 2]);
	}
	r.needsUpdate = !0, e.computeBoundingSphere();
}
// src/features/dashboard/components/SecurityEmblem3D.tsx
var C = t(), w = {
	disarmed: r.disarmed.three,
	armed_home: r.home.three,
	armed_away: r.away.three,
	armed_night: r.night.three,
	triggered: r.alarm.three,
	unavailable: 8557480,
	unknown: 8557480,
	pending: 0xffc354,
	arming: 0xffc354
};
function T(e) {
	let t = (0, S.useRef)(null), n = (0, S.useRef)(e);
	n.current = e;
	let [y, T] = (0, S.useState)(!1), xe = (0, S.useRef)(() => {});
	(0, S.useEffect)(() => {
		xe.current();
	}, [
		e.state,
		e.pulse,
		e.pulseKey,
		e.zones
	]);
	let E = e.zonesEnabled === !1 ? 7 : e.zones?.length ?? 0;
	return (0, S.useEffect)(() => {
		let y = t.current;
		if (!y) return;
		T(!1);
		let S = navigator, C = ge({
			cores: S.hardwareConcurrency,
			memoryGB: S.deviceMemory,
			saveData: S.connection?.saveData
		}), D;
		try {
			D = new se({
				alpha: !0,
				antialias: C > .7,
				powerPreference: "low-power"
			});
		} catch {
			T(!0);
			return;
		}
		D.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), D.transmissionResolutionScale = .5, D.outputColorSpace = fe, D.toneMapping = 4, D.toneMappingExposure = .9, D.setClearColor(0, 0);
		let Se = y.closest(".entry"), O = y.closest(".console-emblem-viewport"), k = Se || O || y;
		Se?.querySelectorAll("canvas.console-emblem-canvas").forEach((e) => e.remove()), D.domElement.className = "console-emblem-canvas", D.domElement.setAttribute("aria-hidden", "true"), k.appendChild(D.domElement);
		let A = "http://www.w3.org/2000/svg", j = document.createElementNS(A, "svg");
		j.setAttribute("aria-hidden", "true"), Object.assign(j.style, {
			position: "absolute",
			inset: "0",
			width: "100%",
			height: "100%",
			zIndex: "2",
			pointerEvents: "none"
		}), k.appendChild(j);
		let M = new ee(), N = new pe(34, 1, .1, 30);
		N.position.set(0, 0, 9.2);
		let Ce = new ae(D), we = new le(), Te = Ce.fromScene(we, .04);
		M.environment = Te.texture, we.dispose(), Ce.dispose();
		let P = new g();
		M.add(P);
		let F = new h(n.current.pulse === "sos" ? w.triggered : w[n.current.state] ?? w.unknown), Ee = new h(), De = new de({
			color: 4350343,
			metalness: .12,
			roughness: .12,
			transmission: .8,
			thickness: .35,
			ior: 1.46,
			clearcoat: 1,
			clearcoatRoughness: .08,
			envMapIntensity: 1.1
		}), Oe = new de({
			color: 1190212,
			metalness: .72,
			roughness: .17,
			clearcoat: 1,
			envMapIntensity: 2
		}), ke = new me({
			color: F,
			emissive: F,
			emissiveIntensity: 2.5,
			metalness: .35,
			roughness: .2,
			toneMapped: !1
		}), I = [], L = (e, t, n = P) => {
			I.push(e);
			let r = new te(e, t);
			return n.add(r), r;
		}, Ae = (e, t, n, r = P) => L(new i(e, t, 8, 64), n, r), R = new g();
		P.add(R);
		let je = [], Me = [], Ne = [], Pe = [], Fe = [], Ie = document.createElement("canvas").getContext("2d"), Le = [], Re = (e) => {
			let t = Le[e], r = n.current.zonesEnabled === !1 ? void 0 : n.current.zones?.[e];
			if (!t || (t.group.style.display = r ? "" : "none", !r)) return;
			let i = `ZONA ${r.number}`, a = r.area?.trim() || "Sin área", o = `${i}\n${a}`;
			if (o === t.key) return;
			let s = Ie;
			if (!s) return;
			t.key = o;
			let c = (e, t, n, r, i) => {
				for (s.font = `${i} ${n}px system-ui, sans-serif`; n > r && s.measureText(t).width > 482;) s.font = `${i} ${--n}px system-ui, sans-serif`;
				if (s.measureText(t).width > 482) {
					let e = Array.from(t);
					for (; e.length && s.measureText(e.join("") + "…").width > 482;) e.pop();
					t = e.join("") + "…";
				}
				e.textContent = t, e.setAttribute("font-size", String(n));
			};
			c(t.title, i, 80, 48, 850), c(t.area, a, 51, 34, 650);
		};
		if (e.variant === "core" || e.variant === "crystal" || !e.variant) {
			for (let e = 0; e < E; e++) {
				let t = e / E * Math.PI * 2 - Math.PI / 2, r = new g();
				R.add(r), Me.push(r);
				let i = new f({
					color: n.current.pulse === "sos" ? w.triggered : w[n.current.state] ?? w.unknown,
					toneMapped: !1
				});
				Fe.push(i);
				let a = L(ye(E), i, r);
				Pe.push(a), a.position.z = -.08, a.frustumCulled = !1, r.userData.crystalGeometry = a.geometry, r.userData.closure = n.current.state === "disarmed" ? 0 : 1, r.userData.appliedSpan = -1;
				let o = ve(E, 0), s = Math.min(.86, 2.26 * Math.tan(o) * .8), c = document.createElementNS(A, "g");
				c.setAttribute("fill", "#05070b"), c.setAttribute("font-family", "system-ui, sans-serif"), c.setAttribute("text-anchor", "middle"), c.setAttribute("dominant-baseline", "central");
				let l = document.createElementNS(A, "text");
				l.setAttribute("y", "-29"), l.setAttribute("font-weight", "850");
				let u = document.createElementNS(A, "text");
				u.setAttribute("y", "38"), u.setAttribute("font-weight", "650"), c.append(l, u), j.appendChild(c);
				let d = new m();
				d.position.set(1.28, 0, .143), r.add(d), Le.push({
					object: d,
					group: c,
					title: l,
					area: u,
					width: s,
					key: ""
				}), Re(e), r.userData.angle = t, r.userData.material = i;
			}
			Ae(.77, .09, Oe), Ae(.8, .012, De);
		} else {
			let t = e.variant === "crystal" ? [
				[0, 1.57],
				[1.28, .93],
				[1.15, -.6],
				[0, -1.57],
				[-1.15, -.6],
				[-1.28, .93]
			] : [
				[0, 1.52],
				[1.27, .77],
				[1.12, -.6],
				[0, -1.52],
				[-1.12, -.6],
				[-1.27, .77]
			];
			for (let e = 0; e < t.length; e++) {
				let n = t[e], r = t[(e + 1) % t.length], i = new s();
				i.moveTo(n[0] * .98, n[1] * .98), i.lineTo(r[0] * .98, r[1] * .98), i.lineTo(r[0] * .64, r[1] * .64), i.lineTo(n[0] * .64, n[1] * .64), i.closePath();
				let a = new g();
				R.add(a), je.push(a);
				let o = L(new ue(i, {
					depth: .22,
					bevelEnabled: !0,
					bevelSize: .045,
					bevelThickness: .07,
					bevelSegments: 2
				}), De, a);
				o.position.z = -.12 + e % 2 * .055;
				let c = new p().setFromPoints([new l(n[0], n[1], .18), new l(r[0], r[1], .18)]);
				I.push(c), a.add(new oe(c, new ie({
					color: F,
					transparent: !0,
					opacity: .8
				})));
			}
			if (e.variant === "argus") {
				let e = new ce([
					new l(-.92, 0, .23),
					new l(0, .43, .23),
					new l(.92, 0, .23),
					new l(0, -.43, .23)
				], !0);
				L(new ne(e, 64, .025, 6, !0), ke);
			}
		}
		let z = new g();
		P.add(z);
		let ze = new de({
			color: 132880,
			metalness: .78,
			roughness: .055,
			clearcoat: 1,
			clearcoatRoughness: .025,
			envMapIntensity: 3.2,
			emissive: F,
			emissiveIntensity: .08
		}), Be = L(new o(.46, 48, 36), ze, z);
		Be.position.z = .2;
		let Ve = document.createElement("canvas");
		Ve.width = Ve.height = 64;
		let He = Ve.getContext("2d");
		if (He) {
			let e = He.createRadialGradient(23, 21, 1, 32, 32, 30);
			e.addColorStop(0, "rgba(255,255,255,.98)"), e.addColorStop(.12, "rgba(226,246,255,.72)"), e.addColorStop(.42, "rgba(151,211,255,.18)"), e.addColorStop(1, "rgba(100,180,255,0)"), He.fillStyle = e, He.fillRect(0, 0, 64, 64);
		}
		let Ue = new x(Ve);
		Ue.colorSpace = fe;
		let We = new b({
			map: Ue,
			transparent: !0,
			depthWrite: !1,
			toneMapped: !1,
			blending: 2
		}), Ge = new u(We);
		Ge.scale.set(.23, .23, 1), z.add(Ge);
		let Ke = We.clone(), qe = new u(Ke);
		qe.scale.set(.105, .105, 1), z.add(qe);
		let Je = new f({
			color: r.away.three,
			toneMapped: !1
		}), Ye = new f({
			color: r.alarm.three,
			toneMapped: !1
		}), Xe = new ie({
			color: F,
			transparent: !0,
			opacity: .95,
			toneMapped: !1
		}), B = new s();
		B.moveTo(-.3, -.24), B.lineTo(-.3, .1), B.quadraticCurveTo(-.3, .3, -.1, .3), B.lineTo(.24, .3), B.quadraticCurveTo(.3, .3, .3, .24), B.lineTo(.3, .18), B.lineTo(-.1, .18), B.quadraticCurveTo(-.18, .18, -.18, .1), B.lineTo(-.18, -.24), B.quadraticCurveTo(-.18, -.3, -.24, -.3), B.quadraticCurveTo(-.3, -.3, -.3, -.24), B.closePath();
		for (let e = 0; e < 4; e++) {
			let e = new g();
			e.visible = !1, M.add(e), Ne.push(e);
			let t = L(new ue(B, {
				depth: .12,
				bevelEnabled: !0,
				bevelSize: .018,
				bevelThickness: .025,
				bevelSegments: 1,
				curveSegments: 4
			}), Je, e);
			t.position.z = -.04;
			let n = new p().setFromPoints([
				new l(-.265, -.235, .105),
				new l(-.265, .235, .105),
				new l(-.245, .265, .105),
				new l(.235, .265, .105)
			]);
			I.push(n), e.add(new oe(n, Xe));
		}
		let Ze = [
			0,
			1,
			2
		].map(() => new f({
			color: 0xff1028,
			transparent: !0,
			opacity: 0,
			depthWrite: !1,
			side: 2,
			toneMapped: !1
		})), Qe = Ze.map((e, t) => {
			let n = Ae(1, t === 0 ? .042 : .032, e, M);
			return n.visible = !1, n;
		});
		M.add(new _(0xb9dfff, 527904, .65));
		let $e = new re(0xe9f4ff, 2);
		$e.position.set(-3, 4, 5), M.add($e);
		let et = new d(F, 18, 12);
		et.position.set(2, -1, 3), M.add(et);
		let V = 0, H = 0, tt = 0, nt = !0, rt = !1, it = !1, U = 0, at = 0, ot = "", st = "", W = 0, ct = -10, lt = -10, ut = -10, dt = !1, ft = 0, pt = 28, G = 0, mt = 0, K = new _e(C), ht = new h(), q = new c(), J = new c(), gt = window.matchMedia("(prefers-reduced-motion: reduce)"), _t = y.getRootNode() instanceof ShadowRoot ? y.getRootNode().host : y.closest("argus-panel"), vt = () => gt.matches || !!_t?.classList.contains("argus-perf-essential"), yt = -1, bt = -1, xt = -1, St = !0, Ct = () => {
			St = !0;
		}, wt = () => {
			let e = _t?.classList.contains("argus-perf-light") ? .75 : 1, t = vt() ? .6 : Math.min(e, K.quality), n = t <= .7;
			k.dataset.argusRenderQuality = n ? "light" : "full", De.transmission = n ? 0 : .8, D.transmissionResolutionScale = n ? .25 : .5;
			let r = Math.min(window.devicePixelRatio || 1, 2), i = n ? 4e6 : 8e6, a = Math.max(Math.min(r, n ? 1 : 1.75), r * t), o = Math.min(a, Math.sqrt(i / (V * H)));
			V > 0 && H > 0 && (V !== yt || H !== bt || o !== xt) && (D.setDrawingBufferSize(V, H, o), yt = V, bt = H, xt = o);
		}, Y = () => {
			rt || it || !nt || document.hidden || U || (U = window.requestAnimationFrame(Ft));
		};
		xe.current = Y;
		let Tt = new ResizeObserver(() => {
			let e = k.getBoundingClientRect(), t = V !== e.width || H !== e.height;
			if (V = e.width, H = e.height, V <= 0 || H <= 0) return;
			t && Ct(), N.aspect = V / H, N.position.z = Math.max(9.2, 4.8 / (2 * Math.tan(v.degToRad(N.fov / 2)) * N.aspect)), N.updateProjectionMatrix(), pt = Number.parseFloat(getComputedStyle(k).borderTopLeftRadius) || 0;
			let n = O?.getBoundingClientRect();
			if (tt = n ? Math.min(n.width, n.height) : Math.min(V, H), n) {
				let t = 2 * N.position.z * Math.tan(v.degToRad(N.fov / 2)), r = t * N.aspect;
				J.set(((n.left + n.width / 2 - e.left) / V - .5) * r, -((n.top + n.height / 2 - e.top) / H - .5) * t);
			} else J.set(0, 0);
			Y();
		});
		Tt.observe(k), O && O !== k && Tt.observe(O);
		let X = O || y, Et = (e) => {
			if (!(e instanceof PointerEvent)) return;
			let t = k.getBoundingClientRect();
			q.set((e.clientX - t.left) / t.width - .5, (e.clientY - t.top) / t.height - .5), ft = performance.now() + 2200, Y();
		}, Dt = () => {
			ft = performance.now() + 2200, Y();
		}, Ot = () => q.set(0, 0), kt = new a(), At = (e) => {
			if (!(e instanceof MouseEvent) || !n.current.onSelectZone) return;
			let t = D.domElement.getBoundingClientRect();
			if (!t.width || !t.height) return;
			kt.setFromCamera(new c(2 * (e.clientX - t.left) / t.width - 1, 1 - 2 * (e.clientY - t.top) / t.height), N);
			let r = kt.intersectObjects(Pe, !1)[0];
			if (!r) return;
			let i = n.current.zones?.[Pe.indexOf(r.object)];
			i && n.current.onSelectZone(i.id);
		};
		X.addEventListener("click", At);
		let jt = (e) => {
			e.preventDefault(), it = !0, D.domElement.remove(), j.remove(), T(!0);
		};
		X.addEventListener("pointermove", Et), X.addEventListener("pointerdown", Dt), X.addEventListener("pointerleave", Ot), D.domElement.addEventListener("webglcontextlost", jt);
		let Z = new l(), Mt = new l(), Nt = new l(), Pt = (t) => {
			if (it || document.hidden || !nt || V <= 0 || H <= 0) return;
			St &&= (wt(), !1);
			let i = t / 1e3, a = n.current, o = vt(), s = a.state !== ot || `${a.pulse}:${a.pulseKey}` !== st, c = at ? t - at : 1e3 / 60, l = (e) => o ? 1 : he(e, c);
			at = t, a.state !== ot && (a.state === "disarmed" && (ot.startsWith("armed_") || ot === "triggered") && (ct = i), ot = a.state, W = i);
			let u = `${a.pulse}:${a.pulseKey}`;
			u !== st && (st = u, a.pulse && (lt = i));
			let d = a.state === "triggered" || a.pulse === "sos";
			F.lerp(ht.set(d ? w.triggered : w[a.state] ?? w.unknown), l(.12)), ke.color.copy(F), ke.emissive.copy(F), et.color.copy(F), Oe.color.lerp(Ee.set(1190212).lerp(F, .38), l(.12)), Ee.set(1582138).lerp(F, .92), De.color.lerp(Ee, l(.16));
			let ee = a.state === "armed_away" && !d;
			Xe.color.setHex(d ? r.alarm.three : r.away.three), Xe.opacity = ee ? 1 : .58, ze.emissive.copy(F), R.children.forEach((e) => {
				e instanceof oe && e.material.color.copy(F);
			});
			let f = i - lt, p = a.pulse === "sos" ? 1.3 : .65, m = d || a.state === "armed_away", h = a.state === "armed_away" ? i - W : 1e400, g = d ? Math.min(i - lt, i - W) : 1e400;
			(m && !dt || d && s) && (ut = i), dt = m;
			let _ = (d ? g : h) - .65, y = !o && _ >= 0 && _ < .4 ? Math.sin(Math.PI * _ / .4) : 0, ne = i - ut, b = o ? Number(m) : m ? 1 - (1 - Math.min(1, Math.max(0, ne - 1.05) / .85)) ** 3 : 0, re = o ? 0 : d ? Math.sin(i * 43) * .022 + Math.sin(i * 67) * .009 : Math.sin(i * 82) * .105 * y, ie = o ? 0 : d ? Math.cos(i * 47) * .014 + Math.sin(i * 71) * .006 : Math.cos(i * 74) * .035 * y, ae = a.state !== "disarmed" && a.state !== "unavailable" && a.state !== "unknown" || performance.now() < ft, x = 2 * N.position.z * Math.tan(v.degToRad(N.fov / 2)), se = x * N.aspect, ce = [
				[-.18, .16],
				[.18, .16],
				[.18, -.16],
				[-.18, -.16],
				[0, 0]
			], le = a.state === "armed_away" && !d, ue = m && !o && !le ? ce[Math.floor(i * 1.15) % ce.length] : [q.x * .55, -q.y * .55], de = le ? 0 : m || ae || a.pulse === "sensor" ? 1 : 0, fe = ue[0] * de, pe = ue[1] * de, me = l(.1), S = a.state === "disarmed" ? i - ct : 1e400, ge = !o && S >= 0 && S < 1.05 ? Math.sin(Math.PI * S / 1.05) : 0;
			z.position.x += (fe + Math.sin(i * 92) * .09 * ge - z.position.x) * me, z.position.y += (pe + Math.cos(i * 88) * .07 * ge - z.position.y) * me;
			let _e = !ae && a.pulse !== "sensor" && a.state === "disarmed";
			z.rotation.x += ((o ? 0 : q.y * .12) - z.rotation.x) * me;
			let ye = !o && _ >= 0 && _ < .42 ? _ < .15 ? Math.sin(_ / .15 * Math.PI / 2) : Math.cos((_ - .15) / .27 * Math.PI / 2) : 0;
			z.scale.set(1 + ye * .08, 1 - ye * .9, 1);
			let C = i * (_e ? .16 : d ? 1.4 : .42) + Math.atan2(q.y, q.x) * .72 + P.rotation.y * .8;
			for (let [e, t, n] of [[
				Ge,
				C,
				.22
			], [
				qe,
				-C * 1.35 + 2.1,
				.31
			]]) {
				let r = Math.cos(t) * n, i = Math.sin(t) * n;
				e.position.set(r, i, .2 + Math.sqrt(Math.max(.01, .2116 - r * r - i * i)) + .012), e.material.opacity = (o ? .72 : _e ? .38 : .92) * (1 - ye);
			}
			let T = a.state === "disarmed" && !d && !o;
			P.rotation.x += ((T ? q.y * .16 + Math.sin(i * .6) * .018 : 0) - P.rotation.x) * l(.22), P.rotation.y += ((T ? q.x * .25 + Math.sin(i * .45) * .035 : 0) - P.rotation.y) * l(.22), P.position.set(J.x + re, J.y + ie, 0);
			let xe = Math.max(0, 1 - (i - W) / .8), Se = !!k.closest(".ios-fullscreen") && window.matchMedia("(max-width: 760px) and (orientation: portrait)").matches, O = Se ? Math.min(440, tt * .86) : Math.min(260, tt * .5), A = Se ? 5.4 : 3.2, j = x * O / (H * A);
			P.scale.setScalar(j * (o ? 1 : 1 + Math.sin(i * 1.6) * .009 - xe * .07)), Ne.forEach((e, t) => {
				e.visible = m && (o || ne >= 1.05);
				let n = e.children.find((e) => e instanceof te);
				n && (n.material = d ? Ye : Je);
				let r = t === 0 || t === 3 ? -1 : 1, i = t < 2 ? 1 : -1, a = x * (V < 600 ? 30 : 42) / H, s = se * pt / V, c = x * pt / H, l = V < 600 ? a * .6 : s + a * .3, u = V < 600 ? a * .6 : c + a * .3, ee = r * (se / 2 - l), f = k.getBoundingClientRect(), p = k.closest(".ios-fullscreen"), h = p ? Math.max(0, -f.top) : 0, g = p ? Math.min(H, (window.visualViewport?.height || window.innerHeight) - f.top) : H, _ = x * (.5 - (i > 0 ? h : g) / H) - i * u;
				e.position.set(v.lerp(J.x + r * .72 * j, ee, b), v.lerp(J.y + i * .72 * j, _, b), 0);
				let y = v.lerp(.6, a, b);
				e.scale.set(-r * y, i * y, y), e.rotation.z = o ? 0 : (1 - b) * Math.PI * 2;
			});
			let Ce = Math.min(1, Math.max(0, (i - W) / .42)), we = o || a.state === "disarmed" ? 0 : Math.PI * 2 * (1 - (1 - Ce) ** 3);
			R.rotation.z = a.state === "disarmed" && !o ? i * .25 : we + (!o && e.variant === "core" && !d ? Math.sin(i * .3) * .035 : 0), je.forEach((e, t) => {
				let n = b, r = t === 0 || t === 3 ? -1 : 1, a = t < 2 ? 1 : -1, s = r * (se / 2 - .78) - J.x, c = a * (x / 2 - .72) - J.y;
				e.visible = n < .65, e.position.set(s * n / j, c * n / j, 0), e.scale.setScalar(1 - .75 * n);
				let l = e.userData.modeArc;
				l && (l.visible = !m || n < .58), e.rotation.y = o ? 0 : Math.sin(Ce * Math.PI) * .5;
				let u = m && !o ? Math.sin(i * 1.35 + t) * .045 : 0;
				e.rotation.z = u + (!o && y > 0 ? Math.sin(i * 76 + t) * .08 * y : 0);
			}), Me.forEach((e, t) => {
				let n = Number(e.userData.angle) || 0, s = .95, c = a.state === "pending" || a.state === "arming", u = c ? Math.min(1, Math.max(0, (i - W) / .48)) : a.state === "disarmed" ? 0 : 1, ee = u;
				e.userData.closure += (ee - e.userData.closure) * l(.2);
				let f = ve(E, e.userData.closure);
				Math.abs(f - e.userData.appliedSpan) > 1e-4 && (be(e.userData.crystalGeometry, f), e.userData.appliedSpan = f);
				let p = a.state === "disarmed" && S >= 0 ? Math.min(1, Math.max(0, S / 1.05)) : 1, m = 1 - (1 - p) ** 3, h = a.state === "disarmed" ? s * m : c ? v.lerp(s, .42, u) : 0, g = a.zones?.length ? !!a.zones[t]?.open : a.pulse === "sensor" && t === 0, _ = h + (g ? .82 : 0), te = Math.cos(n) * _, y = Math.sin(n) * _, ne = a.state === "disarmed" && !o, b = ne ? Math.sin(i * .8 + t) * .025 : 0;
				a.state === "disarmed" && p >= 1 ? (e.position.x = te, e.position.y = y) : (e.position.x += (te - e.position.x) * l(.12), e.position.y += (y - e.position.y) * l(.12)), e.position.z = .05 + b, e.rotation.z = n, e.scale.setScalar(ne ? 1 + Math.sin(i * 1.3 + t) * .018 : 1);
				let re = e.userData.material;
				re && re.color.setHex(d || g ? r.alarm.three : w[a.state] ?? w.unknown), e.userData.alert = g;
				let ie = Le[t]?.object;
				if (ie) {
					let e = R.rotation.z + n + Math.PI / 2;
					ie.rotation.z = Math.PI / 2 + (Math.cos(e) < 0 ? Math.PI : 0);
				}
				Re(t);
			}), ke.emissiveIntensity = o ? .65 : .7 + Math.sin(i * 2) * .1 + (f < p || d ? .35 : 0), ze.emissiveIntensity = _e ? .004 : d ? .055 : a.state === "armed_away" ? .045 : ae ? .012 : .006;
			let Te = !o && (d || a.pulse === "sensor"), I = 2.35, L = 2.2, Ae = Math.min(se, x) * .43;
			Qe.forEach((e, t) => {
				let n = (i % I + I - t * .28) % I, r = n / L, a = Te && n < L;
				if (e.visible = a, !a) return;
				let o = j * .72 + (Ae - j * .72) * r, s = Ze[t];
				e.position.set(J.x, J.y, .05 - t * .002), e.scale.setScalar(o), s.opacity = .56 * (1 - r) ** 1.35, e.scale.set(o, o, Math.max(.28, 1 - r * .72));
			}), D.render(M, N);
			for (let { object: e, group: t, width: n } of Le) {
				e.localToWorld(Z.set(0, 0, 0)).project(N), e.localToWorld(Mt.set(n / 2, 0, 0)).project(N), e.localToWorld(Nt.set(0, -.15, 0)).project(N);
				let r = (Mt.x - Z.x) * V / 512, i = (Z.y - Mt.y) * H / 512, a = (Nt.x - Z.x) * V / 144, o = (Z.y - Nt.y) * H / 144;
				t.setAttribute("transform", `matrix(${r} ${i} ${a} ${o} ${(1 + Z.x) * V / 2} ${(1 - Z.y) * H / 2})`);
			}
		}, Ft = (e) => {
			U = 0;
			let t = performance.now();
			if (Pt(e), !vt() && nt && !document.hidden && V > 0 && H > 0) {
				if (e >= mt) {
					let n = K.quality, r = K.sample(e, performance.now() - t);
					r && (D.domElement.dataset.argusFrames = JSON.stringify(r), D.domElement.dataset.argusColorSpace = D.outputColorSpace, n !== K.quality && Ct());
				}
				Y();
			}
		}, It = () => {
			window.cancelAnimationFrame(U), U = 0, at = 0, K.reset();
		}, Lt = () => {
			document.hidden ? It() : Y();
		}, Q = () => {
			let e = performance.now();
			e >= mt && K.reset(), mt = e + 1200;
		}, $ = {
			capture: !0,
			passive: !0
		};
		window.addEventListener("scroll", Q, $), window.addEventListener("wheel", Q, $), window.addEventListener("touchmove", Q, $);
		let Rt = () => {
			It(), Ct(), Y();
		}, zt = () => `${vt()}:${_t?.classList.contains("argus-perf-light")}`, Bt = zt(), Vt = new MutationObserver(() => {
			let e = zt();
			e !== Bt && (Bt = e, Rt());
		});
		_t && Vt.observe(_t, {
			attributes: !0,
			attributeFilter: ["class", "data-argus-perf"]
		});
		let Ht = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) ? (window.clearTimeout(G), G = 0, nt = !0, Y()) : (window.clearTimeout(G), G = window.setTimeout(() => {
				G = 0, nt = !1, window.cancelAnimationFrame(U), U = 0, at = 0;
			}, 900));
		}, { rootMargin: "160px 0px" });
		return Ht.observe(k), document.addEventListener("visibilitychange", Lt), gt.addEventListener("change", Rt), Y(), () => {
			rt = !0, xe.current = () => {}, window.clearTimeout(G), G = 0, It(), Tt.disconnect(), Ht.disconnect(), Vt.disconnect(), delete k.dataset.argusRenderQuality, window.removeEventListener("scroll", Q, $), window.removeEventListener("wheel", Q, $), window.removeEventListener("touchmove", Q, $), document.removeEventListener("visibilitychange", Lt), gt.removeEventListener("change", Rt), X.removeEventListener("click", At), X.removeEventListener("pointermove", Et), X.removeEventListener("pointerdown", Dt), X.removeEventListener("pointerleave", Ot), D.domElement.removeEventListener("webglcontextlost", jt), j.remove(), I.forEach((e) => e.dispose()), M.traverse((e) => {
				e instanceof oe && e.material.dispose();
			}), De.dispose(), Oe.dispose(), ke.dispose(), ze.dispose(), Je.dispose(), Ye.dispose(), Xe.dispose(), Fe.forEach((e) => e.dispose()), Ue.dispose(), We.dispose(), Ke.dispose(), Ze.forEach((e) => e.dispose()), Te.dispose(), D.dispose(), D.domElement.remove();
		};
	}, [
		e.variant,
		E,
		e.zonesEnabled
	]), /* @__PURE__ */ (0, C.jsx)("div", {
		className: "console-emblem-3d",
		role: "img",
		"aria-label": [e.label, ...(e.zones || []).map((e) => `Zona ${e.number}: ${e.area?.trim() || "Sin área"}`)].join(". "),
		"data-variant": e.variant || "core",
		children: y ? e.fallback : /* @__PURE__ */ (0, C.jsx)("div", {
			ref: t,
			className: "console-emblem-canvas-host",
			"aria-hidden": "true"
		})
	});
}
export { T as SecurityEmblem3D };
