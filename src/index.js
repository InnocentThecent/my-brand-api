import express, { json } from "express";
import { connect } from "mongoose";
import routes from "./routes/routes";

import { config } from "dotenv";
import app from "d:/pro/my-blog/src";
config();

const app = express();
app.use(json());
app.use("/api", routes);

connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => {
    console.log("Database connected !");
  });
});

export default app;
