const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".vol1 .sliders:first-child");
const secondSlide = document.querySelector(".vol2 .sliders:first-child");
const thirdSlide = document.querySelector(".vol3 .sliders:first-child");

const clickPage1 = document.querySelector(".vol1 ul");
const clickPage2 = document.querySelector(".vol2 ul");
const clickPage3 = document.querySelector(".vol3 ul");

function slide(vol, slide) {
    const currentSlide = document.querySelector(`.${vol} .${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            slide.classList.add(SHOWING_CLASS);
        }
    } else {
        slide.classList.add(SHOWING_CLASS);
    }
}

function slide1() {
    slide("vol1", firstSlide);
}

function slide2() {
    slide("vol2", secondSlide);
}

function slide3() {
    slide("vol3", thirdSlide);
}

slide1();
slide2();
slide3();
clickPage1.addEventListener("click", slide1);
clickPage2.addEventListener("click", slide2);
clickPage3.addEventListener("click", slide3);
