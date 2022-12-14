const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle Mobile Menu*/
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        //add the menu icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
} else {
    menu.classList.add("active");

    //add the close icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }  
}

/* Event Listner */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

/* Event Listner */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);

  /*Get the button*/
  backtotop = document.getElementById("btntop");

  /* When scrolling down 20px from top show button */
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backtotop.style.display = "block";
    } else {
      backtotop.style.display ="none";
    }
  }

  /* When clicked send to top */
  function topFunction() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, Edge and Opera
  }