/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu) { // Added a check to ensure navMenu exists
        navMenu.classList.remove('show-menu')
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the scroll Y position is greater than or equal to 50
    if (header) { // Added a check to ensure header exists
        window.scrollY >= 50 ? header.classList.add('shadow-header')
                             : header.classList.remove('shadow-header')
    }
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
// Ensure Swiper library is loaded before this script runs
// (already handled by your HTML structure if swiper-bundle.min.js is correctly linked)
const swiperPopular = new Swiper('.popular__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints:{
    1150:{
        spaceBetween: 80,
    }
  }
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up') // Renamed for clarity
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (scrollUpButton) { // Added a check to ensure scrollUpButton exists
        window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
                              : scrollUpButton.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const currentScroll = window.scrollY // Renamed for clarity

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58, // Offset adjusted for header height
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        // Check if sectionsClass exists before manipulating its classList
        if (sectionsClass) {
            if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Ensure ScrollReveal library is loaded before this script runs
// (already handled by your HTML structure if unpkg.com/scrollreveal is correctly linked)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000, // Reduced duration slightly for snappier animation
    delay: 300,
    reset: true // Added reset: true if you want animations to repeat on scroll up/down
})

// Corrected typo from popular_swiper to popular__swiper
sr.reveal('.popular__swiper, .footer__container')
sr.reveal('.home__shape', {origin: 'bottom'})
sr.reveal('.home__coffee', {delay: 1000, distance: '200px', duration: 1500})
sr.reveal('.home__splash', {delay: 1600, scale: 0, duration: 1500})
sr.reveal('.home__bean-1, .home__bean-2', {delay: 2200, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal('.home__ice-1, .home__ice-2', {delay: 2600, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal('.home__leaf', {delay: 2200, scale: 0, duration: 1500, rotate: {z: 90}})
sr.reveal('.home__title', {delay: 3500})
sr.reveal('.home__data, .home__sticker', {delay: 4000})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__images', {origin: 'right'})
sr.reveal('.about__coffee', {delay: 1000})
sr.reveal('.about__leaf-1, .about__leaf-2', {delay: 1400, rotate: {z: 90}})
sr.reveal('.products__card, .contact__info', {interval: 100})
sr.reveal('.contact__shape', {delay: 600, scale: 0})
sr.reveal('.contact__delivery', {delay: 1200})