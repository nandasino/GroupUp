import * as eventsRepository from "../repositories/events.repository.js";

export async function getCityEvents(req, res){
  const { city } = req.params;

  try{
      const eventsExist = await eventsRepository.getEventsByCity({city}); 
      if(eventsExist.rowCount==0){
          return res.sendStatus(404);
      }
      res.status(200).send(eventsExist.rows);
  }catch(error){
      res.send(error);
  }
}

export async function getCategories(req, res){
  try{
      const categories = await eventsRepository.getCategories(); 
      if(categories.rowCount==0){
          return res.sendStatus(404);
      }
      res.status(200).send(categories.rows);
  }catch(error){
      res.send(error);
  }
}

export async function postEvent(req,res){
  const {
    date,
    hour,
    isPublic,
    city,
    address,
    categoryId,
    vacancies,
    description
  } = res.locals.event;

  const userId = res.locals.idUser;

  try{
      await eventsRepository.createEvent({ 
        userId,
        date,
        hour,
        isPublic,
        city,
        address,
        categoryId,
        vacancies,
        description
      })
      res.sendStatus(201);
  }catch(error){
      res.sendStatus(500);
  }
}
