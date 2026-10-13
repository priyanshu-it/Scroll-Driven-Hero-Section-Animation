gsap.registerPlugin(ScrollTrigger);

// Intro animation
gsap.from(".title", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".stat", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15
});

// Set the fixed initial car position
gsap.set(".car", {
  left: 0,
  x: 0,
  yPercent: -50,
  scale: 0.8
});

// Move car from start to end of road
gsap.to(".car", {
  left: () => {
    const road = document.querySelector(".road");
    const car = document.querySelector(".car");

    return road.clientWidth - car.offsetWidth;
  },
  x: 0,
  scale: 1,
  ease: "none",

  scrollTrigger: {
    trigger: ".track",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});

// Background color animation
gsap.to(".stage", {
  backgroundColor: "#1c2b3a",
  color: "#f2ece0",
  ease: "none",

  scrollTrigger: {
    trigger: ".track",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

// Hide scroll hint while scrolling
gsap.to(".hint", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".track",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

// Recalculate positions after resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// Refresh after the car image loads
const carImage = document.querySelector(".car img");

if (carImage) {
  carImage.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});