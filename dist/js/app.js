
// Nav
const navBtn = document.querySelector(".nav__btn")
const navLinks = document.querySelector(".nav__links")
const navLinksArray = document.querySelectorAll(".nav__links a")
const testimonialsArrows = document.querySelector(".testimonials__arrows")
const testimonialTitle = document.querySelector(".testimonial__title")

const handleOpenNav = () => {
  navLinks.classList.toggle("nav__links--active")
  if (navLinks.classList.contains("nav__links--active")) {
    testimonialsArrows.style.visibility = "hidden" 
    testimonialTitle.style.visibility = "hidden"
  } else {
    testimonialsArrows.style.visibility = "visible"
    testimonialTitle.style.visibility = "visible"
  }
}

navBtn.onclick = handleOpenNav
navLinksArray.forEach((link) => {
  link.onclick = handleOpenNav
})

// Responsive layout
const heroContainer = document.querySelector(".hero")
const heroText = document.querySelector(".hero__text")
const heroImg = document.querySelector(".hero__img")
const downloadContainer = document.querySelector(".download")
const downloadText = document.querySelector(".download__text")
const downloadImg = document.querySelector(".download__img")

const handleResponsive = () => {
    if (window.innerWidth < 1024) {
        heroContainer.insertBefore(heroImg, heroText)
        downloadContainer ? downloadContainer.insertBefore(downloadImg, downloadText) : null
    } else {
        heroContainer.insertBefore(heroText, heroImg)
        downloadContainer ? downloadContainer.insertBefore(downloadText, downloadImg) : null
    }
}

window.onresize = handleResponsive
window.onload = handleResponsive

// Testimonials Slider
const nextBtn = document.querySelector(".next__btn")
const prevBtn = document.querySelector(".prev__btn")
const testimonialsSlider = document.querySelector(".testimonial__inner__slider")
const testimonialArticle = document.querySelector(".testimonial__article")
const testimonialDots = document.querySelectorAll(".testimonials__dot")
const testimonialBtns = document.querySelectorAll(".testimonials__arrow")
const childrenNum = testimonialsSlider.childElementCount
let testimonialCounter = 0

const handleSlideImages = () => {
  testimonialsSlider.style.transform = "translateX(" + -testimonialArticle.clientWidth * testimonialCounter + "px)"
  testimonialsSlider.style.transition = "transform 0.4s ease-out"
  testimonialDots.forEach((dot) => dot.classList.remove("testimonials__dot--active"))
  testimonialDots[testimonialCounter].classList.add("testimonials__dot--active")
  testimonialBtns.forEach((btn) => btn.classList.add("testimonials__arrow--active"))
  if (testimonialCounter === 0) {
      testimonialBtns[0].classList.remove("testimonials__arrow--active")
  } 
  if (testimonialCounter > childrenNum - 2) {
    testimonialBtns[1].classList.remove("testimonials__arrow--active")
  }
}

nextBtn.addEventListener("click", () => {
  if (testimonialCounter > childrenNum - 2) {
    return
  }
  testimonialCounter++
  handleSlideImages()
})

prevBtn.addEventListener("click", () => {
  if (testimonialCounter < 1) {
    return
  }
  testimonialCounter--
  handleSlideImages()
})