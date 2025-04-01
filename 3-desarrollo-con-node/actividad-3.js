const fs = require("fs");

const main = async () => {
  try {
    const data = await fs.promises.readFile("./package.json", "utf-8");
    if (typeof data === "string") console.log("No hace falta transformarme!");

    const info = {
      contenidoStr: data,
      contenidoObj: JSON.parse(data),
      size: data.length * 8,
    };
    console.log(info);

    const json = JSON.stringify(info, null, 2);
    await fs.promises.writeFile("./info.json", json);
  } catch (error) {
    console.log("Ocurrio un error: " + error);
  }
};

main();
