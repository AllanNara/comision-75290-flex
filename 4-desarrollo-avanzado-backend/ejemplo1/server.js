// Common JS -> 
// const express = require("express");

// ES Modules
import express from "express";

const server = express();

// GET -> leer
// POST -> crear
// PUT -> actualiza
// DELETE -> elimina

server.get("/", (req, res) => {
    res.send("GET")
})

server.post("/", (req, res) => {
    res.send("POST")
})

server.put("/", (req, res) => {
    res.send("PUT")
})

server.delete("/", (req, res) => {
    res.send("DELETE")
})



server.listen(8000, () => console.log(`Puerto levantado en ${8080}`))
