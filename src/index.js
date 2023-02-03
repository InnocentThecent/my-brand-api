import express, { json } from "express";
import { connect } from "mongoose";
import routes from "./routes/blog";

import { config } from "dotenv";

const app = express();
app.use(json());
app.use("/api", routes);
config();

connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(4000, () => {
    console.log("Database connected !");
  });
});

export default app;
