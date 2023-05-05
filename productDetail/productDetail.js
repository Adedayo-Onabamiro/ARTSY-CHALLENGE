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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DescriptionFunction() {
  document.getElementById("DescriptionDropdown").classList.toggle("show");
}

function ListingFunction() {
  document.getElementById("ListingDropdown").classList.toggle("show");
}

function StatusFunction() {
  document.getElementById("StatusDropdown").classList.toggle("show");
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