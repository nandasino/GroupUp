import * as usersRepository from "../repositories/users.repository.js";

export async function updateCity(req,res){
  const { city } = req.body;
  const userId = res.locals.idUser;
  try {
      await usersRepository.updateUserCity({ city, userId });
      res.status(201).send("cidade do usuário cadastrada");
    } catch (error) {
      res.status(422).send(error);
    }
}
export async function getUserByName(req,res){
  const { name } = req.params;
  try{
    const user = await usersRepository.getUserByName({ name }); 
    if(!user){
        return res.send([]);
    }
    res.status(200).send(user);
  }catch(error){
    res.send(error);
  }
}

export async function getUserById(req,res){
  const { id } = req.params;
  const idNumber = Number(id);
  try{
    const user = await usersRepository.getUserInfo({ idNumber }); 
    if(!user){
      return res.sendStatus(404);
    }
    res.status(200).send(user);
  }catch(error){
    res.send(error);
  }
}