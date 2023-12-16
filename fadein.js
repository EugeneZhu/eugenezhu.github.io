function reveal() {
    var reveals = document.querySelectorAll(".fadein");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("isvisible");
      } else {
        reveals[i].classList.remove("isvisible");
      }
    }

    var reveals = document.querySelectorAll(".fadefooter");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("isvisible");
      } else {
        reveals[i].classList.remove("isvisible");
      }
    }
  }

  window.addEventListener("scroll", reveal);

