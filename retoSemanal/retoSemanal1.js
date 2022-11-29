// No borrar
let testResults = [ true, true, true, true, true, false, false, false, false, false, false, false ];

let resultado = null;

// Escribe aquí tu algoritmo - guarda el resultado

let boolean = true;
let cont = 0;

while(boolean) {
    if(testResults[cont] == false) {
        boolean = false;
        resultado = cont;
    }
    cont++;
}

console.log(resultado);