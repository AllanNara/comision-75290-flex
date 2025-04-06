import express from "express";
import hbs from "express-handlebars";
import petsRouter from "./routes/pets.router.js";
import usersRouter from "./routes/users.router.js";

const PORT = 8080;
const app = express();

// MIDDLEWARES
app.use(express.static(import.meta.dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS;
app.use("/api", (req, res) => res.json({ home: "welcome to api petshop" }));
app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
