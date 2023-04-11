import { db } from "../database/db.js";

/*export async function postCity(req,res){
    const { city } = req.body;
    const userId = res.locals.idUser;
    try {
        await db.query(`
        INSERT INTO cities (city,"userId") VALUES ($1, $2);`,
        [ city, userId]);
        res.status(201).send("cidade do usuário cadastrada");
      } catch (error) {
        res.status(422).send(error);
      }
}
export async function getUserCity(req,res){
  const userId = res.locals.idUser;
  const user = res.locals.user
  try{
      const userCity = await db.query(`
          SELECT city FROM cities
          WHERE "userId" = $1`,
          [userId]);
          
      res.status(200).send(userCity.rows[0]);

  }catch(error){
      res.sendStatus(500);
  }
}*/
export async function updateCity(req,res){
  const { city } = req.body;
  const userId = res.locals.idUser;
  console.log(city);
  try {
      await db.query(
        "UPDATE users SET city = $1 WHERE id = $2;",
        [city, userId]
      );
      res.status(201).send("cidade do usuário cadastrada");
    } catch (error) {
      res.status(422).send(error);
    }
}