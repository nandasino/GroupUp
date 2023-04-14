import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { getIfJoined, postGroup, deleteGroup, getGroups, getUserGorups } from "../controllers/groups.controller.js";
import { createGroupValidation } from "../middlewares/createGroupValidation.js";

const router = Router();
router.get('/usergroup/:eventId', authValidation, getIfJoined);
router.post('/groups', authValidation, createGroupValidation, postGroup);
router.delete('/groups/:eventId', authValidation, deleteGroup);
router.get('/groups/:eventId', getGroups);
router.get('/groups', authValidation, getUserGorups);


export default router;