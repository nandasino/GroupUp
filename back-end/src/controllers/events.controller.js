import { db } from "../database/db.js";

export async function getCityEvents(req, res){
  const { city } = req.params;

  try{
      const eventsExist = await db.query('SELECT * FROM events WHERE city = $1;', [city]); 
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
      const categories = await db.query('SELECT * FROM categories;'); 
      if(categories.rowCount==0){
          return res.sendStatus(404);
      }
      res.status(200).send(categories.rows);
  }catch(error){
      res.send(error);
  }
}
