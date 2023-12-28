
// // console.log("Hello Anna!")
// // console.log("Hello John!")
// // console.log("Hello Jack!")

// //========== function========

// function greet(){
//     console.log("Hello Anna!")
// }

// function sun()

// greet("Anna")
// greet("John")
// greet("Jack")

// sum(4,9)
// sum(7,9)

//====tasks=====================


// //Разобрать простой пример функции,
// которая считывает значение числа
/// через prompt и выводит квадрат 
//этого числа в консоль. 

// function printPow(){
//     const number =+prompt("Write some number")
// console.log(number ** 2)
// }
// printPow()


///Рассмотреть пример функции power, 
///которая получает два аргумента (первый это основание степени, 
//а второй сама степень) и выводит в консоль результат вычислений.

// function power(a,b){
//     console.log(a ** b)
// }

// power(2,2) // 4
// power(4,3) //64
// power(9,0.5) //3

//=====Novaea_Zadania=========

//Создать функцию, которая в качестве аргументов получает два числа
// и выводит в консоль наибольшее.
// function printMax(firstNumber, secondNumber) {
//     if(firstNumber > secondNumber) {
//       console.log(firstNumber)
//     } else {
//       console.log(secondNumber)
//     }
//   }
  
//   printMax(4, 9)
//   printMax(9, 4)
//   printMax(0, 5)

//=====Novaea_Zadania=========

//=========return========
// function sum(a,b){//// a=5; b=6;
// //console.log(a +b)
// return a+b //return 11
// }

// let firstNumber =5
// let secondNumber =6
// let thirdNumber =3
// // (firstNumber + secondNumber) * thirdNumber

// let sumResult =sum(firstNumber,secondNumber)
// console.log(sumResult+thirdNumber)


// //=========task==============
// //=====Novaea_Zadania=========
// //Переписать функцию power таким образом, чтобы
// // она возвращала результат вычислений
//  function power(a,b){  
//     return a ** b
//  }
//  console.log(power(2,2)) //4
//  console.log(power(4,3)) //64
//  console.log(power(9,0.5)) //3


// //=====Novaea_Zadania=========

//Описать процесс, используя функцию power, который
// находит гипотенузу по длине двух 
///катетов (теорема Пифагора).
// a ** 2 + b ** 2 = c ** 2
// const a = 3
// const b = 4
// const result = power(a) + power(b)
// console.log(power(result, 0.5))
// // console.log(power(power(a) + power(b), 0.5))

// //=====Novaea_Zadania=========

//Описать функцию, которая получает число и возвращает true, если 
//число четное и false в ином случае.
// function isEven(num) {
//     if (num %2 ==0){
//         return true
// } else{
//     return false
// }
// }
// console.log(isEven(4))
// console.log(isEven(5))

// //=====Novaea_Zadania=========

// =============== function declaration ===============
// hi()
// function hi() {
//   console.log("Hello")
// }

// =============== function expression ===============
// hi() // error
// const hi = function(name) {
//     console.log("Hello" + " " + name)
//   }
//   let secondHi = hi
//   // hi("John")
//   secondHi("John")
  
// const print = {
//     echo: function(text) {
//       console.log(text)
//     } // method
//   }
  
//   print.echo("Hello")

///===========var,hoisting============


// let hi = 'Test'
// function test() {
//   let hello = "Hello"
//   console.log(hello)
//   console.log(hi) // 'Test'
// }
// test()
// console.log(hello) // error

// if (1 === 1) {
//   var text = "Hello"
//   console.log(text)
// }
// console.log(text) // "Hello"

// function hi() {
//     var text = "Hello"
//     console.log(text)
//   }
  
//   console.log(text)
  
  // var word = "World"
  // var word = "Hello"
  
  // область видимости var ограничивиается только телом функции и всё 

  
// function hi() {
//     var text // text = undefined
//     console.log(text) // undefined
//     var text = "Hello"
//     console.log(text) // "Hello"
//   }
  
//   hi()