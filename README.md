# Scroll-Driven Hero Section Animation

A lightweight landing-page prototype that uses GSAP and ScrollTrigger to create a scroll-driven animation inspired by a car traveling along a road while the hero section transforms as the page scrolls.

## Features

- Sticky hero section with a full-viewport stage
- Animated title and stat cards on page load
- Car motion synced to scroll progress
- Background color transition from light sky tones to a darker nighttime look
- Scroll hint fade-out during the drive sequence
- Responsive layout for smaller screens

## Project structure

- `index.html` — page structure and content
- `css/style.css` — styling for the layout, road, car, and responsive behavior
- `js/index.js` — GSAP animation timeline and ScrollTrigger setup
- `assets/car.png` — car artwork used in the animation

## Run locally

Because this is a static page, you can open `index.html` directly in a browser, or serve it locally:

Then open:

```text
http://localhost:8000/
```

## Tech used

- HTML5
- CSS3
- JavaScript
- GSAP
- ScrollTrigger

## Notes

This project relies on the GSAP CDN, so an internet connection is required for the animation libraries to load in the browser.
