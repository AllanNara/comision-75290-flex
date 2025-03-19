class Persona {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name
        this.age = age;
    }

    comer(alimento) {
        return "mmm que rico, estoy comiendo un/a" + alimento
    }

    caminar() {
        return "estoy caminando"
    }
}

const allan = new Persona("allan", "reynoso", 26)
const juan = new Persona("juan", "reynoso", 26)
const marcelo = new Persona("marcelo", "reynoso", 26)

// console.log(allan)
// console.log(juan)
// console.log(marcelo)

console.log(marcelo.comer("naranja"))