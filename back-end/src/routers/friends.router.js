import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getUserRequests, updateFriendsById, getFriends, getUserRequest, postRequest } from "../controllers/friends.controller.js";

const router = Router();
router.get('/requests', authValidation, getUserRequests);
router.put('/requests/:requestId', updateFriendsById);
router.post('/requests', postRequest);
router.get('/friends', authValidation, getFriends);
router.get('/friends/:friendId', authValidation, getUserRequest);


export default router;