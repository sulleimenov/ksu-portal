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
})
