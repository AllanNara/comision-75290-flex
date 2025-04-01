const fs = require("fs").promises;

// / PROMESAS THEN/CATCH
fs.writeFile("./ejemplo3-a.txt", "Hola soy una promesa!")
  .then(() => fs.readFile("./ejemplo3-a.txt", "utf-8"))
  .then((data) => {
    console.log(data);
    return fs.appendFile("./ejemplo3-a.txt", "\n Mas contenido");
  })
  .then(() => fs.readFile("./ejemplo3-a.txt", "utf-8"))
  .then((data) => {
    console.log(data);
    return fs.unlink("./ejemplo3-a.txt");
  })
  .catch((err) => console.log("Hubo un error: ", err));

// / PROMESAS ASYNC/AWAIT
const operacionAsincronica = async () => {
  await fs.writeFile("./ejemplo3-b.txt", "Hola soy una promesa!");
  let data = await fs.readFile("./ejemplo3-b.txt", "utf-8");
  console.log(data);

  await fs.appendFile("./ejemplo3-b.txt", "\n Mas contenido y con promesas!");

  data = await fs.readFile("./ejemplo3-b.txt", "utf-8");
  console.log(data);

  await fs.unlink("./ejemplo3-b.txt");
};

operacionAsincronica();
