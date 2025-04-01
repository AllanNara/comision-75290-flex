const fs = require("fs");

fs.writeFileSync("./ejemplo1.txt", "Hola, Coders, estoy en un archivo!");

if (fs.existsSync("./ejemplo1.txt")) {
  let contenido = fs.readFileSync("./ejemplo1.txt", "utf-8");
  console.log(contenido);

  fs.appendFileSync("./ejemplo1.txt", "\n---------Mas contenido!-------");
  contenido = fs.readFileSync("./ejemplo1.txt", "utf-8");
  console.log(contenido);

  fs.unlinkSync("./ejemplo1.txt");
} else {
  console.log("ERROR: no existe el archivo :(");
}

