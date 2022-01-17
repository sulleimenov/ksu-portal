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

	menu()
})
