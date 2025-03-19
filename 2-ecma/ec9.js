// Destructuring
const request = {
    params: [],
    queries: {},
    body: {
        ingresante: "juan perez",
        curso: "diseño ux/ui"
    },
    meta: "blablabla",
    httpMethod: "POST"
}


// const ingresante = request.body.ingresante;
// const cursoDelIngresante = request.body.curso;

const { body: { ingresante, curso } } = request;
// console.log(body)

// const { ingresante, curso } = body;
console.log(ingresante)
console.log(curso)

// Rest operatod
const { httpMethod, ...infoRequest } = request;

console.log(httpMethod);
console.log(infoRequest);

// Rest en funciones
function contarNumeros(a, b, ...n) {
    console.log("primer numero " + a)
    console.log("segundo numero " + b)
    return `los numeros restantes fueron ${n.join(", ")}`
}

console.log(contarNumeros(1,45,3, 234, 56,2341,324123, 56, 32))


// Rest para clonar objetos
const obj1 = { a: 1, b: 2 };
const obj2 = obj1
console.log(obj1 === obj2)

const obj3 = { ...obj1 }
console.log(obj3)
console.log(obj1 === obj3)
