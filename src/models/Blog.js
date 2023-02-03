import { Schema, model } from "mongoose";

const schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default model("Blog", schema);
