(function() {
  var wordsContainer = document.querySelector('.words-container');
  var words = ['UX/UI Design', 'Product Design', 'Visual Design', 'UX Research', 'Interaction Design', 'Graphic Design', 'Web Design', 'Game Design'];

  for (var i = 0; i < words.length; i++) {
    var word = document.createElement('span');
    word.className = 'homeword';
    word.innerText = words[i];
    wordsContainer.appendChild(word);
    positionWord(word);
  }

  function positionWord(word) {
    var overlap = true;
    while (overlap) {
      word.style.left = Math.floor(Math.random() * (window.innerWidth - word.offsetWidth)) + 'px';
      word.style.top = Math.floor(Math.random() * (window.innerHeight - word.offsetHeight)) + 'px';
      var rotation = Math.floor(Math.random() * 60) - 30;
      word.style.transform = 'rotate(' + rotation + 'deg)';
      overlap = false;
      for (var i = 0; i < document.getElementsByClassName('homeword').length; i++) {
        var otherWord = document.getElementsByClassName('homeword')[i];
        if (word != otherWord) {
          var dx = word.offsetLeft - otherWord.offsetLeft;
          var dy = word.offsetTop - otherWord.offsetTop;
          var distance = Math.sqrt(dx * dx + dy * dy);
        }
      }
    }
  }

  //window.addEventListener('resize', function() {
    //var words = document.getElementsByClassName('homeword');
    //for (var i = 0; i < words.length; i++) {
      //positionWord(words[i]);
    //}
  //});
})();
