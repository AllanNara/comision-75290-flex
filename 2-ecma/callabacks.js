const arregloNumeros = [1,2,3,4,5];

function multiplicarPorDos(elem) { 
    return elem * 2
}

const arregloModificado = arregloNumeros.map(multiplicarPorDos)
console.log(arregloModificado);


// FUNCIONES CALLBACK
const sumar = (numero1, numero2) => numero1 + numero2;
const resta = (numero1, numero2) => numero1 - numero2;
const multiplicacion = (numero1, numero2) => numero1 * numero2;
const division = (numero1, numero2) => numero1 / numero2;

// FUNCION QUE VA A UTILIZAR LAS FN CALLBACK
const realizarOperaciones = (numero1, numero2, callback) => {
    console.log("Inicio de la operacion desconocida por la funcion");
    let resultado = callback(numero1, numero2);
    return "El resultado de la operacion es: " + resultado
}

console.log(realizarOperaciones(10, 20, sumar));
console.log(realizarOperaciones(10, 20, resta));
console.log(realizarOperaciones(10, 20, multiplicacion));
console.log(realizarOperaciones(10, 20, division));
