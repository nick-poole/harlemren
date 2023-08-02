/*=============== SHOW MENU ===============*/
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

/*===== CLOSE MENU =====*/
/*If_________exists */
if (navClose) {
    // Clicking on navClose v
    navClose.addEventListener("click", () => {
        // removes show-menu class
        navMenu.classList.remove("show-menu");
    });
}

/*============= REMOVE MENU MOBILE =============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    //Remove the show-menu class
    navMenu.classList.remove("show-menu");
}
//For each nav link click ^
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======= CHANGE BACKGROUND HEADER =======*/
function scrollHeader() {
    const header = document.getElementById("header");
    // If the scroll is greater than 100 viewport height, v
    if (this.scrollY >= 80)
        //add the scroll-header class to the header tag
        header.classList.add("scroll-header");
    //else remove
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*============ SWIPER SERVICES ============*/
let swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 10,
    coverflowEffect: {
        rotate: 0,
        slideShadows: true,
    },
});

/*============ SHOW SCROLL UP ============*/
const headerHeight = document.getElementById("header").offsetHeight;

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 200 viewport height
    if (this.scrollY >= 200 + headerHeight)
        //add the show-scroll class to the a tag
        scrollUp.classList.add("show-scroll");
    // else remove
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*========= HEADER HEIGHT COMPENSATION =========*/
//All links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        //href value without the hash symbol
        const id = this.getAttribute("href").substring(1);

        //section corresponding to the link
        const section = document.getElementById(id);

        // Scroll to section (minus the height of the header)
        window.scroll({
            //(--header-height: 4.5rem)
            top: section.offsetTop - headerHeight,
            behavior: "smooth",
        });
    });
});

/*========= SCROLL SECTIONS ACTIVE LINK =========*/
function scrollActive() {
    const sections = document.querySelectorAll("section[id], article[id]");

    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerHeight;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        } else {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==========  SCROLL REVEAL ANIMATION ========== */
