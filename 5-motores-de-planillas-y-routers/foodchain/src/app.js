import express from "express";
import hbs from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";

const PORT = 8080;
const app = express();

// CONFIGURACIONES DE HANDLEBARS
app.engine("handlebars", hbs.engine());
app.set("views", import.meta.dirname + "/views");
app.set("view engine", "handlebars");

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS
app.get("/", (req, res) => res.render("index", { name: req.query.name }));
app.use("/", viewsRouter);
app.use("/api", usersRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
