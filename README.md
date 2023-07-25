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

## Table of Contents

- [The New Harlem Renaissance Website](#the-new-harlem-renaissance)
- [[thenewharlemrenaissance.com](https://thenewharlemrenaissance.com)](#-thenewharlemrenaissancecom--https---thenewharlemrenaissancecom-)
- [Features](#features)
- [About](#about)
- [Contributing](#contributing)
- [Sass Setup](#sass-setup)
- [Color Palette](#color-palette)
- [SwiperJS](#swiperjs)
- [RemixIcons](#remixicons)
- [Acuity](#acuity)
- [Commit Log](#commit-log)
- [Action Items](#action-items)

### Features

- Barber's brand website encompassing the spirit of the original Harlem Renaissance.
- Offers grooming with precision and utilizes Acuity for easy scheduling.
- Crafted with HTML, CSS, JS, SwiperJS, and RemixIcons.
- **Interactive Navigation Menu**: The site includes a responsive mobile navigation menu with open/close toggles, implemented using JavaScript. Clicking a navigation link also automatically closes the menu, enhancing usability, particularly for single-page navigation.

- **Dynamic Header**: The header dynamically adjusts its style upon scrolling, providing visual feedback and enhancing user experience. This is implemented using JavaScript to add or remove a CSS class based on the scroll position.

### About

The New Harlem Renaissance is a captivating website celebrating the essence of the original Harlem Renaissance. It offers exceptional grooming with precision, and allows easy scheduling through Acuity. The website is expertly crafted with HTML, SASS, JS, SwiperJS, and RemixIcons, delivering a seamless and visually engaging user experience.

### Contributing

As this is a personal website, contributions are limited. If you find any issues or have suggestions, please open an issue.

## Design

The mobile navigation menu features a hamburger button (menu open toggle) and a close button (menu close toggle). When the hamburger button is clicked, the navigation menu expands, revealing the site's navigation links. Clicking the close button will hide the navigation menu.

The toggling functionality for the navigation menu is implemented in JavaScript. The `nav-toggle` and `nav-close` button elements listen for click events, which add or remove the `show-menu` CSS class to/from the `nav-menu` element, thereby showing or hiding the menu.

### Color Palette

- --hr-blue: #0103d0
- --hr-red: #fd050b
- --hr-yellow: #fff903
- --hr-gray: #8c8c8c

## Sass Setup

The project uses Sass for more efficient styling. Edit the `assets/scss/main.scss` file for style changes. The Live Sass Compiler extension in Visual Studio Code compiles this to `assets/css/main.css` automatically upon save.

### SwiperJS

The website utilizes SwiperJS for its smooth carousel effects. The following JavaScript library is included:

```html
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
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

## Commit Log

7/25/23

- FEAT: Create 'About' section with imagery and 'Book Now' CTA

7/24/23

- FEAT(header): Added dynamic class 'scroll-header' to header on scroll

- FEAT(home): Added home section with background image and product box. Set global styling for website buttons.

- FEAT(headernav): Added mobile navigation with open/close toggles and link interaction. Navigation links now close the mobile menu when clicked.

- MAIN: Project Setup - Setup SASS
  - 1. Integrated Google Fonts for typography
  - 2. Integrated SASS with CSS variables and organized sections with comments
  - 3. Updated Remixicon CDN for extensive icons use
  - 4. Added additional images and videos for future use

7/19/23

- MAIN: Project Setup, favicon.ico & readme.md

- Initial Commit

## Action Items
