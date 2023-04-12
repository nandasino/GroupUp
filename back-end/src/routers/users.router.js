import { Router } from "express";
import { updateCity } from "../controllers/users.controller.js"
import { cityValidation } from "../middlewares/cityValidation.js";
import { authValidation } from "../middlewares/authValidation.js";

const router = Router();
router.put('/usercity', authValidation, cityValidation, updateCity );

export default router;