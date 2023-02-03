import Joi from "joi";

const blogSchema = Joi.object({
  title: Joi.string().min(8).max(200).required(),
  content: Joi.string().min(20).max(1000).required(),
});

export default blogSchema;
