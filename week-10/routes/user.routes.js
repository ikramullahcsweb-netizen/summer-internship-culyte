import express from 'express';
import db from '../models/index.js';

const { User } = db;
const router = express.Router();

// Public route — sab users dikhao (password ke bina)
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'createdAt'], // password chhoṛ do
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;