// const usernameInput = document.querySelector("#username_input")
// const form = document.querySelector(".form_1")
// // usernameInput.value = "Hello world!"
// const btnElem = document.querySelector(".form_1 button")
// // btnElem.addEventListener("click", function () {
// //   console.log(usernameInput.value)
// // })

// // Создать форму, при submit которой данные из формы выводятся в консоль. 
// form.addEventListener("submit", function (e) {
//   e.preventDefault()
//   const username = usernameInput.value
//   usernameInput.value = ""
//   console.log(username)
// })

// 1 Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// 2 Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.
// products
// { 
//  name: "Название продукта",
//  price: "Цена продукта"
// }
const productForm = document.querySelector("#product_form")
const productNameInput = document.querySelector("#product_name")
const productPriceInput = document.querySelector("#product_price")

const products = []
productForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // console.log(`Product name: ${productNameInput.value}`)
  // console.log(`Product price: ${productPriceInput.value}`)

  const productObject = {
    name: productNameInput.value,
    price: productPriceInput.value
  }
  products.push(productObject)
  rerender()

  productForm.reset()
})

// 3 Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.
// function createProductCard({name, price})'
// createProductCard(products[i])
function createProductCard(name, price) {
  const pProductName = document.createElement("p")
  const pProductPrice = document.createElement("p")
  pProductName.innerText = name
  pProductPrice.innerText = price

  const productCardDiv = document.createElement("div")
  productCardDiv.classList.add("product_card")
  productCardDiv.append(pProductName, pProductPrice)

  return productCardDiv
}

// 4 Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.
// 5 Доработать rerender таким образом, чтобы при двойном клике по карточке в консоль выводилось название товара
function rerender() {
  const productsBlock = document.querySelector(".products_block")
  productsBlock.innerHTML = ""
  for(let i = 0; i < products.length; i++) {
    const {name, price} = products[i]
    const productCard = createProductCard(name, price)
   removeBtn.addEventListener("click", function() {
    console.log(i)
    products.splice(i, 1)
    rerender()
   })
   productCard.append(removeBtn)
    productsBlock.append(productCard)
    productCard.addEventListener("dblclick", function () {
      console.log(name);
    })
  }
}