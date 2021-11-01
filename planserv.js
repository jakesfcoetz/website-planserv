//--- Initial scroll position
var scrollState = 0;

//--- Store nav bar classes
var navClasses = document.getElementsByTagName('nav')[0].classList;

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
    // navClasses.remove('collapse');
    // navClasses.add('open');
  }
  scrollState = currentScroll;
});
