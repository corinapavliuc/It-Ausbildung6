const newDiv = document.createElement('div')
console.log(newDiv); //<div></div>
newDiv.innerText= "Hello word"//<div> Hello word</div>

// //const body =document.querySelector("body")
// //body.append(newDiv)
// ///<body =document.querySelector("body")
// document.body.append(newDiv)
// //<head>=document.querySelector("head")
// ///document.head
// ///<html> =document.querySelector("html")
// ///document.documentElement

// document.body.append(newDiv) // add newDiv to end of body
// document.body.prepend(newDiv) // // add newDiv to start of body
// let result = document.body.append(newDiv)
// console.log(result)
// result = document.body.appendChild(newDiv)
// console.log(result)

// ============= tasks =============
// Создать параграф, 
//задать ему текст и добавить
/// в HTML-документ в div с #root
// const newPgph = document.createElement("p") // <p></p>
// newPgph.innerText = "Hello world" // <p>Hello world</p>

// const divRoot = document.querySelector("#root")
// divRoot.append(newPgph)


// Создать множество параграфов с
//// числами от 0 до 19 и добавить в див с id root.
const divRoot = document.querySelector("#root")
for(let i = 0; i <= 19; i++) {
  const pElem = document.createElement("p") // <p></p>
  pElem.innerText = i // <p>{i}</p>
  divRoot.append(pElem)
}