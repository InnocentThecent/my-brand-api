import { Router } from "express";
import { addQuery, getQueries, removeQuery } from "../controllers/query";
import validate from "../middlewares/validate";
import querySchema from "../validations/query";

const router = Router();

router.get("/", getQueries);

router.post("/", validate(querySchema), addQuery);

router.delete("/:id", removeQuery);

export default router;
