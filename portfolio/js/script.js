document.addEventListener('DOMContentLoaded', () => {
  var tl = gsap.timeline();
  tl.from('.menu-1', {
    duration: 1,
    y: 10,
    opacity: 0,
    ease: "power3.out",
    delay: .3
  }).from('.menu-2', {
    duration: 1,
    y: 10,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8").from('.menu-3', {
    duration: 1,
    y: 10,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8").from('.menu-4', {
    duration: 1,
    y: 10,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8").from('.menu-5', {
    duration: 1.2,
    y: 10,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8").from('.container-item div', {
    duration: 1.2,
    y: 300,
    opacity: 0,
    stagger: {each: 0.3},
    ease: "power3.out",
  }, "-=0.8").from('.container-item img', {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8").from('.bg-hero', {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
  }, "-=.5")

  gsap.registerPlugin(ScrollTrigger);
  gsap.from('#works div', {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
    scrollTrigger: {
      trigger: '#works div',
    }
  }, "-=0.8");
  gsap.from('#contact h2', {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
    scrollTrigger: {
      trigger: '#contact h2',
    }
  }, "-=0.8")
  gsap.from('#contact h3', {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
    scrollTrigger: {
      trigger: '#contact h3',
    }
  }, "-=0.8")
})