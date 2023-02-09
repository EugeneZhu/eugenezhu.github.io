var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("movingmenu").style.right = "2em";
    document.getElementById("socialmenu").style.left = ".5em";
  } else {
    document.getElementById("movingmenu").style.right = "-4em";
    document.getElementById("socialmenu").style.left = "-6em";
  }
  prevScrollpos = currentScrollPos;
}