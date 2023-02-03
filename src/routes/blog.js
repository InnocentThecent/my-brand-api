import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getOneBlog,
  updateBlog,
} from "../controllers/blog";
import validate from "../middlewares/validate";
import blogSchema from "../validations/Blog";
const router = Router();

router.get("/blog", getBlogs);

router.post("/blog", validate(blogSchema), createBlog);

router.get("/blog/:id", getOneBlog);

router.patch("/blog/:id", updateBlog);

router.delete("/blog/:id", deleteBlog);

export default router;
