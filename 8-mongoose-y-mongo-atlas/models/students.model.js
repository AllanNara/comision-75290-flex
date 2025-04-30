// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const studentsCollection = "students";

const studentSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { versionKey: false });

export const studentsModel = model(studentsCollection, studentSchema);
