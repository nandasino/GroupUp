import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import * as accountsRepository from "../repositories/accounts.repository.js";

export async function signUp(req,res){
    const {name,email,password,image} = res.locals.signUp;

    const hiddenPassword = bcrypt.hashSync(password, 12);

    try{
        await accountsRepository.createUser({ 
          name,
          email,
          hiddenPassword,
          image
        })
        res.sendStatus(201);
    }catch(error){
        res.sendStatus(500);
    }
}

export async function signIn(req, res){
    const { email } = req.body;

    try{

        const userExists = await accountsRepository.getUserByEmail({email});
        const user = userExists.rows[0];
        const image = user.image;
        const city = user.city;
        const id = user.id;
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: user.id }, secretKey);
        await accountsRepository.createSession({ id, token });

        res.status(200).send({ token , image, city, id });
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
}