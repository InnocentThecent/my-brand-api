import { Schema, model } from "mongoose";

const schema = Schema({
  title: String,
  content: String,
});

export default model("Post", schema);
