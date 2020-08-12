// mnu-burger
let btnBurger = document.querySelector(".left-panel-icon");
let closeBurger = document.querySelector('.close');
let leftPanel = document.querySelector(".left-panel");

btnBurger.addEventListener("click", function(e) {
	leftPanel.classList.toggle('open');
});

closeBurger.addEventListener('click', function(e) {
	leftPanel.classList.toggle('open');
});
// slider-one
const buttonSlide = document.querySelector('.header-slider-arrow2');
const buttonSlideLeft = document.querySelector('.header-slider-arrow1');
const slide = document.querySelectorAll('.slide');
let counter = 0;


let slider = () => {
	for (let i = 0; i < slide.length; i++) {
		slide[i].classList.add('hide');
	}
	slide[counter].classList.remove('hide');
}

buttonSlide.addEventListener("click", function() {
	if (counter + 1 == slide.length) {
		counter = 0;
	} else {
		counter++;
	}
	slider();
});

buttonSlideLeft.addEventListener("click", function() {
	if (counter - 1 == -1) {
		counter = slide.length - 1;
	} else {
		counter--;
	}
	slider();
});


// slider-two-end

let quotesBtn = document.querySelector('.project-slide-button');
let quotesSlider = document.querySelector('.project-slides');
let counterS = 0;

quotesBtn.addEventListener("click", function() {
	counterS = counterS - 443;//486.8;
	if (counterS < -1772) {
		counterS = 0;
	}
	quotesSlider.style.left = counterS + "px";
});