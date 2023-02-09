var prevScrollpos1 = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos1 = window.pageYOffset;
      if (prevScrollpos1 > currentScrollPos1) {
        document.getElementById("socialmenu").style.left = ".5em";
      } else {
        document.getElementById("socialmenu").style.left = "-6em";
      }
      prevScrollpos1 = currentScrollPos1;
}