import http from "http";
import express from "express";
import hbs from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js"

const PORT = 8080;
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.engine("handlebars", hbs.engine());
app.set("views", import.meta.dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(import.meta.dirname + "/public"));
app.use("/", viewsRouter)

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`))



