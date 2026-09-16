import bcrypt from 'bcryptjs';

export const up = async (queryInterface) => {
  const hashedPassword = bcrypt.hashSync('password123', 8);

  await queryInterface.bulkInsert('Users', [
    {
      username: 'ali',
      email: 'ali@test.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'sara',
      email: 'sara@test.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Users', null, {});
};