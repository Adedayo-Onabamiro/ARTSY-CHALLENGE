//START OF HAMBURGER MENU
var modal = document.getElementById("myModal");
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.NavUL');
const menu_item = document.querySelectorAll('.NavUL .NavLi a');
const header = document.querySelector('.topNavBox .topNav');

hamburger.addEventListener('click', () => {
  if (modal.style.display != "block"){
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  }
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
var slider=document.getElementById("slider");
		var values=document.getElementById("wrapper");
		slider.oninput=function(){
			values.style.bottom=slider.value*40+"px";
		}
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

//code for dropdown in filter section 
function favTutorial() {  
  var mylist = document.getElementById("myList");  
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
} 

//product detail js
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

//code for modal
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//code for product detail
var grid_item = document.querySelectorAll(".grid-item");

for (let x = 0 ; x < grid_item.length ; x ++) {
  grid_item[x].addEventListener("click", ()=>{
      modal.style.display = "block"; //display the modal  

      var parent = grid_item[x]
      var children = parent.children[0]
      var childrenChild = children.children[0]
      var childrenChildImg = childrenChild.children[0]
      var descText = childrenChild.children[1].innerHTML
      console.log(childrenChildImg)

      var Box1 = document.querySelector(".Box1")
      console.log(Box1.children[0])
      Box1.appendChild(childrenChildImg)
      // var imagediv = document.createElement("img")
      // imagediv.innerHTML = childrenChildImg
      // Box1.innerHTML = imagediv.innerHTML

      var title = document.querySelector(".Box2 .Sections .title")
      title.innerHTML = descText
  })
}


function toggleLike(x) {
  x.classList.toggle('fa-thumbs-down')
}