// No Borrar
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo -guarda en resultado

let max1 = a1[0];
let max2 = a2[0];

for(let i = 0; i < a1.length; i++) {
    if(a1[i]> max1) {
        max1 = a1[i];
    }
}

for(let i = 0; i < a2.length; i++) {
    if(a2[i]> max2) {
        max2 = a2[i];
    }
}

resultado = max1*max2;

console.log(resultado);