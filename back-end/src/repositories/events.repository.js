import { db } from "../database/db.js"

export async function getEventsByCity({ city }) {
	return db.query('SELECT * FROM events WHERE city = $1;', [city]);
}

export async function getCategories() {
	return db.query('SELECT * FROM categories;');
}
export async function createEvent({ userId, date, hour, isPublic, city, address, categoryId, vacancies, description }) {
	return db.query(`INSERT INTO events ("userId", date, hour, "isPublic", city, address, "categoryId", vacancies, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
  [userId, date, hour, isPublic, city, address, categoryId, vacancies, description]);
}