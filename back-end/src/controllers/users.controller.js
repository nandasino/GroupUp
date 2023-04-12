import * as usersRepository from "../repositories/users.repository.js";

export async function updateCity(req,res){
  const { city } = req.body;
  const userId = res.locals.idUser;
  console.log(city);
  try {
      await usersRepository.updateUserCity({ city, userId });
      res.status(201).send("cidade do usuário cadastrada");
    } catch (error) {
      res.status(422).send(error);
    }
}