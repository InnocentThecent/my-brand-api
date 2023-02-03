import { Schema, model } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
    message: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default model("Query", schema);
