import { eventIdSchema } from "../models/eventId.model.js";

export async function createGroupValidation(req, res, next){
    const { eventId } = req.body;

    const {error} = eventIdSchema.validate({eventId}, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };
    res.locals.idEvent = { eventId }
    next();
}