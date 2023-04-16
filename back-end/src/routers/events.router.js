import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getCityEvents, getCategories, postEvent, getUserEvents, getFriendEvents} from "../controllers/events.controller.js";
import { eventValidation } from "../middlewares/eventValidation.js";

const router = Router();
router.get('/events/:city', getCityEvents );
router.get('/catergories', getCategories);
router.post('/events', authValidation, eventValidation, postEvent);
router.get('/events', authValidation, getUserEvents);
router.get('/userevents/:userId', getFriendEvents );


export default router;