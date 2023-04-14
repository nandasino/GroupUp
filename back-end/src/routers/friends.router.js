import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getUserRequests, updateFriendsById, getFriendsEvents } from "../controllers/friends.controller.js";

const router = Router();
router.get('/requests', authValidation, getUserRequests);
router.put('/requests/:requestId', updateFriendsById);
router.get('/friends', authValidation, getFriendsEvents);


export default router;