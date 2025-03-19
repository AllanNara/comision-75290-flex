// // Función que simula una operación asincrónica con un callback
// function leerArchivo(archivo, callback) {
//   setTimeout(() => {
//     // Simulamos un error
//     if (archivo === 'inexistente') {
//       callback('Error: El archivo no se encontró', null);
//     } else {
//       callback(null, 'Contenido del archivo: "Hola Mundo!"');
//     }
//   }, 2000);
// }

// const cb = (error, contenido) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(contenido);
//   }
// };

// // Llamada a la función con un callback
// leerArchivo('existe.txt', cb);
// // Llamada con un archivo inexistente
// leerArchivo('inexistente', cb);


// Función que devuelve una promesa
function leerArchivoPromesa(archivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos un error
      if (archivo === "inexistente") {
        reject("Error: El archivo no se encontró");
      } else {
        resolve('Contenido del archivo: "Hola Mundo!"');
      }
    }, 2000);
  });
}

// Usando then y catch con la promesa
// leerArchivoPromesa("existe.txt").then().catch();
                              // then -> cuando se complete la promesa de manera exitosa
                              // catch -> cuando la promesa haya sido rechazada

// Usando then y catch con un archivo inexistente
leerArchivoPromesa("inexistente")
  .then((contenido) => {
    console.log(contenido);
  })
  .catch((error) => {
    console.log(error);
  });


