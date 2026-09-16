import express from 'express';
import authController from '../controllers/auth.controller.js';
import checkDuplicateEmail from '../middlewares/verifySignup.js';

const router = express.Router();

router.post('/signup', checkDuplicateEmail, authController.signup);
router.post('/login', authController.login);

export default router;