import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getCityEvents, getCategories } from "../controllers/events.controller.js";

const router = Router();
router.get('/events/:city', getCityEvents );
router.get('/catergories', getCategories);

export default router;