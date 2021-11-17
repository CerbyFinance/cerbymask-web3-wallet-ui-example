// @ts-nocheck
import { GlowParticle } from './glow-particle'

import { GlowParticle } from './glow-particle'

// const COLORS = [
// 	{ r: 45, g: 74, b: 227 }, // blue
// 	{ r: 250, g: 255, b: 89 }, // yellow
// 	{ r: 255, g: 104, b: 248 }, // purple
// 	{ r: 44, g: 209, b: 252 }, // skyblue
// 	{ r: 54, g: 233, b: 84 },
// ];

const COLORS = [
	{ r: 45, g: 74, b: 227 }, // blue
	{ r: 250, g: 255, b: 89 }, // yellow
	{ r: 255, g: 104, b: 248 }, // purple
	{ r: 44, g: 209, b: 252 }, // skyblue
	{ r: 54, g: 233, b: 84 },
]

const PI2 = Math.PI * 2

export class ParticleBg {
	constructor() {
		this.canvas = document.createElement('canvas')
		this.canvas.id = 'blur'
		this.canvas.style = 'position:fixed;top:0;left:0;pointer-events:none;'
		document.body.prepend(this.canvas)
		this.ctx = this.canvas.getContext('2d')

		this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

		this.totalParticles = 10
		this.particles = []
		// this.maxRadius = 90;
		// this.minRadius = 40;

		this.maxRadius = 600
		this.minRadius = 300

		this.resize = () => {
			this.stageWidth = 400
			this.stageHeight = 600

			this.canvas.width = this.stageWidth * this.pixelRatio
			this.canvas.height = this.stageHeight * this.pixelRatio
			this.ctx.scale(this.pixelRatio, this.pixelRatio)
			this.createParticles()
		}

		this.createParticles = () => {
			let curColor = 0
			this.particles = []

			for (let i = 0; i < this.totalParticles; i++) {
				const item = new GlowParticle(
					Math.random() * this.stageWidth,
					Math.random() * this.stageHeight,
					Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
					COLORS[curColor]
				)

				if (++curColor >= COLORS.length) {
					curColor = 0
				}

				this.particles[i] = item
			}
		}

		this.animate = () => {
			console.log(999)
			window.requestAnimationFrame(this.animate.bind(this))
			this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

			for (let i = 0; i < this.totalParticles; i++) {
				const item = this.particles[i]
				item.animate(this.ctx, this.stageWidth, this.stageHeight)
			}
		}

		window.addEventListener('resize', this.resize.bind(this), false)
		this.resize()

		window.requestAnimationFrame(this.animate.bind(this))
	}
}
