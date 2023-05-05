//START OF HAMBURGER MENU

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.NavUL');
const menu_item = document.querySelectorAll('.NavUL .NavLi a');
const header = document.querySelector('.topNavBox .topNav');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > mobile_menu.style.height) {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  } else {
    // hamburger.classList.add('active');
    // mobile_menu.classList.add('active');
  }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function reveal() {
	var reveal = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveal.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveal[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveal[i].classList.add("active");
	  } else {
		reveal[i].classList.remove("active");
	  }
	}
  }
  
  window.addEventListener("scroll", reveal);

//END OF HAMBURGER MENU


//START OF MOBILE CAROUSEL
class Caroustack
{
	constructor(params)
	{
		// params
		params = params || {};
		this.container = document.querySelector(params.MBcontainer || '.MBcontainer');
		this.items = document.querySelectorAll((params.MBcontainer || '.MBcontainer') + ' > ' + (params.MBitems || '.MBitem'));

		// transition variables
		this.currentSlide = 0;
		this.tempSlide = this.currentSlide;
		this.nextSlide = Math.min(this.currentSlide+1, this.items.length-1);
		this.delta = 0;
		this.angle = 0;

		// handlers
		this.initHandler = event => this.initScroll(event);
		this.moveHandler = event => this.moveScroll(event);
		this.endHandler = event => this.endScroll(event);

		// listeners
		this.container.addEventListener('pointerdown', this.initHandler);
		this.container.addEventListener('pointerup', this.endHandler);
		this.container.addEventListener('pointercancel', this.endHandler);

		// set item order
		this.items.forEach((i, index) => i.style.zIndex = -index);
		this.items[this.currentSlide].classList.add('active');
		this.items[this.nextSlide].classList.add('next');
	}

	initScroll(event)
	{
		// set initial values
		this.initialTouch = event.clientX;
		this.container.classList.add('sliding');
		this.container.addEventListener('pointermove', this.moveHandler);
	}

	moveScroll(event)
	{
		// transition values
		this.delta = this.initialTouch - event.clientX;
		this.angle = this.delta / 100;
		this.scaling = 1 - Math.abs(this.delta) / 5000;

		// limit direction on first and last items
		//if(Math.sign(this.delta) > 0 && this.currentSlide === this.items.length - 1) return;
		//else if(Math.sign(this.delta) < 0 && this.currentSlide === 0) return;

		// set different slide if right or left
		let slide = this.tempSlide;
		this.tempSlide = this.delta < 0 ? this.currentSlide === 0 ? this.items.length - 1 : Math.max(this.currentSlide - 1, 0) : this.currentSlide;

		// prevent spam slide stuck
		if(this.tempSlide !== slide)
		{
			this.items[slide].style.transform = `none`;
		}

		// update slide position
		this.items[this.tempSlide].style.transform = `translateX(${-this.delta}px) rotate(${-this.angle}deg) scale(${this.scaling})`;
	}

	endScroll(event)
	{	
		// reset values
		this.container.removeEventListener('pointermove', this.moveHandler, false);
		this.container.classList.remove('sliding');
		this.items[this.tempSlide].style.transform = `none`;

		// you need to slide up to 50px to go prev/next
		if(Math.abs(this.delta) < 50) return;

		// reset items classes
		this.items.forEach(i =>
		{
			i.classList.remove('MBactive');
			i.classList.remove('MBnext');
		});

		// set current slide
		this.currentSlide = this.delta > 0 ? this.tempSlide == this.items.length - 1 ? 0 : Math.min(this.tempSlide + 1, this.items.length - 1) : this.tempSlide;
		this.items[this.currentSlide].classList.add('MBactive');

		// set next slide
		this.nextSlide = this.currentSlide == this.items.length - 1 ? 0 : this.currentSlide + 1;
		this.items[this.nextSlide].classList.add('MBnext');
	}
}

new Caroustack();
//END OF MOBILE CAROUSEL

//START OF CAROUSEL AT THE TOP OF THE PAGE
var myIndex1 = 0;
carousel1();
var myIndex2 = 0;
carousel2();
var myIndex3 = 0;
carousel3();
var myIndex4 = 0;
carousel4();
var myIndex5 = 0;
carousel5();

var myIndexTC = 0;
carouselTC();


function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 2500);    
}

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2500);    
}

function carousel3() {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}    
    x[myIndex3-1].style.display = "block";  
    setTimeout(carousel3, 2500);    
}

function carousel4() {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex4++;
  if (myIndex4 > x.length) {myIndex4 = 1}    
  x[myIndex4-1].style.display = "block";  
  setTimeout(carousel4, 2500);    
}

function carousel5() {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex5++;
  if (myIndex5 > x.length) {myIndex5 = 1}    
  x[myIndex5-1].style.display = "block";  
  setTimeout(carousel5, 2500);    
}

//END OF CAROUSEL AT THE TOP OF THE PAGE

//START OF AUCTION CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("AuctionSlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


//START OF AUCTION SLIDER CODE
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//START OF TOP CREATOR SLIDER CODE
var TCslider = document.getElementById("ScrollmyRange");
var TCoutput = document.getElementById("Scrolldemo");
TCoutput.innerHTML = TCslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
TCslider.oninput = function() {
  TCoutput.innerHTML = this.value;
}

//START OF AUCTION CAROUSEL
function carouselTC() {
  var i;
  var x = document.getElementsByClassName("TCmySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexTC++;
  if (myIndexTC > x.length) {myIndexTC = 1}    
  x[myIndexTC-1].style.display = "block";  
  setTimeout(carouselTC, 2500);    
}

//START OF AUCTION CAROUSEL
function carouselTC() {
  var i;
  var x = document.getElementsByClassName("TCmySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexTC++;
  if (myIndexTC > x.length) {myIndexTC = 1}    
  x[myIndexTC-1].style.display = "block";  
  setTimeout(carouselTC, 2500);    
}