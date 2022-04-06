const hamburgerButton = document.querySelector('.hamburger');
const navigationMobile = document.querySelector('.navigation__items--mobile');
const navigation = document.querySelector('.navigation__items');
const navigationLink = document.querySelectorAll('.navigation__items-link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	hamburgerButton.classList.toggle('is-active');
	navigationMobile.classList.toggle('navigation__items--mobile--active');

	navigationLink.forEach((item) => {
		item.addEventListener('click', () => {
			navigation.classList.remove('navigation__items--mobile--active');
			hamburgerButton.classList.remove('is-active');
		});
	});
};
hamburgerButton.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
