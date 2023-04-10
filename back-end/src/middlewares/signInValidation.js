import {db} from "../database/db.js";
import bcrypt from "bcrypt";
import { signInSchema } from "../models/signIn.model.js";

export async function signInValidation(req, res, next){
    const { email, password } = req.body;

    const {error} = signInSchema.validate({email,password}, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };

    const emailExists = await db.query("SELECT * FROM  users WHERE email = $1", [email]);
    
    if (emailExists.rowCount == 0){
        return res.sendStatus(401);
    }

    const user = emailExists.rows[0];
    const userPassword = user.password;
    const samePassword = bcrypt.compareSync(password, userPassword);

    if (!samePassword){
        return res.sendStatus(401);
    }

    next();
}