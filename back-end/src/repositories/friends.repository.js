import prisma from "../database/db.js";

export async function getFriendsByFriendId({ userId }) {
  return prisma.friends.findMany({
    where: {
      friendId: userId,
      accepted: false
    }
  })
	/*return db.query(`
  SELECT
  friends.id, friends."userId", friends."friendId",
  users.name, users.image
  FROM friends
  JOIN users ON users.id = friends."userId"
  WHERE friends."friendId" = $1 AND friends.accepted = false
  ;`, [userId]);*/
}

export async function getFriendById({ id }) {
  return prisma.friends.findUnique({
    where: {
      id
    }
  })
	/*return db.query(`
  SELECT * FROM friends WHERE id = $1;`, [requestId]);*/
}


export async function updateFriendsById({ id }) {
  return prisma.friends.update({
    where: {
      id
    },
    data: {
      accepted: true
    }
  })
	/*return db.query(`UPDATE friends SET accepted = true WHERE id = $1;
  `,[requestId]);*/
}

export async function getFriendByFriendId({ userId, idFriend }) {
	/*return db.query(`
  SELECT * FROM friends WHERE "userId" = $1 AND "friendId" = $2;`, [userId, friendId]);*/
  return prisma.friends.findFirst({
    where: {
      userId: userId,
      friendId: idFriend
    }
  })
}

export async function getFriendsByUserId({ userId }) {
  return prisma.friends.findMany({
    where: {
      userId: userId,
      accepted: true
    },
    select: {
      id: true,
      userId:true,
      friendId:true,
      accepted:true,
      users: {
        select: {
          name:true,
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
  FROM friends 
  JOIN users ON users.id = friends."friendId"
  JOIN events ON events."userId" = users.id
  JOIN categories ON events."categoryId" = categories.id 
  WHERE friends."userId" = $1 AND friends.accepted = true ORDER BY date;`, [userId]);*/
}

export async function createRequest({ idUser, id }) {
  return prisma.friends.create({
    data: {
      userId: idUser,
      friendId: id
    }
  })
	/*return db.query(`UPDATE friends SET accepted = true WHERE id = $1;
  `,[requestId]);*/
}
