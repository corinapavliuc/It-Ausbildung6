// const pElement = document.querySelector('p')
// //console.log(pElement)

// const pElementWithClass = document.querySelector('.p-1')
// //console.log(pElementWithClass)
// //console.log(pElementWithClass.innerText)
// pElementWithClass.innerText = "Hello world"


// const pLorem = document.querySelector(".box .lorem")
// pLorem.innerText = "P with lorem"

// const pElems = document.querySelectorAll("p")
// console.log(pElems);

// for(let i = 0; i < pElems.length; i++) {
//   console.log(pElems[i].innerText)
// }

// 1 - методы массивов не работают на 
///NodeList [push, pop ...]
// 2 - коллекции могут быть жывими, 
//то-есть реаигировать на изменения dom дерева
// 3 - NodeList нам предоставляется в браузере,
// а массив в javascript

//-----Zadania======
///Написать программу, 
///которая находит параграфы по классу 
///и заменяет в каждом из них текст на 
//“привет”.

// const pElems = document.querySelectorAll(".lorem")
// for(let i = 0; i < pElems.length; i++) {
//   console.log(pElems[i].innerText)
//     pElems[i].innerText = "Привет"
// }
// //-----Zadania======
// //Найти элемент с идентификатором main
// // и записать 
// //в него текст “Я главный элемент”.

// const pMain = document.querySelector("#main")
// pMain.innerText = "Я главный элемент"
// // tag name [tag name] -> div h1 p
// // class name [.className] -> .about .p-1
// // identificator(id) [#idName] -> #about #p-1

///-------------SetAttribute-------
// const imgElem = document.querySelector(".img-1")
// console.log(imgElem)
// console.log(`Source of image: ${imgElem.src}`)
// console.log(`Alternative text of image element: ${imgElem.alt}`)
// // imgElem.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png"
// imgElem.setAttribute("src", "https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png")
// imgElem.setAttribute("alt", "new-DOM")
// imgElem.setAttribute("data-status", "updated")


// //-----Zadania======
//Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам
// меняет url на указанное значение.
const imgElems = document.querySelectorAll(".main img")
for(let i = 0; i < 5; i++) {
  imgElems[i].setAttribute("src", "https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png")
}

////-----Zadania======
//Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот 
//массив необходимо вывести в консоль.


// links = document.getElementsByTagName("a");
// addresses = [];
// for (let i = 0; i < links.length; i++) {
//      link = links[i];
//     address = link.getAttribute("href");
//     addresses.push(address);
// }
// console.log(addresses);
///===drugaea metod====
const aElems = document.querySelectorAll("a")
const links = []
for(let i = 0; i < aElems.length; i++) {
  links.push(aElems[i].href)
}
