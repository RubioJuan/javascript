const contenedor = document.getElementById('contenedor');
const lstToppings = document.getElementById('lista-toppings');
const titulo = document.getElementById('titulo');

const misToppings = document.getElementsByTagName('li');
const aceituna = document.querySelector('#aceitunas') 

console.log(titulo.innerHTML);

titulo.innerHTML = '😂 Sabados felices'


// console.log(titulo.tagName);



// console.log(toppings)

// console.log(toppings.length)
// console.log(toppings[0])


const toppings = document.querySelectorAll('ul li:not(.fondo-marron');
console.log(toppings)
console.log(typeof toppings)


toppings.forEach(topping =>{
    topping.innerHTML = `😂 ${topping.innerHTML}`;
});

console.log(toppings)
console.log(typeof toppings)


// const toppingsArray = Array.from(toppings);
// toppingsArray.forEach(topping =>{
//     console.log(`${topping.textContent} - ${topping.id} - ${topping.classList}`);
// });