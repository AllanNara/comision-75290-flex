import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRouter from "./routes/students.router.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/students", studentRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

mongoose
  .connect(MONGO_URI, {
    dbName: "School",
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(`MongoDB connection error: \n ${error}`));
