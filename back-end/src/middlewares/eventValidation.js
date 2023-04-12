import { eventSchema } from "../models/event.model.js";

export async function eventValidation(req, res, next){
    const { 
      date,
      hour,
      isPublic,
      city,
      address,
      categoryId,
      vacancies,
      description
    } = req.body;

    const {error} = eventSchema.validate({
      date,
      hour,
      isPublic,
      city,
      address,
      categoryId,
      vacancies,
      description
    }, {abortEarly: false});

    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };
    res.locals.event = {
      date,
      hour,
      isPublic,
      city,
      address,
      categoryId,
      vacancies,
      description
    };
    next();
}