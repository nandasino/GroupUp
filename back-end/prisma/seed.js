import prisma from "../src/database/db.js";

async function main() {
  await prisma.categories.createMany({
    data: [
      {
        "name": "Vôlei de praia"
      },
      {
        "name": "Vôlei de quadra"
      },
      {
        "name": "Futebol"
      },
      {
        "name": "Futsal"
      },
      {
        "name": "Basquete"
      },
      {
        "name": "Handebol"
      },
    ]
  })
}

main()
  .then(() =>{
    console.log("Registro feito com sucesso!");
  })
  .catch(e =>{
    console.error(e);
    process.exit(1);
  })
  .finally(async() =>{
    await prisma.$disconnect();
  })