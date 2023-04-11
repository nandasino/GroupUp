import bcrypt from "bcrypt";
import { db } from "../database/db.js"
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export async function signUp(req,res){
    const {name,email,password,image} = res.locals.signUp;

    const hiddenPassword = bcrypt.hashSync(password, 12);

    try{
        await db.query(
        `INSERT INTO users (name, email, password, image) VALUES ($1, $2, $3, $4);`,
        [name, email, hiddenPassword, image]); 
        res.sendStatus(201);
    }catch(error){
        res.sendStatus(500);
    }
}

export async function signIn(req, res){
    const { email } = req.body;

    try{

        const userExists = await db.query("SELECT * FROM  users WHERE email = $1", [email]);
        const user = userExists.rows[0];
        const image = user.image
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: user.id }, secretKey);
        await db.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2);', [user.id, token]);

        res.status(200).send({ token , image });
    }catch(error){
        res.sendStatus(500);
        console.log(error);
    }
}