import prisma from "../database/db.js";

export async function updateUserCity({ city,userId }) {
  return prisma.users.update({
    where: { id: userId },
    data: { city: city }
  })
	//return db.query("UPDATE users SET city = $1 WHERE id = $2;",[city, userId]);
}

export async function getUserByName({ name }) {
  return prisma.users.findFirst({
    where: {
      name: name
    }
  })
	//return db.query(`SELECT * FROM users WHERE name = $1;`, [name]);
}

export async function getUserByEmail({ email }) {
  return prisma.users.findFirst({
    where: {
      email: email
    }
  })
}

export async function getUserInfo({ idNumber }) {
  return prisma.users.findFirst({
    where: {
      id: idNumber
    },
    select: {
      name:true,
      image:true
    }
  })
}
