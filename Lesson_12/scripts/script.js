//console.log("Hello word!");///

//=========////

// ========= let ========== //
// let greeting = "Hello world!"
// greeting = "Hello John!"
// console.log(greeting)
// ========= const ========== //
///const greeting = "Hello world!"
//greeting = "Hello John!"
//console.log(greeting)

// ========= naming ========== //
//let car_model_name = "BMW" // snake case
//let carModelName = "BMW" // camel case
// let car-model-name = "BMW" // kebab case -> error
// let if = "test" // error

// A-Z a-z 0-9 _ $
// let 1user = "test" // error
//let _user, $user//

// ========= number ========== //
//let age = 30
//let price = 9.99
//let discount = -10.09
//console.log(age, price, discount)

// ========= + ========== //
//let firstName = "John"
//let lastName = "Doe"
//let fullName = firstName + " " + lastName
//console.log(fullName) // "John Doe"

//let x = 5
//let y = 3
//let sum = x + y
//console.log(sum) // 8

//let firstName = "John"
//let lastName = "Doe"
//let fullName = `${firstName} ${lastName}` // "John Doe"
// "John Doe" = "firstName lastName"
//console.log(fullName) // "John Doe"

// ========= Math ========== //
//let a = 5
//let b = 3
//console.log(a + b) // сложение
//console.log(a - b) // вычитание
//console.log(a * b) // умножение
//console.log(a / b) // деление 
//console.log(a % b) // остаток от деления // 5 / 3 = 1(2) || 3 * 1 + 2 = 5
//console.log(a ** b) // возведение в степень

// ========= prompt ========== //
//let firstName = prompt("Write your first name")
//let lastName = prompt("Write your last name")
//let greeting = `Hello ${firstName} ${lastName}`
//console.log(greeting)

// ========= convert ========== //
//let stringValue = "50"
//let secondStringValue = "10"
//console.log(Number(stringValue) + Number(secondStringValue))

//let userNumber = prompt("Write some number")
//console.log(Number(userNumber) + 2)

// ========= if ========== //
/////let a = 5
///let b = 10

// >
// <
// >=
// <=
// ==
// !=

//if (a > b) {
 // console.log("a Больше")
//} else {
  //console.log("a Меньше")
//}

//Есть переменные r, g, b с числовыми значениями. 
//Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию.
// const r = 12
// const g = 34
// const b = 14

// const concatenationResult = "“rgb(" + r + ", " + g + ", " + b + ")”"
// console.log(concatenationResult)
// const interpolationResult = `“rgb(${r}, ${g}, ${b})”`
// console.log(interpolationResult)

//--------////

// let a = "4a"
// console.log(typeof a)
// console.log(Number(a)) // NaN = Not a Number
// console.log(typeof NaN) // number

// let a = "4"
// let b = 2
// console.log(a + b) // "4" + "2" = "42"
// console.log(a - b) // 4 - 2 = 2

// Number(a) то же самое что и +a
// ‘b’ + ‘a’ + +’c’
// ‘b’ + ‘a’ + Number(’c’)
// 'ba' + NaN = 'baNaN'


// Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
// const num = +prompt("Write a number")
// console.log(num ** 2)
// Написать программу, которая считывает два числа(объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму.Не забыть преобразовать полученные значения в число.
const firstNum = +prompt("Write a first number")
const secondNum = +prompt("Write a second number")
console.log(firstNum + secondNum)
let a = "4"
let b = 4

// >
// <
// >=
// <=
// ==
// !=

// === строгое сравнение

if (a === b) { // string === number
  console.log("равно")
} else {
  console.log("не равно")
}
// ============== tasks ============
// Написать программу, которая получает два числа и выводит наибольшее.
// const firstNum = +prompt("Write a first number")
// const secondNum = +prompt("Write a second number")
// if (firstNum > secondNum) {
//   console.log(firstNum)
// } else {
//   console.log(secondNum)
// }
// Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю”.
const num = +prompt("Write a number")
if (num > 0) {
  console.log("число положительное");
} else if (num < 0) {
  console.log("число отрицательное");
} else {
  console.log("число равно нулю");
}