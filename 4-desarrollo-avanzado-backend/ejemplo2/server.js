import express from "express";
import data from "./parseJson.js";
const app = express();

// const users = [
//     { name: "pablo", id: 1 },
//     { name: "pedro", id: 2 },
//     { name: "isac", id: 3 },
//     { name: "juan", id: 4 },
//     { name: "maximiliano", id: 5 },
// ]

app.get("/users", (request, response) => {
  //   http://localhost:8080/users?email=amurty0@ovh.net
  const email = request.query.email;
  if (email) {
    const userFound = data.find((e) => e.email === email);
    if (userFound) return response.json(userFound);
  }
  response.json(data);
});

app.get("/users/:id", (request, response) => {
  //   http://localhost:8080/users/12
  const id = parseInt(request.params.id);
  const found = users.find((u) => u.id === id);
  if (!found) return response.json({ error: "user not found" });
  response.json(found);
});

app.listen(8080, () => console.log("Puerto 8080 escuchando peticiones..."));
