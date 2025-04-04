import express from "express";
import json from "./data.js";

// clonamos el array en otra variable para poder modificarla
let data = [...json];

const server = express();
// para recibir bodys del objeto request, necesito configurar un parser
server.use(express.json());

// pagina principal
server.get("/api", (req, res) => {
  res.send(
    "Bienvenidos a mi API, por favor, utilizar la ruta /api/libros para hacer peticiones HTTP",
  );
});

server.get("/api/libros", (req, res) => {
  res.json(data);
});

let idCurrent = 2;
server.post("/api/libros", (req, res) => {
  const { titulo, price, autor } = req.body;
  const newBook = { titulo, price, autor, id: +idCurrent };
  data.push(newBook);
  res.json({ message: "libro creado exitosamente" });
});

server.get("/api/libros/:id", (req, res) => {
  const { id } = req.params;
  const found = data.find((b) => b.id === parseInt(id));
  if (!found) return res.status(404).json({ error: "libro no encontrado" });
  res.json(found);
});

server.put("/api/libros/:id", (req, res) => {
  const price = req.body.price;
  const { id } = req.params;
  const found = data.find((b) => b.id === parseInt(id));
  if (!found) return res.status(404).json({ error: "libro no encontrado" });
  found.price = parseInt(price);
  res.json({ message: "precio actualizado" });
});

server.delete("/api/libros/:id", (req, res) => {
  const { id } = req.params;
  const found = data.find((b) => b.id === parseInt(id));
  if (!found) return res.status(404).json({ error: "libro no encontrado" });

  data = data.filter((l) => l.id !== parseInt(id));
  res.json({ message: "libro eliminado exitosamente" });
});

server.listen(8080, () => console.log("Servidor levantado"));
