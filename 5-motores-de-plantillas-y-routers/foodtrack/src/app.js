import express from "express";
import hbs from "express-handlebars";
import viewsRouter from "./router/views.routes.js"

const app = express();

app.engine("handlebars", hbs.engine());
app.set("views", import.meta.dirname + "/views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("index", { name: req.query.name || "Usuario" }))

// app.get("/conHTML", (req, res) => {
//     const name = req.query.name;
//     res.send(`<h1>Hola ${name} !!! <h1>`)
// })

app.use("/", viewsRouter)


app.listen(8000, () => console.log(`listening on port 8000`))