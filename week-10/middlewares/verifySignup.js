import db from '../models/index.js';

const { User } = db;

const checkDuplicateEmail = async (req, res, next) => {
  const existingUser = await User.findOne({ where: { email: req.body.email } });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use!' });
  }
  next();
};

export default checkDuplicateEmail;