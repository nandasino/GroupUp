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
  SELECT * FROM groups WHERE "eventId" = $1
  ;`, [eventId]);
}