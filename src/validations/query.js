import Joi from "joi";

const querySchema = Joi.object({
  name: Joi.string().min(5).required(),
  message: Joi.string().min(10).required(),
  email: Joi.string().email().lowercase().required(),
});

export default querySchema;
