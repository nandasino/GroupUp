import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getCityEvents } from "../controllers/events.controller.js";

const router = Router();
router.get('/events/:city', getCityEvents );

export default router;