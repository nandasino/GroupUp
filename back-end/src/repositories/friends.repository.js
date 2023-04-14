import { db } from "../database/db.js"

export async function getFriendsByFriendId({ userId }) {
	return db.query(`
  SELECT
  friends.id, friends."userId", friends."friendId",
  users.name, users.image
  FROM friends
  JOIN users ON users.id = friends."userId"
  WHERE friends."friendId" = $1 AND friends.accepted = false
  ;`, [userId]);
}

export async function getFriendById({ requestId }) {
	return db.query(`
  SELECT * FROM friends WHERE id = $1;`, [requestId]);
}


export async function updateFriendsById({ requestId }) {
	return db.query(`UPDATE friends SET accepted = true WHERE id = $1;
  `,[requestId]);
}

export async function getFriendsEvents({userId}) {
	return db.query(`
  SELECT 
  events.id, events."userId", events.city, events.address,
  events.date, events.hour, events.vacancies, events."isPublic", events.description,
  categories.name AS "categoryName", 
  users.image AS "userProfile",
  users.name AS "userName"
  FROM friends 
  JOIN users ON users.id = friends."friendId"
  JOIN events ON events."userId" = users.id
  JOIN categories ON events."categoryId" = categories.id 
  WHERE friends."userId" = $1 AND friends.accepted = true ORDER BY date;`, [userId]);
}
/*export async function getFriendsEvents({ userId }) {
	return db.query(`SELECT * FROM friends WHERE "userId"=$1;`, [userId]);
}*/