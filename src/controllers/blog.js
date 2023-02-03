import Blog from "../models/Blog";

export const getBlogs = async (req, res) => {
  const blog = await Blog.find();
  res.status(200).send(blog);
};
export const getOneBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.status(200).send(blog);
  } catch {
    res.status(404).send({ error: "Blog doesn't exist!" });
  }
};

export const createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });
  await blog.save();
  res.status(201).send(blog);
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });

    if (req.body.title) {
      blog.title = req.body.title;
    }

    if (req.body.content) {
      blog.content = req.body.content;
    }

    await blog.save();
    res.send(blog);
  } catch {
    res.status(404).send({ error: "Blog doesn't exist!" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.status(204).send({ message: "Blog deleted successfully" });
  } catch {
    res.status(404).send({ error: "Blog doesn't exist!" });
  }
};
