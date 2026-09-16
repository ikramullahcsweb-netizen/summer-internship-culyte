export const up = async (queryInterface) => {
  await queryInterface.bulkInsert('Products', [
    { name: 'Keyboard', price: 25.5, stock: 10, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mouse', price: 12.0, stock: 20, createdAt: new Date(), updatedAt: new Date() },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Products', null, {});
};