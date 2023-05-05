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

// code for slider starts
let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(rangeInput[0].value);
      let maxRange = parseInt(rangeInput[1].value);
      if (maxRange - minRange < rangeMin) {     
        if (e.target.className === "min") {
          rangeInput[0].value = maxRange - rangeMin;        
        } else {
          rangeInput[1].value = minRange + rangeMin;        
        }
      } else {
        rangePrice[0].value = minRange;
        rangePrice[1].value = maxRange;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = rangePrice[0].value;
      let maxPrice = rangePrice[1].value;
      if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

// code for slider ends

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function Bycategory() {
  document.getElementById("CategoryDropdown").classList.toggle("show");
}

function Byprice() {
  document.getElementById("PriceDropdown").classList.toggle("show");
}

function Byartist() {
  document.getElementById("artistDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//code for dropdown in filter section 

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
  } 