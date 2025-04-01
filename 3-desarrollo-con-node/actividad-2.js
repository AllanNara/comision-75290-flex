const fs = require("fs");

// tomamos la fecha con su hora actual
let current = new Date().toLocaleString();

// invocamos los metodos de callback
fs.writeFile("./2-current_date.txt", current, "utf8", (err, result) => {
  if (err) return console.log("Error al escribir el archivo de fecha");
  fs.readFile("./2-current_date.txt", "utf8", (err, result) => {
    if (err) return console.log("Error al escribir el archivo de fecha");
    console.log(`El archivo contiene dentro la fecha: \n ${result}`);
    fs.unlink("./2-current_date.txt", (err) => {
      if (err) return console.log("Error al escribir el archivo de fecha");
      console.log("Fin del proceso");
    });
  });
});

console.log("Ultima linea del script...");
