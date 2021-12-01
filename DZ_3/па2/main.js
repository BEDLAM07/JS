let ul = document.createElement("ul");
document.body.append(ul);
let count = 3;
// Создаем массив с заданным кол-вом эл-тов:
const liArr = Array(count).fill("");

let renderingList = () => {
  liArr.forEach((el, i) => {
    let arrLi = prompt("Введите название пункта", +i);

    let li = document.createElement("li");
    li.innerHTML = arrLi;
    ul.append(li);

    (i + 1) % 2 === 0 ? (li.style.color = "red") : (li.style.color = "green");
  });
};

renderingList();
