// Función con operaciones asincrónicas usando callbacks anidados
function leerArchivo(archivo, callback) {
  setTimeout(() => {
    if (archivo === "inexistente.txt") {
      callback("Error: El archivo no se encontró", null);
    } else {
      callback(null, 'Contenido del archivo: "Hola Mundo!"');
    }
  }, 1000);
}

function procesarArchivo(contenido, callback) {
  setTimeout(() => {
    if (contenido.includes("Hola Mundo")) {
      callback(null, "El archivo contiene el saludo");
    } else {
      callback("Error: Saludo no encontrado", null);
    }
  }, 1000);
}

function guardarArchivo(resultado, callback) {
  setTimeout(() => {
    callback(null, `Archivo guardado con éxito: ${resultado}`);
  }, 1000);
}

// Llamada con callbacks anidados
leerArchivo("existe.txt", (error, contenido) => {   // ---> ETAPA 1 DEL CB
  if (error) {
    console.log(error);
  } else {
    procesarArchivo(contenido, (error, resultado) => { // ---> ETAPA 2 DEL CB
      if (error) {
        console.log(error);
      } else {
        guardarArchivo(resultado, (error, mensaje) =>  {  // ---> ETAPA final DEL CB
          if (error) {
            console.log(error);
          } else {
            console.log(mensaje);
          }
        });
      }
    });
  }
});
