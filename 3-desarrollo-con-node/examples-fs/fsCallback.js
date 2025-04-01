const fs = require("fs");

fs.writeFile("./ejemplo2.txt", "Hola Coders! desde Callback", (error) => {
  if (error) return console.log("Error al escribir el archivo");
  fs.readFile("./ejemplo2.txt", "utf-8", (error, resultado) => {
    if (error) return console.log("Error al leer el archivo");
    console.log(resultado);
    fs.appendFile("./ejemplo2.txt", "\n Mas contenido", (error, resultado) => {
      if (error) return console.log("Error al actualizar el archivo");
      fs.readFile("./ejemplo2.txt", "utf-8", (error, resultado) => {
        if (error) return console.log("Error al leer el archivo");
        console.log(resultado);
        fs.unlink("./ejemplo2.txt", (error) => {
          if (error) return console.log("No se pudo eliminar el archivo");
          console.log("Proceso finalizado");
        });
      });
    });
  });
});

/// fs.writeFile( <path>,   <contenido>,    CALLBACK  )
/// fs.readFile( <path>,   <formato>,    CALLBACK  )
/// fs.readFile( <path>,   <contenido>,    CALLBACK  )
//  fs.unlink(<path>,   CALLBACK  );
