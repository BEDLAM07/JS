var arr = [];
for (var i = 0; i < 5; i++){
    arr[i] = prompt("Введите любое имя" +i);
    if(arr[i] === null){
        alert("Отмена");
        break;
    }
    if(arr[i] === ""){
        alert("Вы не указали имя");
        arr[i] = prompt("Введите любое имя");
    }
}
console.log(arr);// исходный массив
console.log(arr.reverse());// массив в обратном порядке