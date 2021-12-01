//если не использовать эту функцию, то при подключение скрипта в head, DOM документ
//не полностью прогружается. Либо скрипт подключать перед закрывающем body, тогда функция
// не нужна
window.addEventListener('DOMContentLoaded', function(){

    var elemH1 = document.createElement('h1');
    document.body.append(elemH1);

    const arrH1 = Array(1).fill("");

    var checkOnNumbers = () => {
        arrH1.forEach(function(el, i) {
            var arrH1 = prompt("Введите название заголовка h1");
            elemH1.innerHTML = arrH1;
            //определяем содержит ли массив определенный элемент с помощью метода includes()
            if(arrH1.includes(1)){
                elemH1.style.color = "red";
            }
        });
    }
    checkOnNumbers();
});