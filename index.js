let nav_menu = document.getElementById("nav-menu");
let nav_menu_2 = document.getElementById("nav-menu");
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

let nav_appear = () => {
  if (burger_checking.checked === true) {
    nav_menu.style.left = 0;
  } else {
    nav_menu.style.left = "-100%";
  }
};

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
