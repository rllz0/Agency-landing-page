# Frontend Mentor - Sunnyside Agency Landing Page Solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Sunnyside Agency Landing Page Solution](#frontend-mentor---sunnyside-agency-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Creating a responsive navigation toggle](#creating-a-responsive-navigation-toggle)
      - [CSS Grid layout for different sections](#css-grid-layout-for-different-sections)
      - [Custom interactive elements with hover effects](#custom-interactive-elements-with-hover-effects)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate using a responsive mobile menu

### Screenshot

![Project Screenshot](./Frontend%20Mentor%20|%20Sunnyside%20agency%20landing%20page.png)

*Note: Add your project screenshot here once completed.*

### Links

- Solution URL: https://github.com/rllz0/Agency-landing-page.git
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-responsive design
- JavaScript for interactive elements
- Custom animations

### What I learned

During this project, I reinforced my understanding of responsive design principles and implemented an accessible mobile navigation menu. Some key learnings include:

#### Creating a responsive navigation toggle

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileNav = document.querySelector('.mobile-nav');
  
  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
});
```

#### CSS Grid layout for different sections

```css
.feature-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .feature-section {
    grid-template-columns: 1fr;
  }
}
```

#### Custom interactive elements with hover effects

```css
.learn-more {
  position: relative;
  width: fit-content;
}

.learn-more::after {
  content: '';
  position: absolute;
  left: -5px;
  right: -5px;
  bottom: -1px;
  height: 10px;
  border-radius: 5px;
  background-color: hsla(51, 100%, 49%, 0.3); 
  z-index: -1;
  transition: background-color 0.3s;
}

.learn-more:hover::after {
  background-color: hsla(51, 100%, 49%, 1); 
}
```

### Continued development

In future projects, I plan to focus on:

- Implementing more advanced JavaScript animations and interactions
- Improving accessibility features
- Optimizing performance for faster load times
- Exploring CSS variables for more maintainable styling
- Adding form validation and submission functionality

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive reference for HTML, CSS, and JavaScript
- [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - Great guide for understanding CSS Grid
- [Kevin Powell's YouTube Channel](https://www.youtube.com/kevinpowell) - Excellent resource for CSS techniques and responsive design principles

## Author

- 
