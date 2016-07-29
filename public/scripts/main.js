const showMessage = require('./alert');
console.log('js working');

const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
	showMessage();
});