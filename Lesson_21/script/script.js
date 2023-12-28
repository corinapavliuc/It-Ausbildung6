// // function greet() {
// //   return "Hello world!"
// // }

// // function userGreet(name, callback) {
// //   console.log(`Hello ${name}.`)
// //   const text = callback()
// //   console.log(text)
// // }

// // userGreet("John", greet)

// function makePizza(name, callback) {
//     // making pizza
//     console.log("Making pizza " + name)
//     setTimeout(callback, 2000)
//   }
  
//   function run() {
//     console.log("runing")
//   }
  
//   function getPizza() {
//     console.log("put on table")
//   }
  
//   makePizza("Name of pizze", getPizza)
//   makePizza("Name of pizze", run)

  
// //////////////////////////////////////////////////////////
// // Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.
// function forEach(arr, callback) {
//     for(let i = 0; i < arr.length; i++) {
//       callback(arr[i])
//     }
//   }
  
//   const numbers = [5, 6, -9, 42, 20, 12, -14, 3, -5, -19]
//   function pow(number) {
//     console.log(number ** 2)
//   }
  
//   function printEvens(number) {
//     if(number % 2 === 0) {
//       console.log(`Number ${number} is even`)
//     }
//   }
  
//   forEach(numbers, pow)
//   forEach(numbers, printEvens)
  
  // =========================== addEventListener ===========================

  // Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.
// const btnElem = document.querySelector(".btn_1")
// const counterElem = document.querySelector(".counter")
// let counter = 0
// btnElem.addEventListener("click", function () {
//   // первый вариант
//   // let counterValue = +counterElem.innerText
//   // counterValue = counterValue + 1
//   // counterElem.innerText = counterValue
//   // +counterElem.innerText++

//   // второй вариант
//   counter++
//   counterElem.innerText = counter
// })

// --------------------Novaea Zadania==========
// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на плюс в консоль выводится число, увеличивающееся на 1, а при нажатии на минус - уменьшившееся на 1.
// const btnMinus = document.createElement("button")
// const btnPlus = document.createElement("button")
// btnMinus.innerText = "Minus"
// btnPlus.innerText = "Plus"

// let counter = 0
// btnMinus.addEventListener("click", function () {
//   counter--
//   console.log(counter);
// })
// btnPlus.addEventListener("click", function () {
//   counter++
//   console.log(counter);
// })
// document.body.append(btnMinus, btnPlus)


// --------------------Novaea Zadania==========

// Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв их добавить в параграф. Для решения этой задачи понадобится использование объекта event.

// const pElem = document.querySelector(".blocknote")
// document.body.addEventListener("keydown", function (event) {
//   console.log(event.key);
//   pElem.innerText += event.key
// })

// Написать программу, которая формирует
//  на основе массива строк множество 
//  параграфов и выводит их в интерфейс. 
//  При клике на параграф
//  текст должен меняться на звездочки.

const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']

for(let i = 0; i < words.length; i++) {
    const pElem = document.createElement("p")
    pElem.innerText = words[i]
    document.body.append(pElem)
  
    pElem.addEventListener("click", function () {
      pElem.innerText = "****"
    })
  }
  