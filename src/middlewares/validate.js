// a function to validate req.body
export default function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({
        status: 400,
        data: {
          message: error.details[0].message.replace(/[/"]+/g, ""),
          error,
        },
      });
    }
    next();
  };
}
