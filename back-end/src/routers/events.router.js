import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getCityEvents, getCategories, postEvent, getUserEvents } from "../controllers/events.controller.js";
import { eventValidation } from "../middlewares/eventValidation.js";

const router = Router();
router.get('/events/:city', getCityEvents );
router.get('/catergories', getCategories);
router.post('/events', authValidation, eventValidation, postEvent);
router.get('/events', authValidation, getUserEvents);


export default router;