export async function up(queryInterface) {
  await queryInterface.bulkInsert("Users", [
    {
      name: "Ikram Ullah",
      email: "ikram@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Ahmed Khan",
      email: "ahmed@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Ali Raza",
      email: "ali@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("Users", null, {});
}