
// 1.Написать программу, которая через prompt считывает число и выводит в консоль число равное
// 10% от введенного числа


let number = +prompt ("Enter a number to determine 10%");
let result = number * (10 / 100);
console.log(result);

// 2.Написать программу, которая получает два числа и выводит наименьшее 

let numberA = +prompt("Enter the first number to determine the smallest");
let numberB = +prompt("Enter the second number to determine the smallest");
if (numberA > numberB) {
    console.log(numberA);
}
else {
    console.log(numberB);
}

// 3.Написать программу, которая считывает через prompt число и выводит
// одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let number100 = +prompt("Enter a number to compare against 100");
if(number100 > 100) {
    console.log("Number greater than 100");
}
else if (number100 == 100){
    console.log("The number is 100");
}
else {
    console.log("Number less 100");
}

// 4.Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение
// ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’,
// если пользователь несовершеннолетний.

let name = prompt("What is your name ?");
let year = +prompt("How old are you");
if(year >= 18) {
    console.log(`Hello, ${name}`);
}
else {
    console.log(`Hi, ${name}`);
}