import db from './models/index.js';

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error(' Unable to connect to the database:', error.message);
  } finally {
    process.exit();
  }
};

testConnection();