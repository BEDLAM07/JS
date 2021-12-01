//без этой функции, если не подключить скрипт в head DOM документ
//не полностью прогружается. Либо скрипт подключать перед закрывающем body
window.addEventListener('DOMContentLoaded', function(){
const listOfItems = document.querySelector('.list_Of_Items');//получаем родителя ul
listOfItems.innerHTML = "";//очищаем документ

var ul = document.createElement('ul');
document.body.append(ul);

const arrLi = Array(3).fill("");

var renderingList = () => {
    arrLi.forEach(function(el, i) {
        var arrLi = prompt("Введите название пункта", +i);
        console.log(arrLi);
        var li = document.createElement('li');
        li.textContent = arrLi;
        ul.append(li);
        
        if((i+1)%2 == 0){
            li.style.color = "red";
        }
    });
};
renderingList();
});