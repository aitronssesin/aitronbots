
// to automatically hide/show navbar based on user's scroll position
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0"; // navbar's original position
		document.getElementById("navbar").style.boxShadow = "0 2px 4px var(--boxShadow)"; // navbar's original box shadow
  } else { 
    document.getElementById("navbar").style.top = "-70px"; // hides navbar (makes it go up)
  }

  prevScrollpos = currentScrollPos;
	
	// if user scrolls past a certain position
	if (window.pageYOffset <= 50) {
		document.getElementById("navbar").style.boxShadow = "none"; // removes box shadow
	}
}

// to set active class to selected element
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("navBarItem");

// loops through each link in navbar and checks for click
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("navBarActive");
	current[0].className = current[0].className.replace(" navBarActive", ""); 
	this.className += " navBarActive";
	});
}