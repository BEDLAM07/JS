// обрабатываем кнопку начать игру
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const color = ['#3eb881', '#c553be', '#763018', '#4b781f', '#3130b5', '#3522bc', '#cc2cb8', '#489ed9', '#a639c5']

let time = 0;
let sccore = 0;

// добавляем прослушку события
startBtn.addEventListener('click', (event) => {
    event.preventDefault()// отменяем добавление в url #
    screens[0].classList.add('up')

})

// делегирование, так как событие повесили на весь блок
timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        sccore++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

// обрабатываем время на экранах
function decreaseTime() {
    if (time ===0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1 class="check">Cчёт: <span class="primary">${sccore}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const element = event.target
    const color = getRandomColor()

    circle.style.background = color
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px` // расположение по горизонтали


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

//рандомно динамически получаем цвет
function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}

//хак
function winTheGame() {
    
    function kill () {
        const circle = document.querySelector('.circle')
        circle.click()

        if (circle) {
            circle.click
        }
    }
    
    setInterval(kill, 42)
}