// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	function menu() {
		const buttonMenu = document.querySelector('.menu-burger')
		const buttonMenuContent = document.querySelector('.nav')

		buttonMenu.addEventListener('click', () => {
			buttonMenuContent.classList.toggle('show')
		})
	}

	function accordion() {
		const accordionButton = document.querySelectorAll('.accordion-button')
		const accordionBody = document.querySelectorAll('.accordion-body')
		
		accordionButton.forEach((item) => {
			item.addEventListener('click', function () {
				accordionBody.forEach((item) => {
					item.addEventListener('click', function () {
						this.classList.add('show')
					})
				})
			})
		})
	}

	menu()
	accordion()
})
