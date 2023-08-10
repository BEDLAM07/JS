// Первое что делаем это получаем кнопки и добавляем к ним слушателя
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

//Добавляем правильный градиент картинки. Для этого задаем изначальный отступ сверху для градиента, для того чтобы картинки совпали. Для этого нужно знать кол-во картинок и в зависимости от значения высчитываем top
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')// получаем сам блок main-slide
const slidesCount = mainSlide.querySelectorAll('div').length// считаем кол-во div внутри. Получили массив div

//создаем переменную, для того чтобы отследить какой слайд активный в данный момент
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`//работаем со стилями объекта sidebar. Используем обратные кавычки(динамические строчки). Считаем значение vh. Цифра 3 - это кол-во слайдов. Его необходимо вычислить. Вычитаем единицу так как по умолчанию уже есть один слайд.

//добавляем слушателя
upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

//добавляем возможность переключать слайдер с клавиатуры
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

//создаем функцию и будем ее вызывать с одним параметром, но разным. Параметр будет передавать направление по которому кликаем.
function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        //проверяем кол-во слайдов и если он равен slidesCount - обнуляем его
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
        //функционал при нажатие кнопки вниз
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount-1
        }
    }
    // анимация
    const height = container.clientHeight// получаем свойство clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`// вычисляем размер экрана
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}