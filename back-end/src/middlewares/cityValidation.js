import { citySchema } from "../models/city.model.js";

export async function cityValidation(req, res, next){
    const { city } = req.body;

    const {error} = citySchema.validate({city}, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };
    next();
}