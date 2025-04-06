import { Router } from "express";
import { food, users } from "../utils.js";

const router = Router();

router.get("/actividad-2", (req, res) => {
  let userRandom = users[Math.floor(Math.random() * 5)];
  res.render("personal-data", { ...userRandom });
});

router.get("/food", (req, res) => {
  let userRandom = users[Math.floor(Math.random() * 5)];
  console.log({ userRandom });
  res.render("manager", {
    user: userRandom,
    isAdmin: userRandom.role === "admin",
    food,
  });
});

router.get("/register", (req, res) => {
  res.render("register");
});

export default router;
