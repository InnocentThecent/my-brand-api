import { Router } from "express";
import passport from "passport";
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

router.get("/", getBlogs);

router.post(
  "/",
  validate(blogSchema),
  passport.authenticate("jwt", { session: false }),
  createBlog
);

router.get("/:id", getOneBlog);

router.patch("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export default router;
