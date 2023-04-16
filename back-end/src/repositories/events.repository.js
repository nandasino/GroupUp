import prisma from "../database/db.js";

export async function getEventsByCity({ city }) {
  return prisma.events.findMany({
    where: {
      city: city,
      isPublic: true
    },
    select: {
      id: true,
      userId: true,
      city: true,
      address: true,
      date:true,
      hour:true,
      vacancies: true,
      isPublic: true,
      description:true,
      categories: {
        select: {
          name: true
        }
      }
    }
  })
	/*return db.query(`
  SELECT events.id, events."userId", events.city, events.address, events.date, events.hour, events.vacancies, events."isPublic", events.description, categories.name AS "categoryName" 
  FROM events JOIN categories ON events."categoryId" = categories.id
  WHERE city = $1 AND "isPublic"= true ORDER BY date
  ;`, [city]);*/
}

export async function getCategories() {
  return prisma.categories.findMany();
	//return db.query('SELECT * FROM categories;');
}
export async function createEvent({ userId, date, hour, isPublic, city, address, categoryId, vacancies, description }) {
  return prisma.events.create({
    data: {
      userId,
      date,
      hour,
      isPublic,
      city,
      address,
      categoryId,
      vacancies,
      description
    }
  })
  /*return db.query(`INSERT INTO events ("userId", date, hour, "isPublic", city, address, "categoryId", vacancies, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
  [userId, date, hour, isPublic, city, address, categoryId, vacancies, description]);*/
}
export async function getEventsByUser(userId) {
  return prisma.events.findMany({
    where: {
      userId: userId
    },
    select: {
      id: true,
      userId: true,
      city: true,
      address: true,
      date:true,
      hour:true,
      vacancies: true,
      isPublic: true,
      description:true,
      categories: {
        select: {
          name: true
        }
      },
      users: {
        select: {
          name: true,
          image: true
        }
      } 
    }
  })
	/*return db.query(`
  SELECT 
  events.id, events."userId", events.city, events.address,
  events.date, events.hour, events.vacancies, events."isPublic", events.description,
  categories.name AS "categoryName", 
  users.image AS "userProfile",
  users.name AS "userName"
  FROM events 
  JOIN categories ON events."categoryId" = categories.id 
  JOIN users ON users.id = events."userId"
  WHERE "userId" = $1 ORDER BY date;`, [userId]);*/
}