const btn = document.querySelector('.top__burger');
const nav = document.querySelector('.navigation');
const close = document.querySelector('.top__close');

btn.addEventListener('click', function () {
	nav.classList.toggle('navigation__animation');
	close.classList.toggle('hidden');
	btn.classList.toggle('hidden');
});

close.addEventListener('click', function () {
	nav.classList.toggle('navigation__animation');
	close.classList.toggle('hidden');
	btn.classList.toggle('hidden');
});
