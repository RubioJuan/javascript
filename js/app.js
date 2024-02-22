const contenedor = document.getElementById('contenedor');
const lstToppings = document.getElementById('lista-toppings');
const titulo = document.getElementById('titulo');
const toppings = document.getElementsByClassName('topping');
const misToppings = document.getElementsByTagName('li');


console.log(titulo.innerHTML);

titulo.innerHTML = '😂 Sabados felices'

// console.log(titulo.tagName);



// console.log(toppings)

// console.log(toppings.length)
// console.log(toppings[0])

// const toppingsArray = Array.from(toppings);
// toppingsArray.forEach(topping => {
//     console.log(topping.textContent);
// });

const toppingsArray = Array.from(toppings);
toppingsArray.forEach(topping =>{
    console.log(`${topping.textContent} - ${topping.id} - ${topping.classList}`);
});