class Contador {
    static contadorGlobal = 0

    constructor(reponsable) {
        this.responsable = reponsable
        this.contador = 0;
    }

    getResponsable() {
        return `El responsable de este contador es ${this.responsable}`
    };

    contar() {
        // this.contador = this.contador + 1;
        this.contador++
        // this.contadorGlobal++  // ESTO ESTA MAL
        Contador.contadorGlobal++

        return "Se sumaron en +1 los contadores"
    };

    getCuentaIndividual() {
        return `La cuenta individual es de: ${this.contador}`
    };

    getCuentaGlobal() {
        return `La cuenta global es de: ${Contador.contadorGlobal}`
    };

};

console.log(Contador.contadorGlobal)
// console.log(Contador.contador)

const contadorUno = new Contador("Allan");
console.log(contadorUno.getResponsable())


console.log(contadorUno.getCuentaIndividual())
console.log(contadorUno.getCuentaGlobal())


console.log(contadorUno.contar())
console.log(contadorUno.contar())
console.log(contadorUno.contar())
console.log(contadorUno.contar())


console.log(contadorUno.getCuentaIndividual())
console.log(contadorUno.getCuentaGlobal())



const contadorDos = new Contador("Paola");
console.log(contadorDos.getResponsable())

console.log(contadorDos.getCuentaIndividual())
console.log(contadorDos.getCuentaGlobal())


console.log(contadorDos.contar())
console.log(contadorDos.contar())
console.log(contadorDos.contar())
console.log(contadorDos.contar())

Contador.contadorGlobal++


console.log(contadorDos.getCuentaIndividual())
console.log(contadorDos.getCuentaGlobal())

