"use strict";
let total;
const porcentagem = 20;
function handleChange(event) {
    console.log(event.value);
    total = +event.value;
    if (p) {
        p.innerText = "Resultado:";
    }
}
let p = document.querySelector("p");
console.log(p);
function calcular() {
    if (p) {
        p.innerText = `Resultado: ${total - 100 * (porcentagem / 100)}`;
    }
}
