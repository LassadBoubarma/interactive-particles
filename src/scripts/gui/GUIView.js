import ControlKit from '@brunoimbrizi/controlkit';
import Stats from 'stats.js';

export default class GUIView {

	constructor(app) {
		this.app = app;

		this.particlesHitArea = false;
		this.particlesRandom = 2;
		this.particlesDepth = 4;
		this.particlesSize = 1.5;
		
		this.touchRadius = 0.15;

		this.range = [0, 1];
		this.rangeRandom = [1, 10];
		this.rangeSize = [0, 3];
		this.rangeDepth = [1, 10];
		this.rangeRadius = [0, 0.5];

		this.initControlKit();
		// this.initStats();

		// this.disable();
	}

	initControlKit() {
	const lang = localStorage.getItem("lang") || "en";

	const translations = {
		en: {
			panel: "Control Panel",
			touch: "Touch",
			trail: "Trail",
			radius: "Radius",
			particles: "Particles",
			random: "Random",
			depth: "Depth",
			size: "Size"
		},
		pt: {
			panel: "Painel de Controle",
			touch: "Toque",
			trail: "Trilha",
			radius: "Raio",
			particles: "Partículas",
			random: "Aleatório",
			depth: "Profundidade",
			size: "Tamanho"
		}
	};

	const t = translations[lang];

	// remove old control panel
	const oldPanel = document.querySelector(".controlKit");
	if (oldPanel) oldPanel.remove();

	this.controlKit = new ControlKit();
	const panel = this.controlKit.addPanel({ label: t.panel, width: 300, enable: false });

	panel.addGroup({ label: t.touch, enable: true })
		.addCanvas({ label: t.trail, height: 64 })
		.addSlider(this, 'touchRadius', 'rangeRadius', {
			label: t.radius,
			onChange: this.onTouchChange.bind(this)
		});

	panel.addGroup({ label: t.particles, enable: true })
		.addSlider(this, 'particlesRandom', 'rangeRandom', {
			label: t.random,
			onChange: this.onParticlesChange.bind(this)
		})
		.addSlider(this, 'particlesDepth', 'rangeDepth', {
			label: t.depth,
			onChange: this.onParticlesChange.bind(this)
		})
		.addSlider(this, 'particlesSize', 'rangeSize', {
			label: t.size,
			onChange: this.onParticlesChange.bind(this)
		});

	// store canvas
	const component = this.controlKit.getComponentBy({ label: t.trail });
	if (!component) return;

	this.touchCanvas = component._canvas;
	this.touchCtx = this.touchCanvas.getContext('2d');
}

	initStats() {
		this.stats = new Stats();

		document.body.appendChild(this.stats.dom);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		// draw touch texture
		if (this.touchCanvas) {
			if (!this.app.webgl) return;
			if (!this.app.webgl.particles) return;
			if (!this.app.webgl.particles.touch) return;
			const source = this.app.webgl.particles.touch.canvas;
			const x = Math.floor((this.touchCanvas.width - source.width) * 0.5);
			this.touchCtx.fillRect(0, 0, this.touchCanvas.width, this.touchCanvas.height);
			this.touchCtx.drawImage(source, x, 0);
		}
	}

	enable() {
		this.controlKit.enable();
		if (this.stats) this.stats.dom.style.display = '';
	}

	disable() {
		this.controlKit.disable();
		if (this.stats) this.stats.dom.style.display = 'none';
	}

	toggle() {
		if (this.controlKit._enabled) this.disable();
		else this.enable();
	}

	onTouchChange() {
		if (!this.app.webgl) return;
		if (!this.app.webgl.particles) return;

		this.app.webgl.particles.touch.radius = this.touchRadius;
	}
	
	onParticlesChange() {
		if (!this.app.webgl) return;
		if (!this.app.webgl.particles) return;

		this.app.webgl.particles.object3D.material.uniforms.uRandom.value = this.particlesRandom;
		this.app.webgl.particles.object3D.material.uniforms.uDepth.value = this.particlesDepth;
		this.app.webgl.particles.object3D.material.uniforms.uSize.value = this.particlesSize;

		this.app.webgl.particles.hitArea.material.visible = this.particlesHitArea;
	}

	onPostProcessingChange() {
		if (!this.app.webgl.composer) return;
		this.app.webgl.composer.enabled = this.postProcessing;
	}
}
