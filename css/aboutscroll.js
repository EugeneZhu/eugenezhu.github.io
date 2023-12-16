var container = document.getElementById('killer');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth/2;
var scrollArea = windowHeight;
var square1 = document.getElementsByClassName('train')[0];
var square2 = document.getElementsByClassName('train')[1];
var square3 = document.getElementsByClassName('train')[2];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  square1.style.left = scrollPercent*window.innerWidth/3 + 'px';
  square2.style.left = window.innerWidth - scrollPercent*window.innerWidth/3 + 'px';
  square3.style.left = scrollPercent*window.innerWidth/3 + 'px';
});