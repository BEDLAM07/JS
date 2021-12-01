var number = +prompt("Введите число с клавиатуры");

var number1 = (number < 0) ? `Число ${number} меньше нуля.`: (number > 0) ? `Число ${number} больше нуля.` : `Число ${number} равно нулю.`;

console.log(number1);