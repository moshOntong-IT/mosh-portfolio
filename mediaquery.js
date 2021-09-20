let logo = document.querySelector(".logo-home");

let mediaQuery = (size) => {
  if (size.matches) {
    logo.src = "assets/logo-small.svg";
  } else {
    logo.src = "assets/logo.svg";
  }
};

//fetching mediaquery
var x = window.matchMedia("(max-width:  768px)");
mediaQuery(x);
x.onchange = mediaQuery;
