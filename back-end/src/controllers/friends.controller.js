import * as friendsRepository from "../repositories/friends.repository.js";

export async function getUserRequests(req, res){
  const userId = res.locals.idUser;
  try{
      const requests = await friendsRepository.getFriendsByFriendId({userId}); 
      if(requests.rowCount==0){
          return res.send([]);
      }
      res.status(200).send(requests.rows);
  }catch(error){
      res.send(error);
  }
}

export async function updateFriendsById(req,res){
  const { requestId } = req.params;
  //const userId = res.locals.idUser;
  try {
      const requestExist = await friendsRepository.getFriendById({requestId}); 
      if(requestExist.rowCount==0){
        return res.sendStatus(404);
      }
      await friendsRepository.updateFriendsById({ requestId });
      res.sendStatus(201);
    } catch (error) {
      res.status(422).send(error);
    }
}

export async function getFriendsEvents(req, res){
  const userId = res.locals.idUser;
  try{
      const eventsExist = await friendsRepository.getFriendsEvents({userId}); 
      if(eventsExist.rowCount==0){
          return res.sendStatus(404);
      }
      res.status(200).send(eventsExist.rows);
  }catch(error){
      res.send(error);
  }
}
export async function getUserRequest(req, res){
  const userId = res.locals.idUser;
  const { friendId } = req.params;
  try{
      const requests = await friendsRepository.getFriendByFriendId({userId, friendId}); 
      if(requests.rowCount==0){
          return res.send([]);
      }
      res.status(200).send(requests.rows[0]);
  }catch(error){
      res.send(error);
  }
}