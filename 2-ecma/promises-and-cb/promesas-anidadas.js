// Función que devuelve una promesa para leer un archivo
function leerArchivoPromesa(archivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (archivo === "inexistente.txt") {
        reject("Error: El archivo no se encontró");
      } else {
        resolve('Contenido del archivo: "Hola Mundo!"');
      }
    }, 1000);
  });
}

// Función que devuelve una promesa para procesar el contenido del archivo
function procesarArchivoPromesa(contenido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (contenido.includes("Hola Mundo")) {
        resolve("El archivo contiene el saludo");
      } else {
        reject("Error: Saludo no encontrado");
      }
    }, 1000);
  });
}

// Función que devuelve una promesa para guardar el archivo
function guardarArchivoPromesa(resultado) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Archivo guardado con éxito: ${resultado}`);
    }, 1000);
  });
}

// Usando promesas encadenadas
leerArchivoPromesa("existe.txt")
  .then((contenido) => {
    return procesarArchivoPromesa(contenido); // Encadenando la promesa
  })
  .then((resultado) => {
    return guardarArchivoPromesa(resultado); // Encadenando la siguiente promesa
  })
  .then((mensaje) => {
    console.log(mensaje); // Resultados finales
  })
  .catch((error) => {
    console.log(error); // Manejo de errores en cualquier paso del encadenamiento
  });
