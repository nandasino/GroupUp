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
    if(user.rowCount==0){
        return res.send([]);
    }
    res.status(200).send(user.rows[0]);
  }catch(error){
    res.send(error);
  }
}