let valor = 0
if(!valor) {
    valor = 1
}
console.log(valor)

// Operador nullish (??)
let valor2 = 0;
valor2 = valor2 ?? 1
console.log(valor2)

// Operador ternario (? : )
valor2 = valor2 ? 200 : 300;
console.log(valor2)



// Clases: Utilizacion de variables privadas
class Alumno {
    constructor(name, course, cbu) {
        this.name = name;
        this.course = course;
        this.cbu = cbu
    }

    dataDelAlumno() {
        return `este es el alumno ${this.name} y cursa: ${this.course}`
    }

    #datosPrivados() {
        return this
    }

    leerTodosLosDatos() {
        return this.#datosPrivados()
    }

}


const pepe = new Alumno("pepe", "backend I", "23254123453");

console.log(pepe.dataDelAlumno())
// console.log(pepe.#datosPrivados());
console.log(pepe.leerTodosLosDatos())



// Metodos de Object

let datos = {
    nombre: "allan",
    edad: 26,
    titulo: "ingeniero",
    // facturacion: {
    //     nro: 80204,
    //     direccion: "calle falsa"
    // }
};

console.log(Object.entries(datos))

// "key": "value"
// [ [key, value]  ]

console.log(Object.keys(datos));


console.log(Object.values(datos));

