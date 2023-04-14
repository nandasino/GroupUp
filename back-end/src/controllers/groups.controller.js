import * as groupsRepository from "../repositories/groups.repository.js";


export async function getIfJoined(req, res){
  const { eventId } = req.params;
  const userId = res.locals.idUser;
  try{
      const eventExist = await groupsRepository.getEventById({eventId}); 
      if(eventExist.rowCount==0){
        return res.sendStatus(404);
      }
      const userJoined = await groupsRepository.getGroupByUserAndEventId({eventId, userId}); 
      if(userJoined.rowCount==0){
        return res.send({
          message: "notJoined"
        });
      }
      res.status(200).send({
        message: "joined"
      });
  }catch(error){
      res.send(error);
  }
}

export async function postGroup(req,res){
  const { eventId } = res.locals.idEvent;

  const userId = res.locals.idUser;

  try{
      await groupsRepository.createGroup({eventId, userId})
      res.sendStatus(201);
  }catch(error){
      res.sendStatus(500);
  }
}


export async function deleteGroup(req, res){
  const { eventId } = req.params;
  const userId = res.locals.idUser;
  try{
      const userJoined = await groupsRepository.getGroupByUserAndEventId({eventId, userId}); 
      if(userJoined.rowCount==0){
        return res.sendStatus(404);
      }
      await groupsRepository.deleteGroupByUserAndEventId({eventId, userId});
      res.sendStatus(201);
  }catch(error){
      res.send(error);
  }
}


export async function getGroups(req, res){
  const { eventId } = req.params;
  try{
      const eventExist = await groupsRepository.getEventById({eventId}); 
      if(eventExist.rowCount==0){
        return res.sendStatus(404);
      }
      const groups = await groupsRepository.getGroups({eventId}); 
      if(groups.rowCount==0){
          return res.send([]);
      }
      res.status(200).send(groups.rows);
  }catch(error){
      res.send(error);
  }
}