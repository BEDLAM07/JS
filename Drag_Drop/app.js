// все основано на событиях. получаем элемент "перетащи меня" из dom-дерева
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)// обращаемся к самому элементу. dragstart - когда начали перетаскивать.
item.addEventListener('dragend', dragend)// dragend - закончили само перетаскивание.

// проходим циклом по placeholder
for (const placeholder of placeholders) {

    // Добавляем событие к каждому placeholder
    placeholder.addEventListener('dragover', dragover)// вызывается когда элемент находится непосредственно над placeholder
    placeholder.addEventListener('dragenter', dragenter)// заходим на территорию конкретного placeholder
    placeholder.addEventListener('dragleave', dragleave)// когда перетащили, но вышли оттуда
    placeholder.addEventListener('drop', drop)// когда отпустили элемент

}

// добавляем в addEventListener функции, когда эти события произойдут
function dragstart (event) {
    //console.log('dragstart', event.target) // лучше обращаться через event.target, а не через this
    event.target.classList.add('hold')// добавляем css свойства перетаскиваемому элементу
    setTimeout ( () => event.target.classList.add('hide'), 0)//функция позволяет выполнять действия с задержкой; event.target.classList.add 'hide'добавляем класс, который скрывает элемент из первого столбца

}

function dragend () {
    //console.log('dragend')
    event.target.className = 'item'// класс Name всегда работает со строчкой classList - некоторый объект у которого есть методы, который позволяет манипулировать классами.
    //event.target.classList.remove('hold', 'hide')// удаляем css свойства с перетаскиваемого элемента.
}

// Реализовываем placeholder. Они получаются путем Query запроса к классу placeholder.
function dragover (event) {
    event.preventDefault()
    //console.log('dragover')
}

function dragenter (event) {
    event.target.classList.add('hovered')
    //console.log('dragenter')
}

function dragleave (event) {
    event.target.classList.remove('hovered')

    //console.log('dragleave')
}

function drop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    //console.log('drop')
}