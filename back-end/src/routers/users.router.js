import { Router } from "express";
//import { postCity, getUserCity } from "../controllers/users.controller.js"
import { updateCity } from "../controllers/users.controller.js"
import { cityValidation } from "../middlewares/cityValidation.js";
import { authValidation } from "../middlewares/authValidation.js";

const router = Router();
//router.post('/cities', authValidation, cityValidation, postCity );
//router.get('/cities', authValidation, getUserCity );
router.put('/usercity', authValidation, cityValidation, updateCity );

export default router;