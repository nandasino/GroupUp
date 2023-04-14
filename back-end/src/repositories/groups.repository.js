import { db } from "../database/db.js"

export async function getEventById({ eventId }) {
	return db.query(`
  SELECT * FROM events WHERE "id" = $1
  ;`, [eventId]);
}
export async function getGroupByUserAndEventId({ eventId, userId }) {
	return db.query(`
  SELECT * FROM groups WHERE "eventId" = $1 AND "userId" = $2
  ;`, [eventId, userId]);
}

export async function createGroup({ eventId, userId}) {
	return db.query(`INSERT INTO groups ("eventId", "userId") VALUES ($1, $2);`,
  [eventId, userId]);
}

export async function deleteGroupByUserAndEventId({ eventId, userId}) {
	return db.query(`DELETE FROM groups WHERE "eventId" = $1 AND "userId" = $2;`,
  [eventId, userId]);
}

export async function getGroups({ eventId }) {
	return db.query(`
  SELECT
  groups.id, groups."eventId", groups."userId",
  users.name AS "userName",
  users.image AS image  
  FROM groups
  JOIN users ON users.id = groups."userId"
  WHERE "eventId" = $1
  ;`, [eventId]);
}


export async function getGroupsByUserId({ userId }) {
	return db.query(`
  SELECT
  groups.id, groups."eventId",
  events.id, events."userId",events.city, events.address,
  events.date, events.hour, events.vacancies, events."isPublic", events.description,
  categories.name AS "categoryName", 
  users.image AS "userProfile",
  users.name AS "userName"
  FROM groups
  JOIN events ON events.id = groups."eventId"
  JOIN categories ON events."categoryId" = categories.id 
  JOIN users ON users.id = events."userId"
  WHERE groups."userId" = $1
  ;`, [userId]);
}