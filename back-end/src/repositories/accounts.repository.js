import prisma from "../database/db.js";

export async function createUser({ name, email, hiddenPassword, image }) {
  return prisma.users.create({
    data: {
      name: name,
      email: email,
      password: hiddenPassword,
      image: image
    }
  })
	//return db.query(`INSERT INTO users (name, email, password, image) VALUES ($1, $2, $3, $4);`,[name, email, hiddenPassword, image]);
}

export async function createSession({ id, token }) {
  return prisma.sessions.create({
    data: {
      userId: id,
      token: token
    }
  })
	//return db.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2);', [id, token]);
}

export async function getUserByEmail({ email }) {
  return prisma.users.findFirst({
    where: {
      email: email
    }
  })
	//return db.query("SELECT * FROM  users WHERE email = $1", [email]);
}
export async function getUser({ dataId }) {
  return prisma.users.findUnique({
    where: {
      id: dataId
    }
  })
}
