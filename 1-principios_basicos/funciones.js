function saludar(idioma) {
    if(idioma === "espaniol") {
        return "hola"
    } else if(idioma === "ingles") {
        return "hello"
    } else {
        return "no se ingreso idioma";
    }
}

console.log(saludar("ingles"))



const despedir = (idioma) => {
    if(idioma === "espaniol") {
        return "adios"
    } else if(idioma === "ingles") {
        return "bye"
    } else {
        return "no se ingreso idioma";
    }
}


console.log(despedir("espaniol"))