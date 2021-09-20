let logo = document.getElementById("logo-home");
let nav_menu = document.getElementById("nav-menu");
let burger_checking = document.getElementById("check");
let header = document.querySelector("header");

// const navbar = Array.from(document.querySelectorAll("#nav-menu>ul>li"));

// Array.from(navbar), (li) => console.log(li.textContent);

let clickNavBar = () => {
  nav_menu.style.left = "-100%";
};

let replySubmit = () => {
  alert("Thank you for completing your form.");
};
let mediaQuery = (size) => {
  if (size.matches) {
    // document.getElementById("logo-home").src = "assets/logo-small.svg";
    logo.src = "assets/logo-small.svg";
    logo.src = "../assets/logo-small.svg";
  } else {
    logo.src = "assets/logo.svg";
    logo.src = "../assets/logo.svg";
  }
};

let nav_appear = () => {
  if (burger_checking.checked === true) {
    // if (nav_menu) {
    //   console.log("exist 2");
    // }
    nav_menu.style.left = 0;
  } else {
    nav_menu.style.left = "-100%";
  }
};

//fetching mediaquery
var x = window.matchMedia("(max-width:  768px)");
mediaQuery(x);
x.onchange = mediaQuery;

//apear nav menu
nav_appear(burger_checking.checked);

//change background of nav when scrolling down

window.onscroll = () => {
  let scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
