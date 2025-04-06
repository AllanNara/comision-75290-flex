import { Router } from "express";
import uploader from "../middlewares/multer.js";

const router = Router();
const users = [];

router.get("/", (req, res) => {
  res.send({ status: "success", users });
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400);
    res.json({ status: "error", error: "Missing or invalid image" });
  }
  let user = req.body;
  user.profile = req.file.path;
  users.push(user);
  res.send({ status: "success", message: "User created" });
});

export default router;
