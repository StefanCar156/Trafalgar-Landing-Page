
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