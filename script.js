

const modal = document.querySelector('.popup');
const btn = document.querySelector('.order-btn');
const closeBtn = document.querySelector('.close-btn');


var openPopup = function() {
	btn.addEventListener('click', function() {
		modal.classList.remove('closed');
		modal.classList.add('opened');
	});
};

var closePopup = function() {
	closeBtn.addEventListener('click', function() {
		modal.classList.add('closed');
		modal.classList.remove('opened');
	});
};

openPopup();
closePopup()

window.onscroll = function() {
	docScroll();
}

function docScroll () {
let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
	docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
	scrolled = (windowScroll / docHeight) * 100;

let progressBar = document.querySelector('.progress-bar')
progressBar.style.width = scrolled + "%";

}