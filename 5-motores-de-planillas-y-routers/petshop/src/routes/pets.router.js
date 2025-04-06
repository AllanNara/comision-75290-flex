import { Router } from "express";
import uploader from "../middlewares/multer.js";

const router = Router();
const pets = [];

router.get("/", (req, res) => {
  res.send({ status: "success", pets });
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400);
    res.json({ status: "error", error: "Missing or invalid image" });
  }
  console.log({ ...req.body });
  pets.push({ ...req.body, thumbnail: req.file.path });
  res.json({ status: "success", message: "Pet added successfully!" });
});

export default router;
