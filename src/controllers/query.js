import Query from "../models/Query";

export const getQueries = async (req, res) => {
  const query = await Query.find();
  res.status(200).send(query);
};

export const addQuery = async (req, res) => {
  const query = new Query({
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
  });
  await query.save();
  res.status(201).send({ message: "Query submitted successfully", query });
};

export const removeQuery = async (req, res) => {
  try {
    await Query.deleteOne({ _id: req.params.id });
    res.status(204).send({ message: "Query deleted successfully" });
  } catch {
    res.status(404).send({ error: "Query doesn't exist!" });
  }
};
