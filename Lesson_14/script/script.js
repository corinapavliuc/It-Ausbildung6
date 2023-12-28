
// // let user + ['John','Smith','developer',25]
// // console.log('name of user ${user[0]}')
// // console.log('Lastname of user${user[1]}')



// // =============== objects ===============
// const user = {
//     firstname: 'John',
//     lastname: "Smith",
//     profession: "Developer",
//     age: 25,
//     address: {
//       country: 'Germany',
//       city: 'Berlin'
//     },
//     'car Model Name': "BMW"
//   }
  
//   // console.log(user)
  
//   user.age = 45
//   // console.log(user)
  
//   user.skills = ["go", "js", "c++", 'zig']
//   // console.log(user)
  
//   console.log(`Name of user ${user['firstname']}`)
//   console.log(`Lastname of user ${user['lastname']}`)
  
//   console.log(`Name of user ${user.firstname}`)
//   console.log(`Lastname of user ${user.lastname}`)
//   console.log(`Car model ${user['car Model Name']}`)

// Создать объект с названием и ценой продукта и вывести данные в консоль.
// name
// price
// const product = {
//     name: "Macbook",
//     price: 4000
//   }
//   console.log(`Name of product ${product.name}`)
//   console.log(`Price of product ${product.price}`)

  // =============== array of objects ===============
// const users = [
//     {
//       id: 1,
//       name: 'John',
//       age: 25
//     },
//     {
//       id: 2,
//       name: 'Anna',
//       age: 18
//     },
//     {
//       id: 3,
//       name: 'Mary',
//       age: 23
//     }
//   ]
  
//   for(let i = 0; i < users.length; i++) {
//     console.log(users[i].name)
//   }


// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.

// const products = [
//     {
//         title: "Macbook",
//         price: 4000,
//         type: "Laptop",
//         discount: 13
//     },
//     {
//         title: "Blender",
//         price: 1000,
//         type: "Kitchen",
//         discount: 42
//     },
//     {
//         title: "Bicycle",
//         price: 1500,
//         type: "Sport",
//         discount: 5
//     }
//   ]
  
//   for(let i = 0; i < products.length; i++) {
//     console.log(`Title of product: ${products[i].title}`)
//     console.log(`Type of product: ${products[i].type}`)
//     console.log(`Price of product: ${products[i].price}`)
//     console.log("=========================================")
//   }


// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.

const products = [
    {
        title: "Macbook",
        price: 4000,
        type: "Laptop",
        discount: 13
    },
    {
        title: "Blender",
        price: 1000,
        type: "Kitchen",
        discount: 42
    },
    {
        title: "Bicycle",
        price: 1500,
        type: "Sport",
        discount: 5
    }
  ]
  
  for(let i = 0; i < products.length; i++) {
    console.log(`Title of product: ${products[i].title}`)
    console.log(`Type of product: ${products[i].type}`)
    console.log(`Price of product: ${products[i].price}`)
    console.log("=========================================")
  }
  
  for(let i = 0; i < products.length; i++) {
    const {title, type, price} = products[i]
    console.log(`Title of product: ${title}`)
    console.log(`Type of product: ${type}`)
    console.log(`Price of product: ${price}`)
    console.log("=========================================")
  }
  
  // let arr = [1, 2, 3]
  // const [a, b, c] = arr
  // a = 1; b = 2; c = 3

// Пройдитесь циклом по массиву объектов и найдите общую сумму товаров.
let totalPrice = 0
for(let i = 0; i < products.length; i++) {
  const {title, type, price} = products[i]
  totalPrice = totalPrice + price
  console.log(`Title of product: ${title}`)
  console.log(`Type of product: ${type}`)
  console.log(`Price of product: ${price}`)
  console.log("=========================================")
}

console.log(totalPrice);

let a = [0, 1, 2, 3]
let b = a
b[0] = 5
console.log(b) // [5, 1, 2, 3]
console.log(a) // [5, 1, 2, 3]

//Вывести названия товаров 
//и цену со скидкой. 
//В процессе решения задачи
/// используйте деструктурирующее присваивание.
