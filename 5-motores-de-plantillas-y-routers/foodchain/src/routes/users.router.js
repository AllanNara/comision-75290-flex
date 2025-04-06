import { Router } from "express";
import { users } from "../utils.js";

const router = Router();

router.post("/users", (req, res) => {
  const { first_name, last_name, age, email, phone = 0 } = req.body;
  if (!first_name || !last_name || !age || !email) {
    return res.status(400).send("Missing or invalid fields");
  }
  users.push({ ...req.body, role: "user" });
  console.log(users);
  res.render("personal-data", { ...req.body });
});

export default router;
