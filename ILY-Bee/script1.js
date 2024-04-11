document.addEventListener("DOMContentLoaded", function () {
  var showLetterBtn = document.getElementById("showLetterBtn");
  var letter = document.getElementById("letter");
  var letterContent = document.getElementById("letterContent");
  var secondLetter = document.getElementById("secondLetter");
  var secondLetterContent = document.getElementById("secondLetterContent");
  var terLetter = document.getElementById("terLetter");
  var terLetterContent = document.getElementById("terLetterContent");

  showLetterBtn.addEventListener("click", function () {
    letter.style.display = "block";
    animateTyping("Que linda que te ves hoy C:", function () {
      setTimeout(function () {
        secondLetter.style.display = "block";
        animateTyping("No te he visto :C", function () {
          setTimeout(function () {
            terLetter.style.display = "block";
            animateTyping("pero sé que lo estás <3 ", function () {
              console.log("Tercer mensaje mostrado");
            }, terLetterContent);
          }, 1000); // Espera 1 segundo antes de mostrar el tercer mensaje
        }, secondLetterContent);
      }, 1000);
    }, letterContent);
  });

  function animateTyping(text, callback, targetElement) {
    var index = 0;
    var typingInterval = setInterval(function () {
      targetElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
        if (callback) callback();
      }
    }, 100);
  }
});
