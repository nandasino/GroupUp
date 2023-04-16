import { signUpSchema } from "../models/signUp.model.js";
import * as usersRepository from "../repositories/users.repository.js";

export async function signUpValidation(req, res, next){
    const {name,email,password,confirmPassword,image} = req.body;
    const {error} = signUpSchema.validate({name,email,password,confirmPassword,image}, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };

    if(password !== confirmPassword){
        return res.status(422).send({message:"Senhas diferentes."});
    }

    //const emailExists = await db.query("SELECT * FROM  users WHERE email = $1", [email]);
    const emailExists = await usersRepository.getUserByEmail({email});
    
    if (emailExists){
        return res.sendStatus(409);
    }

    res.locals.signUp = {name,email,password,image};
    next();
}
