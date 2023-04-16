import { Router } from "express";
import { updateCity, getUserByName, getUserById } from "../controllers/users.controller.js"
import { cityValidation } from "../middlewares/cityValidation.js";
import { authValidation } from "../middlewares/authValidation.js";

const router = Router();
router.put('/usercity', authValidation, cityValidation, updateCity );
router.get('/users/:name', getUserByName );
router.get('/user/:id', getUserById );

export default router;