const slides = document.querySelectorAll('[data-name]');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
let current_slide = 0;
let maxSlide = slides.length - 1;

// let slideShow = () => {
//     slides.forEach(slide => {
//             if (slide.classList.contains('hide')) {
//                 slide.classList.remove('hide');
//             } else {
//                 slide.classList.add('hide');
//             }
//     })
// }
let hideSlides = () => {
    slides.forEach(slide => slide.classList.remove('hide'));
}
let next = async () => {
    current_slide = (current_slide <= 0) ? current_slide : current_slide - 1;
    // slideShow();
    await hideSlides();
    slides[current_slide].classList.add('hide');
}
let prev = async () => {
    current_slide = (current_slide >= maxSlide) ? current_slide : current_slide + 1;
    // slideShow();
    await hideSlides();
    slides[current_slide].classList.add('hide');
}
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);