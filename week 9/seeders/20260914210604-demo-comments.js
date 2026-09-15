export async function up(queryInterface) {
  await queryInterface.bulkInsert("Comments", [
    {
      comment: "Very nice post!",
      postId: 1,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      comment: "Good work!",
      postId: 1,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      comment: "Sequelize is easy to learn.",
      postId: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("Comments", null, {});
}