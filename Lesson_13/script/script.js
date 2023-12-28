// const arr = [5, 2, 9, -4, 23]
// console.log(arr);
// console.log(arr[3]) // -4
// console.log(arr[50]) // undefined
// arr[2] = '10'
// console.log(arr);

// arr[5] = 50
// console.log(arr);

// ============= push, pop ============= //
// const arr = [5, 2, 9, -4, 23]
// arr.push(50, 'hello', false, 0, 1) // add new elems to end of array
// console.log(arr)
// const lastElem = arr.pop() // get last elem and remove it from array
// console.log(lastElem)
// console.log(arr)

// // ============= shift, unshift ============= //
// arr.unshift("world", -9) // add new elems to start of array
// console.log(arr)
// const firstElem = arr.shift() // get first elem and remove it from array
// console.log(first)

// Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// const arr = [1,4,2,5,3]
// const result =[]
// result.push(arr[0] ** 2, arr[1] ** 2, arr[2] ** 2, arr[3] ** 2, arr[4] ** 2)
// console.log(result);

// ========== for ==========
// for (let i = 0; i <= 10; i = i + 1) {
//     console.log(i)
//   }
  
//   // let i = 0
//   // i = i + 1
//   // i += 1 // i *= 2, i -= 2, i /= 2
//   // i++ // i--

// Разобрать пример вывода всех элементов массива при помощи цикла for.
// const arr = [2, 5, 4, 9, -7, 0, 12, -40]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// Написать цикл, который выводит только четные числа из промежутка 0-20.
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // Разобрать синтаксис цикла с изменением i на два, три и так далее.
// console.log("==================================")
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // Разбор синтаксиса цикла от большего к меньшему
// for(let i = 20; i >= 0; i--) {
//   console.log(i);
// }


// Вывести значения массива справа налево с шагом два
// const arr = [2, 5, 4, 9, -7, 0, 12, -40]
// for(let i = arr.length - 1; i >= 0; i -= 2) {
//   console.log(arr[i])
// }


// // Разбор задачи на поиск агрегации по массиву. На примере суммы всех элементов массива.
// const arr = [2, 5, 4, 9, -7, 0, 12, -40]
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i] // sum = 2; sum = 7 ... 
// }
// console.log(sum)

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
const arr = [2, 5, 4, 9, -7, 0, 12, -40]
let oddSum = 0
let evenSum = 0
for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    evenSum += arr[i]
  } else {
    oddSum += arr[i]
  }
}

if (oddSum > evenSum) {
  console.log(oddSum - evenSum);
} else {
  console.log(evenSum - oddSum);
}