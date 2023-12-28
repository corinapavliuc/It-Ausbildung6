
///Напишите функцию, 
///которая в качестве аргументов
/// получает два числа и возвращает
//// массив чисел со значениями от
//// меньшего числа к большему.
// 4,9
// [4,5,6,7,8,9]

// function createArray(a, b){ //9,4
// let min =a //9
// let max =b //4
// if (a > b){
//     min = b //4
//     max = a //9
// }
// const newArray=[]
// for(let i= min; i<= max; i++) {
//     newArray.push(i)
// }
// return newArray
// }
// const arr =createArray(4,9)
// console.log(arr)


// ============ novaea zadania==========

//Напишите функцию, которая в качестве 
//аргументов получает два числа и 
//возвращает массив чисел со значениями
 //от большего числа к меньшему. 

 //function createArray(a, b) { // 9, 4
    // let min = a // 9
    // let max = b // 4
    // if (a > b) {
    //   min = b // 4
    //   max = a // 9
    // }
  
    // const newArray = []
//     for(let i = max; i >= min; i--) {
//       newArray.push(i)
//     }
  
//     return newArray
//   }
  
//   const arr = createArray(4, 9)
//   console.log(arr)
  
//   // В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
//   const list = [9, 5, -4, 0, 3, 52, 12, -23, 14]
//   let sum = 0
//   for(let i = 0; i < list.length; i++) {
//     sum = sum + list[i]
//   }
//   console.log(sum)

// В программе объявлена переменная list,
// представляющая массив положительных 
//и отрицательных численных значений.
/// Используя цикл, выведите в консоль 
//сумму положительных чисел.
// const list = [9, 5, -4, 0, 3, 52, 12, -23, 14]
// let sum = 0
// for(let i = 0; i < list.length; i++) {
//   if(list[i] >= 0) {
//     sum = sum + list[i]
//   }
// }

// console.log(sum)


// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [9, 5, -4, 0, 3, 52, 12, -23, 14]
// let sumOdd = 0
// let sumEven = 0
// for(let i = 0; i < list.length; i++) {
//   if(list[i] % 2 === 0) {
//     sumEven += list[i]
//   } else {
//     sumOdd += list[i]
//   }
// }
// console.log(sumOdd - sumEven)

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// {
//   min: -2,
//   max: 8,
//   avg: 2.8
// }
// arr = [4, 3, -2, 8, 1]
// function getArrayStats(arr) {
//     let min = arr[0] // 4
//     let max = arr[0] // 4
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//       if(min > arr[i]) { // 4 > 4; 4 > 3 | min = 3; 3 > -2 | min = -2; -2 > 8; -2 > 1
//         min = arr[i]
//       }
//       if (max < arr[i]) { // 4 < 4; 4 < 3; 4 < -2; 4 < 8 | max = 8; 8 < 1
//         max = arr[i]
//       }
  
//       sum += arr[i]
//     }
  
//     let avg = sum / arr.length
  
//     return {
//       min: min,
//       max: max,
//       avg: avg
//     }
//   }
//   const arr = [4, 3, -2, 8, 1]
//   let arrayStats = getArrayStats(arr)
//   console.log(arrayStats)

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// const word = "hello" // "olleh"
// let reversed = ''
// for(let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i])
//   reversed = reversed + word[i]
// }
// console.log(reversed)


// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// function isPalindrome(word) {
//     let reversed = ''
//     for(let i = word.length - 1; i >= 0; i--) {
//       reversed = reversed + word[i]
//     }
  
//     return reversed === word
//   }
  
//   console.log(isPalindrome("anna"));
//   console.log(isPalindrome("jack"));

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0
// // for(let i = 0; i <= 50; i++) {
// //   if(i % 5 === 0) {
// //     sum += i
// //   }
// // }

// for(let i = 0; i <= 50; i += 5) {
//   sum += i
// }
// console.log(sum);

const products = [  
      {     id: 1,
            title: "Lenovo",
            price: 3000,      
            type: "Laptop",      
            discount: 25
           }, 
           {     id: 2,
                 title: "Blender",
                 price: 1500,       
                 type: "Electronics",
                 discount: 13
                  },
                     {
                id: 3,
                title: "Bicycle",
                price: 2000,
                type: "Sport",
                discount: 17   
             },
                 {
               id: 4,    
               title: "Qwerty",     
               price: 100,      
               type: "Notebook",
               discount: 8
             },
                {
                id: 5,
                title: "Nvidia",
                price: 20000,
                type: "Electronics",
                 discount: 10   
                 }
                ]

   ///Написать цикл, который выводит только названия товаров
   for(let i = 0; i <= 50; i += 5) {
    sum += i
  }
  console.log(sum);