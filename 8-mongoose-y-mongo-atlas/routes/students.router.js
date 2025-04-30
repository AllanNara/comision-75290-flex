import { Router } from "express";
import { studentsModel } from "../models/students.model.js";

const router = Router();

router.get("/", async(req, res) => {
    const students = await studentsModel.find({});
    res.json({ status: "success", response: students })
});

router.post("/", async(req, res) => {
    const { first_name, last_name, email, age, isActive } = req.body;
    const newStudent = await studentsModel.insertOne({
        first_name,
        last_name,
        email,
        age,
        isActive
    })

    res.json({ status: "success", response: newStudent })
})

router.put("/:sid", async(req, res) => {
    const { sid } = req.params;
    const { body } = req;

    const response = await studentsModel.updateOne({_id: sid}, {
        $set: { ...body }
    })

    res.json({ status: "success", response })
})

router.delete("/:sid", async(req, res) => {
    const { sid } = req.params;
    const response = await studentsModel.deleteOne({_id: sid})
    res.json({ status: "success", response })
})

export default router