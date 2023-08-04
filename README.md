# The New Harlem Renaissance

![The New Harlem Renaissance](images/harlem_renaissance_screenshot.png)

## [The New Harlem Renaissance Website](https://thenewharlemrenaissance.com)

### HTML / CSS / JavaScript

---

- HTML
- SASS
- JavaScript
- SwiperJS
- RemixIcons
- Acuity Scheduling
- Formspree

## Table of Contents

- [The New Harlem Renaissance Website](#the-new-harlem-renaissance)
- [thenewharlemrenaissance.com](https://thenewharlemrenaissance.com)
- [Features](#features)
- [About](#about)
- [Contributing](#contributing)
- [Sass Setup](#sass-setup)
- [Color Palette](#color-palette)
- [SwiperJS](#swiperjs-integration)
- [RemixIcons](#remixicons)
- [Acuity](#acuity)
- [Formspree Integration](#formspree-integration)
- [Commit Log](#commit-log)
- [Action Items](#action-items)

---

### Features

- Barber's brand website encompassing the spirit of the original Harlem Renaissance.
- Offers grooming with precision and utilizes Acuity for easy scheduling.
- Crafted with HTML, CSS, JS, SwiperJS, and RemixIcons.
- **Interactive Navigation Menu**: The site includes a responsive mobile navigation menu with open/close toggles, implemented using JavaScript. Clicking a navigation link also automatically closes the menu, enhancing usability, particularly for single-page navigation.
- **Scroll-Up Button**: A dynamic scroll up button allowing for quick and easy navigation back to the top of the page.
- **Dynamic Header**: The header dynamically adjusts its style upon scrolling, providing visual feedback and enhancing user experience. This is implemented using JavaScript to add or remove a CSS class based on the scroll position.
- **Active Section Indicator**:This feature dynamically highlights the navigation menu item corresponding to the section currently in view on the page, aiding user orientation within the site.

### About

The New Harlem Renaissance is a captivating website celebrating the essence of the original Harlem Renaissance. It offers exceptional grooming with precision, and allows easy scheduling through Acuity. The website is expertly crafted with HTML, SASS, JS, SwiperJS, and RemixIcons, delivering a seamless and visually engaging user experience.

### Contributing

As this is a personal website, contributions are limited. If you find any issues or have suggestions, please open an issue.

## Design

The mobile navigation menu features a hamburger button (menu open toggle) and a close button (menu close toggle). When the hamburger button is clicked, the navigation menu expands, revealing the site's navigation links. Clicking the close button will hide the navigation menu.

The toggling functionality for the navigation menu is implemented in JavaScript. The `nav-toggle` and `nav-close` button elements listen for click events, which add or remove the `show-menu` CSS class to/from the `nav-menu` element, thereby showing or hiding the menu.

### Color Palette

- --first-color: hsl(177, 84%, 29%);
- --first-color-light: hsl(177, 64%, 43%);
- --first-color-second: hsl(177, 64%, 22%);
- --first-color-alt: hsl(177, 64%, 15%);
- --sec-color: hsl(27, 89%, 58%);
- --acc-color: hsl(240, 2%, 59%);
- --title-color: hsl(177, 64%, 18%);
- --text-color: hsl(177, 24%, 35%);
- --text-color-light: hsl(177, 8%, 60%);
- --input-color: hsl(177, 64%, 17%);
- --body-color: hsl(177, 100%, 99%);

## Sass Setup

The project uses Sass for more efficient styling. Edit the `assets/scss/main.scss` file for style changes. The Live Sass Compiler extension in Visual Studio Code compiles this to `assets/css/main.css` automatically upon save.

## SwiperJS Integration

The website utilizes SwiperJS for its smooth carousel effects. Here are the steps for setting up SwiperJS:

1. Download the package from [SwiperJS's jsDelivr page](https://www.jsdelivr.com/package/npm/swiper).

2. From the downloaded package, we specifically use `swiper-bundle.min.css` and `swiper-bundle.min.js`.

3. Place `swiper-bundle.min.css` in the `assets/css` folder.

4. Place `swiper-bundle.min.js` in the `assets/js` folder.

5. Link these files in the `index.html`:

```html
<link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
<script src="assets/js/swiper-bundle.min.js"></script>
```

For more information on using SwiperJS, visit the [SwiperJS website](https://swiperjs.com/get-started).

### RemixIcons

The website incorporates RemixIcons for its extensive collection of icons. The icons are included directly in the HTML and CSS files using the Remixicon CDN.

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
```

For more information on using RemixIcons and exploring available icons, visit the [Remixicon github](https://github.com/Remix-Design/RemixIcon) and/or the [Remixicon Website](https://remixicon.com/).

### Acuity

The website uses Acuity for easy appointment scheduling. Users can conveniently book grooming services through Acuity.

### Formspree Integration

Formspree handles submissions from the Contact Form.

```html
<form action="https://formspree.io/f/{your_form_id}" method="POST">
```

## Commit Log

8/4/23

- FEAT(acuity): Update VIP section with a new logo and color scheme. Enhanced user navigation experience by adding a scrollbar to the Swiper component.

- FEAT(acuity): Implemented Acuity Scheduling iframe integration, adjusted iframe width to 100% for responsive design and centered the iframe for a balanced layout."

8/3/23

- FEAT(acuity): Integrated Acuity test account and Google Maps iframe embed.

- FEAT(services): Adds pagination and navigation to Swiper and updated their color schemes

- FEAT(mto): Adjust layout for mto section on large screens (768px)

- FEAT(mto): Adjust layout for mto section on medium screens (568px)

8/2/23

- FEAT(about): Adjust layout for the about section to enhance its appearance on screens 768px and above

- FIX(home): Fixes home container layout by adding margin-top"

- FEAT(headernav): Update navigation styling for larger screens (1024px)

8/1/23

- FIX(headernav): Adjust scroll position for section navigation and restyle section titles
  - Adjusted JavaScript to ensure correct scroll position when navigating to sections via header links
  - Restored 'scroll to top' functionality on scroll-up button
  - Introduced a green background for improved visibility and aesthetics

- FIX(home): Returned the Book Now button to home section

- FEAT(media): Restyle base home section & integrate `Overpass` font.

- FEAT(main): Update nile style logo and revise text as per client's request

- FIX(main): resolved 480px media query scope issue

- FEAT(headernav): Update global button styling

7/31/23

- FEAT(services): Enhance Menu styling w/ borders and box shadow effects

- FEAT(media): Update Menu price list

- FIX(main): resolves SwiperJS issue caused by service container div repositioning

7/30/23

- FEAT(media): Enhance responsive design of about and mto sections on 480px screens and below

- FEAT(media): Preliminary responsive design implementation. Media queries added to handle varying screen sizes. Further refinements to be made for optimal design across devices.

7/29/23

- FEAT(headernav): Implemented Scroll-Up Button and Active Scroll Section Indicator

- FEAT(cta): Enhance contact section layout with CSS grid and restyle contact form.

7/26/23

- FEAT(cta): Add and style contact section with Formspree integration

- FEAT(footer): Add Footer, Terms and Conditions, and Privacy Policy pages.

- FEAT(acuity): Add Appointments section with Acuity placeholder; adjust section order

- FEAT(vip): Create VIP, subscribe, and sponsors sections. Temporarily comment out formspree form pending client discussion.

7/25/23

- FEAT(services): Create Services section with SwiperJS carousel and tiered service offerings

- FEAT(mto): Add Meet the Owner section with banner image, blockquote,and experience stats

- FEAT(about): Create 'About' section with imagery and 'Book Now' CTA

7/24/23

- FEAT(header): Add dynamic class 'scroll-header' to header on scroll

- FEAT(home): Add home section with background image and product box. Set global styling for website buttons.

- FEAT(headernav): Add mobile navigation with open/close toggles and link interaction. Navigation links now close the mobile menu when clicked.

- MAIN: Project Setup - Setup SASS
  - 1. Integrated Google Fonts for typography
  - 2. Integrated SASS with CSS variables and organized sections with comments
  - 3. Updated Remixicon CDN for extensive icons use
  - 4. Added additional images and videos for future use

7/19/23

- MAIN: Project Setup, favicon.ico & readme.md

- Initial Commit

## Action Items

- Incorporate reusable paragraph styles to maintain consistent text formatting across different sections of the site.

- Add menu section to navigation

- Adjust id scroll hitbox.

- Finalize Terms and Privacy Policy Pages
