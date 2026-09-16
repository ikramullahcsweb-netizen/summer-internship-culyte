import express from 'express';
import db from '../models/index.js';
import verifyToken from '../middlewares/authJwt.js';

const { Product } = db;
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/products/secure', verifyToken, async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;