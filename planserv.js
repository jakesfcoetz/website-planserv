var scrollState = 0; //--- Initial scroll position

//--- Store classes
var navClasses = document.getElementsByTagName('nav')[0].classList;
var menuClasses = document.getElementById('menu-list').classList;

window.addEventListener('scroll', function () {
  var currentScroll = window.scrollY;
  //--- Determine scroll direction
  if (currentScroll < 5) {
    //--- Top
    navClasses.remove('collapse');
    navClasses.add('open');
  } else if (currentScroll > scrollState) {
    //--- Down
    navClasses.remove('open');
    navClasses.add('collapse');
  } else {
    //--- Up
  }
  scrollState = currentScroll;
});

//--- Menu toggle functions
function toggleMobileMenu() {
  if (menuClasses.contains('mobile-open')) {
    toggleMenuClose();
  } else {
    toggleMenuOpen();
  }
}

function toggleMenuOpen() {
  menuClasses.add('mobile-open');
}

function toggleMenuClose() {
  menuClasses.remove('mobile-open');
}
