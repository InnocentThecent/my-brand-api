import express, { json } from "express";
import { connect } from "mongoose";
import blogRoutes from "./routes/blog";
import queryRoutes from "./routes/queries";
import userRoutes from "./routes/auth";
import { config } from "dotenv";
require("./middlewares/auth");

const app = express();
app.use(json());
app.use("/api/blog", blogRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/user", userRoutes);

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
