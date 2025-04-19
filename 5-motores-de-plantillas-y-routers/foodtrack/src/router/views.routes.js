import { Router } from "express";
import { users, food } from "../utils.js";

const router = Router();

router.get("/actividad-1", (req, res) => {
    const indexRandom = Math.floor(Math.random() * 5)
    res.render("datos-personales", { ...users[indexRandom] })
})

router.get("/actividad-2", (req, res) => {
    const indexRandom = Math.floor(Math.random() * 5)
    const userRandom = users[indexRandom]
    const isAdmin = userRandom.role === "admin" 
    res.render("manager", { user: userRandom, isAdmin, food })
})

export default router;