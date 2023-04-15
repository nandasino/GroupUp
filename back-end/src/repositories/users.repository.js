import { db } from "../database/db.js"

export async function updateUserCity({ city,userId }) {
	return db.query("UPDATE users SET city = $1 WHERE id = $2;",[city, userId]);
}

export async function getUserByName({ name }) {
	return db.query(`SELECT * FROM users WHERE name = $1;`, [name]);
}