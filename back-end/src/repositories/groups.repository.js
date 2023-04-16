import prisma from "../database/db.js";

export async function getEventById({ idEvent }) {
  return prisma.events.findFirst({
    where: {
      id: idEvent
    }
  })
	/*return db.query(`
  SELECT * FROM events WHERE "id" = $1
  ;`, [eventId]);*/
}
export async function getGroupByUserAndEventId({ idEvent, userId }) {
  return prisma.groups.findFirst({
    where: {
      eventId: idEvent,
      userId: userId
    }
  })
	/*return db.query(`
  SELECT * FROM groups WHERE "eventId" = $1 AND "userId" = $2
  ;`, [eventId, userId]);*/
}

export async function createGroup({ idEvent, userId}) {
  return prisma.groups.create({
    data: {
      eventId: idEvent,
      userId: userId
    }
  })
	/*return db.query(`INSERT INTO groups ("eventId", "userId") VALUES ($1, $2);`,
  [eventId, userId]);*/
}

/*export async function deleteGroupByUserAndEventId({ idEvent, userId }) {
  return prisma.groups.delete({
    where: {
      eventId:idEvent,
      userId:userId
    }
  })
	/*return db.query(`DELETE FROM groups WHERE "eventId" = $1 AND "userId" = $2;`,
  [eventId, userId]);
}*/

export async function deleteGroup({groupId}) {
  return prisma.groups.delete({
    where: {
      id: groupId
    }
  })
}

export async function getGroups({ idEvent }) {
  return prisma.groups.findMany({
    where: {
      eventId: idEvent
    },
    select: {
      id:true,
      eventId:true,
      userId:true,
      users: {
        select: {
          name: true,
          image: true
        },
      }
    }
  })
	/*return db.query(`
  SELECT
  groups.id, groups."eventId", groups."userId",
  users.name AS "userName",
  users.image AS image  
  FROM groups
  JOIN users ON users.id = groups."userId"
  WHERE "eventId" = $1
  ;`, [eventId]);*/
}


export async function getGroupsByUserId({ userId }) {
  return prisma.groups.findMany({
    where: {
      userId:userId
    },
    select: {
      id:true,
      eventId:true,
      userId:true,
      events: {
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
              name:true
            }
          },
          users: {
            select: {
              name: true,
              image: true
            }
          }
        }
      }
    }
  })
	/*return db.query(`
  SELECT
  groups.id, groups."eventId",
  events.id, events.city, events.address,
  events.date, events.hour, events.vacancies, events."isPublic", events.description,
  categories.name AS "categoryName", 
  users.image AS "userProfile",
  users.name AS "userName"
  FROM groups
  JOIN events ON events.id = groups."eventId"
  JOIN categories ON events."categoryId" = categories.id 
  JOIN users ON users.id = events."userId"
  WHERE groups."userId" = $1
  ;`, [userId]);*/
}