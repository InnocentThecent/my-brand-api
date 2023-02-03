import { Router } from "express";
import { addQuery, getQueries, removeQuery } from "../controllers/query";
import validate from "../middlewares/validate";
import querySchema from "../validations/query";

const router = Router();

router.get("/blog", getQueries);

router.post("/blog", validate(querySchema), addQuery);

router.delete("/blog/:id", removeQuery);

export default router;
