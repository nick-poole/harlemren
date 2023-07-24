/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== SHOW MENU=====*/
/*If_________exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/*If_________exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    //Remove the show-menu class
    navMenu.classList.remove("show-menu");
}
//For each nav link click ^
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*================ CHANGE BACKGROUND HEADER ================*/

// When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag

/*==================== SWIPER DISCOVER ====================*/

/*==================== VIDEO ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== SCROLL REVEAL ANIMATION ====================*/

/*==================== DARK LIGHT THEME ====================*/
