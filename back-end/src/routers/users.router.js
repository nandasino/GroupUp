import { Router } from "express";
import { postCity, getUserCity } from "../controllers/users.controller.js"
import { cityValidation } from "../middlewares/cityValidation.js";
import { authValidation } from "../middlewares/authValidation.js";

const router = Router();
router.post('/cities', authValidation, cityValidation, postCity );
router.get('/cities', authValidation, getUserCity );

export default router;