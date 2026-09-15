export async function up(queryInterface) {
  await queryInterface.bulkInsert("Posts", [
    {
      title: "My First Post",
      content: "This is my first post.",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Learning Sequelize",
      content: "I am learning Sequelize with MySQL.",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "React Project",
      content: "I am building a React project.",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("Posts", null, {});
}