import * as groupsRepository from "../repositories/groups.repository.js";

export async function getIfJoined(req, res){
  const { eventId } = req.params;
  const userId = res.locals.idUser;
  const idEvent = Number(eventId);
  try{
      const eventExist = await groupsRepository.getEventById({eventId}); 
      if(!eventExist){
        return res.sendStatus(404);
      }
      const userJoined = await groupsRepository.getGroupByUserAndEventId({idEvent, userId}); 
      if(!userJoined){
        return res.send({
          message: "notJoined"
        });
      }
      await groupsRepository.getGroupByUserAndEventId({idEvent, userId}); 
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
  const idEvent = Number(eventId);
  try{
      await groupsRepository.createGroup({idEvent, userId})
      res.sendStatus(201);
  }catch(error){
      res.sendStatus(500);
  }
}


export async function deleteGroup(req, res){
  const { eventId } = req.params;
  const userId = res.locals.idUser;
  const idEvent = Number(eventId);
  try{
      const userJoined = await groupsRepository.getGroupByUserAndEventId({idEvent, userId}); 
      if(!userJoined){
        return res.sendStatus(404);
      }
      const groupId = userJoined.id;
      await groupsRepository.deleteGroup({groupId});
      res.sendStatus(201);
  }catch(error){
      res.send(error);
  }
}


export async function getGroups(req, res){
  const { eventId } = req.params;
  const idEvent = Number(eventId);
  try{
      const eventExist = await groupsRepository.getEventById({idEvent}); 
      if(!eventExist){
        return res.sendStatus(404);
      }
      const groups = await groupsRepository.getGroups({idEvent}); 
      if(!groups){
          return res.send([]);
      }
      res.status(200).send(groups);
  }catch(error){
      res.send(error);
  }
}

export async function getUserGorups(req, res){
  const userId = res.locals.idUser;
  try{
      const groups = await groupsRepository.getGroupsByUserId({userId}); 
      if(!groups){
          return res.send([]);
      }
      res.status(200).send(groups);
  }catch(error){
      res.send(error);
  }
}