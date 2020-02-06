import $ from 'jquery'
import 'bootstrap'
import lax from 'lax.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

window.onload = function() {
	AOS.init({
		offset: 50
	})
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
