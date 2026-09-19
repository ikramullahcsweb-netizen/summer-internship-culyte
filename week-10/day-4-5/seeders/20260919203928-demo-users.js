
import bcrypt from "bcryptjs";

export async function up(queryInterface) {
  const hashedPassword = await bcrypt.hash("123456", 10);

  await queryInterface.bulkInsert("users", [
    {
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      accountStatus: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Normal User",
      email: "user@example.com",
      password: hashedPassword,
      role: "user",
      accountStatus: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("users", {
    email: ["admin@example.com", "user@example.com"],
  });
}

