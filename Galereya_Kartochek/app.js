function slidesPlugin (activeSlide = 0) {
    //необходимо получить каждый из слайдов в JS для того чтобы мы могли этим управлять
const slides = document.querySelectorAll('.slide'); //с помощью querySelectorAll который работает по правилам css получаем каждый из слайдов

slides[activeSlide].classList.add('active')
// добавляем цикл с помощью которого обходим каждый из слайдов и добавляем определенного слушателя
//создаем на каждой итерации переменную slide и берем ее из массива slides
for (const slide of slides) {
    slide.addEventListener('click', () => {

        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

slidesPlugin (2)