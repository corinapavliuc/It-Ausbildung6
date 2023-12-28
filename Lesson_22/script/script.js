
// const pElem = document.querySelector("p")
// console.log(pElem.classList) // print all classes
// pElem.classList.add("third_class", "fourth_class") // add classes to element
// pElem.classList.remove("first_class", "second_class") // remove classes from element


// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
// <div class="card">0</div>
// const numberCards = document.querySelector(".number_cards")
// for(let i = 0; i <= 10; i++) {
//   const numberCard = document.createElement("div") // <div></div>
//   numberCard.innerText = i // <div>0</div>
//   numberCard.classList.add("card") // <div class="card">0</div>
//   numberCards.append(numberCard)

//   numberCard.addEventListener("click", function () {
//     numberCard.classList.add("active")
//   })
// }


// // ================ style ================
// const divElem = document.createElement("div")
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.border = "1px solid black"
// divElem.style.backgroundColor = "green"
// divElem.style.fontSize = "22px"
// divElem.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
// document.body.append(divElem)

// ================ random ================
// color: red;
//  color: #ff0000; 0 1 2 3 4 5 6 7 8 9 A B C D E F
//  color: rgb(255, 0, 0); [0 - 255]
//  Math.random() // [0 - 1)
//  Math.random() * 255 // [0.0 - 255.0)
//  Math.ceil(0.9) // 1 округляет в верхнюю сторону 
//  Math.floor(0.9) // 0 округляет в нижнюю сторону 
//  Math.ceil(Math.random() * 255) // [0 - 255]


// ================ tasks ================
// // Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется
// const divElem = document.createElement("div")
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.backgroundColor = "darkgrey"
// divElem.style.fontSize = "22px"
// divElem.style.cursor = "pointer"
// document.body.append(divElem)

// divElem.addEventListener("mouseover", function() {
//   // rgb(red, green, blue); [0 - 255]
//   const red = Math.ceil(Math.random() * 255)
//   const green = Math.ceil(Math.random() * 255)
//   const blue = Math.ceil(Math.random() * 255)
//   const rgbStr = `rgb(${red}, ${green}, ${blue})`
//   console.log(rgbStr)
//   divElem.style.backgroundColor = rgbStr
// })

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
// rgb(128, 128, 0)
// rgb(128, 128, 5)
// rgb(128, 128, 10)
// ...
// rgb(128, 128, 255)
// width 100%
// height 50vh

// for(let i = 0; i <= 255; i += 5) {
//     const divElem = document.createElement("div")
//     divElem.style.width = "100%"
//     divElem.style.height = "50vh"
//     divElem.style.backgroundColor = `rgb(128, 128, ${i})`
//     document.body.append(divElem)
//   }
  
  // Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется
const divElem = document.createElement("div")
divElem.style.width = "150px"
divElem.style.height = "150px"
divElem.style.backgroundColor = "darkgrey"
divElem.style.fontSize = "22px"
divElem.style.cursor = "pointer"
document.body.append(divElem)

function setRandomColor() {
  // rgb(red, green, blue); [0 - 255]
  const red = Math.ceil(Math.random() * 255)
  const green = Math.ceil(Math.random() * 255)
  const blue = Math.ceil(Math.random() * 255)
  const rgbStr = `rgb(${red}, ${green}, ${blue})`
  console.log(rgbStr)
  divElem.style.backgroundColor = rgbStr
}

divElem.addEventListener("mouseover", setRandomColor)
divElem.addEventListener("mouseout", setRandomColor)






  
  
  
  
  


