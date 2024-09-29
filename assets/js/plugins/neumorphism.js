setTimeout(function () {
  fadeOutPreloader(document.getElementById("preloader"), 50);
}, 500);

$(document).ready(function () {
  $(window).on("beforeunload", function () {
    window.scrollTo(0, 0);
  });

  // Initialize AOS
  AOS.init({
    disable: "mobile",
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
    once: true,
  });

  randomizeOrder();
});

function fadeOutPreloader(element, duration) {
  opacity = 1;

  interval = setInterval(function () {
    if (opacity <= 0) {
      element.style.zIndex = 0;
      element.style.opacity = 0;
      element.style.filter = "alpha(opacity = 0)";

      // Allow horizontal scroll
      document.documentElement.style.overflowY = "auto";

      // Remove preloader div
      document.getElementById("preloader").remove();

      clearInterval(interval);
    } else {
      opacity -= 0.1;
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity = " + opacity * 100 + ")";
    }
  }, duration);
}

/* FUNCTIONS */
/* Word Cloud */

function randomizeOrder() {
  var parent = document.getElementById("skills");
  var divs = parent.getElementsByTagName("div");
  var frag = document.createDocumentFragment();

  // Randomize order of skills
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
}
