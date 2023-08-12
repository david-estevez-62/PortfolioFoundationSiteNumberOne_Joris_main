var isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

var goToLink = function(link) {
  if(link !== "#!") {
    window.open(link)
  } else {
    window.location.href = link;
  }
}

