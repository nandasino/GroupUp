import * as friendsRepository from "../repositories/friends.repository.js";

export async function getUserRequests(req, res){
  const userId = res.locals.idUser;
  try{
      const requests = await friendsRepository.getFriendsByFriendId({userId}); 
      if(requests.rowCount==0){
          return res.send([]);
      }
      res.status(200).send(requests);
  }catch(error){
      res.send(error);
  }
}

export async function updateFriendsById(req,res){
  const { requestId } = req.params;
  //const userId = res.locals.idUser;
  const id = Number(requestId);
  try {
      const requestExist = await friendsRepository.getFriendById({id}); 
      if(!requestExist){
        return res.sendStatus(404);
      }
      await friendsRepository.updateFriendsById({id});
      res.sendStatus(201);
    } catch (error) {
      res.status(422).send(error);
    }
}

export async function getFriends(req, res){
  const userId = res.locals.idUser;
  try{
      const eventsExist = await friendsRepository.getFriendsByUserId({userId}); 
      if(eventsExist.rowCount==0){
          return res.sendStatus(404);
      }
      res.status(200).send(eventsExist);
  }catch(error){
      res.send(error);
  }
}
export async function getUserRequest(req, res){
  const userId = res.locals.idUser;
  const { friendId } = req.params;
  const idFriend = Number(friendId);
  try{
      const requests = await friendsRepository.getFriendByFriendId({userId, idFriend}); 
      if(!requests){
          return res.send([]);
      }
      res.status(200).send(requests);
  }catch(error){
      res.send(error);
  }
}