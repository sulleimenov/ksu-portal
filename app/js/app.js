// import $ from 'jquery'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

// window.jQuery = $
// window.$ = $

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.config({ nullTargetWarn: false })

	function animate() {
		const offerTitle = gsap.timeline({
			scrollTrigger: {
				trigger: '.offer__title',
			},
		})
		const offerSubTitle = gsap.timeline({
			scrollTrigger: {
				trigger: '.offer__subtitle',
			},
		})

		offerTitle.from('.offer__title', { y: 100, opacity: 0, duration: 0.5 })
		offerSubTitle.from('.offer__subtitle', { y: 100, opacity: 0, duration: 0.5 })
	}

	function menu() {
		const buttonMenu = document.querySelector('.menu-burger')
		const buttonMenuContent = document.querySelector('.nav')

		buttonMenu.addEventListener('click', () => {
			buttonMenuContent.classList.toggle('show')
		})
	}

	function accordion() {
		const accordionButtons = document.querySelectorAll('.table-accordion-button')

		accordionButtons.forEach((item) => {
			item.addEventListener('click', (event) => {
				let accCollapse = item.nextElementSibling
				
				if (!item.classList.contains('collapsing')) {
					if (!item.classList.contains('show')) {
						accCollapse.style.display = 'block'
						let accHeight = accCollapse.clientHeight

						setTimeout(() => {
							accCollapse.style.height = accHeight + 'px'
							accCollapse.style.display = ''
						}, 1)

						accCollapse.classList = 'table-accordion-body collapsing'

						setTimeout(() => {
							accCollapse.classList = 'table-accordion-body collapse show'
						}, 300)
					} else {
						accCollapse.classList = 'table-accordion-body collapsing'

						setTimeout(() => {
							accCollapse.style.height = '0px'
						}, 1)

						//
						setTimeout(() => {
							accCollapse.classList = 'table-accordion-body collapse'
							accCollapse.style.height = ''
						}, 300)
					}
					item.classList.toggle('show')
				}
			})
		})
	}

	menu()
	accordion()
	animate()
})
