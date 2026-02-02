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
function scrollHeaderAndCheckVip() {
    const header = document.getElementById("header");
    const vipSection = document.querySelector(".vip");
    const navLogo = document.getElementById("navLogo");

    // If the scroll is greater than 100 viewport height
    if (this.scrollY >= 80) {
        // Add the scroll-header class to the header tag
        header.classList.add("scroll-header");

        // Update the logo src
        navLogo.src = "assets/images/logos/6.webp";
    } else {
        header.classList.remove("scroll-header");

        // Restore to original logo
        navLogo.src = "assets/images/logos/7.webp";
    }

    // Get the position of the vipSection
    if (vipSection) {
        let bounds = vipSection.getBoundingClientRect();

        // If scroll is past the vipSection
        if (bounds.top <= 200 && bounds.bottom > 50) {
            header.classList.add("past-vip-section");

            // Update for royalty logo
            navLogo.src = "assets/images/logos/8.webp";
        } else {
            header.classList.remove("past-vip-section");
        }
    }
}

window.addEventListener("scroll", scrollHeaderAndCheckVip);

/*============ SWIPER SERVICES ============*/
if (document.querySelector(".swiper-container")) {
let swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 15,
    coverflowEffect: {
        rotate: 0,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
}

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

        if (section) {
            // Scroll to section (minus the height of the header)
            window.scroll({
                //(--header-height: 4.5rem)
                top: section.offsetTop - headerHeight,
                behavior: "smooth",
            });
        }
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

        const linkElement = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (linkElement) {
            // Check if the link element exists
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                linkElement.classList.add("active-link");
            } else {
                linkElement.classList.remove("active-link");
            }
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==========  CLEAR FORM AFTER SUBMISSION ========== */
window.onload = function () {
    const form = document.getElementById("fs-frm");
    if (form) {
        form.reset();
    }
};

/* ========== CTA FORM VALIDATION ========== */
//Get the form/inputs/submit
const form = document.getElementById("fs-frm");

if (form) {
    const inputs = form.querySelectorAll("input, select, textarea");
    const submitButton = document.getElementById("submit");

    //Check validity
    function checkFormValidity() {
        let isFormValid = true;

        // Loop through each input and check its validity
        inputs.forEach((input) => {
            if (!input.checkValidity()) {
                isFormValid = false;
            }
        });

        // Enable or disable the submit button based on form validity
        if (isFormValid) {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "true");
        }
    }

    // Attach event listeners to input elements
    inputs.forEach((input) => {
        input.addEventListener("input", checkFormValidity);
    });
}

/*==========  SCROLL REVEAL ANIMATION ========== */
