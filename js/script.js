// Begin JS


// New Navbar

// Get the menu logo and navbar elements
const menuLogo = document.getElementById('menu_logo');
const navbar = document.getElementById('navbar');

// Define the open and close images
const openImage = '../img/Hamburger Icon.png';
const closeImage = '../img/Back Button.png';

// Add a click event listener to the menu logo
menuLogo.addEventListener('click', function() {
  // Toggle the 'clickHide' class on the navbar
  navbar.classList.toggle('clickHide');

  // Update the menu logo image based on the navbar's state
  if (navbar.classList.contains('clickHide')) {
    menuLogo.src = openImage;
  } else {
    menuLogo.src = closeImage;
  }
});




// Carousel

$('#ca-container').contentcarousel({
	// speed for the sliding animation
	sliderSpeed		: 500,
	// easing for the sliding animation
	sliderEasing	: 'easeOutExpo',
	// speed for the item animation (open / close)
	itemSpeed		: 500,
	// easing for the item animation (open / close)
	itemEasing		: 'easeOutExpo',
	// number of items to scroll at a time
	scroll			: 1	
});

