// Operador exponencial
let exponUno = Math.pow(2, 3);
console.log(exponUno)

// CON IMPLEMENTACION DE ECMASCRIPT 7
let expoDos = 2**3
console.log(expoDos)


// Metodo 'includes' de los arreglos
const nombres = ["Allan", "Paola", "Francisco", "Juan", "Pepe"];

function estaIncluido(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] === nombre) {
            return true
        }
    }
    return false
}

// Paola
console.log(estaIncluido("Pedro"))
console.log(nombres.indexOf("Paola") !== -1)


// CON IMPLEMENTACION DE ECMASCRIPT 7
console.log(nombres.includes("Pedro"))


const numeros = [1,2,3,4,5,6,7]
console.log(numeros.includes(5))
console.log(numeros.includes("4"))