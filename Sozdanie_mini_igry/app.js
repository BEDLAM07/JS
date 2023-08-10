const board = document.querySelector('#board')// получаем доступ к элементу
const color = ['#3eb881', '#c553be', '#763018', '#4b781f', '#3130b5', '#3522bc', '#cc2cb8', '#489ed9', '#a639c5']// массив цветов

//генерируем кол-во квадратиков динамически
const SQUARES_NUMBER = 700;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    //создаем динамически html элемент с помощью функции createElement
    const square = document.createElement('div')
    square.classList.add('square')

    //добавляем слушателя
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    //создаем html элемент
    board.append(square);
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

//рандомно динамически получаем цвет
function getRandomColor() {
    return color [Math.floor(Math.random() * color.length)]
}


function h1(text) {
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    document.body.appendChild(h1);
}
let counter = 0;
let timer = setInterval(function () {
    ++counter;
    h1("GAME COLOR");
    if (counter == 1) {
        clearInterval(timer);
    }
}, 500);