//--- Initial scroll position
var scrollState = 0;

//--- Store nav bar classes
var navClasses = document.getElementById('nav-bar').classList;

window.addEventListener('scroll', function () {
  var currentScroll = window.scrollY;
  //--- Determine scroll direction
  if (currentScroll === 0) {
    //--- Top
    console.log('home');
  } else if (currentScroll > scrollState) {
    //--- Down
    navClasses.remove('open');
    navClasses.add('collapse');
  } else {
    //--- Up
    navClasses.remove('collapse');
    navClasses.add('open');
  }
  scrollState = currentScroll;
});
