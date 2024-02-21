const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelectorAll(".header--menu>li>a");

//Change navbar menu state
function changeMenuState() {
  const headerMenu = document.querySelector("ul.header--menu");
  const navIcon = document.querySelectorAll(".nav-icon");

  //Show the toggler icon
  headerMenu.classList.toggle("show");

  //toggle between bar and close
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}

//Add show class to show the toggler menu
navToggler.addEventListener("click", changeMenuState);

//Navbar animation effect
function navbarFixed() {
  const headerDOM = document.querySelector(".header");
  const nav_offset_top = headerDOM.clientHeight + 50;

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY || document.documentElement.scrollTop;

    if (scroll > nav_offset_top) {
      headerDOM.classList.add("navbar-fixed");
    } else {
      headerDOM.classList.remove("navbar-fixed");
    }
  });
}

//Navbar menu active
function setMenuActive() {
  const section = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        console.log(current);
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (current == link.getAttribute("href").split("#")[1]) {
        link.classList.add("active");
      }
    });
  });
}

function onMenuClick() {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", changeMenuState);
  }
}

navbarFixed();
setMenuActive();
onMenuClick();
