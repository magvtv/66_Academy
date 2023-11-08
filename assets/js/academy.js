// show menu on mobile screen
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show__menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show__menu');
	});
}

// remove mobile menu after making choice
const navLink = document.querySelectorAll('.nav__link');

function removeLink() {
    navMenu.classList.remove('show__menu')
}
navLink.forEach(link => link.addEventListener('click', removeLink))