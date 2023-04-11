import {db} from "../database/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function authValidation(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if(!token){
        return res.sendStatus(401);
    }
    const secretKey = process.env.JWT_SECRET;
    try {
        const data = jwt.verify(token, secretKey);
        const dataId = data.userId;
        const user = (await db.query('SELECT * FROM users WHERE id = $1;', [dataId])).rows[0];
        res.locals.idUser = dataId;
        res.locals.user = user;
        next();

    } catch {
        return res.sendStatus(401);
    }

}