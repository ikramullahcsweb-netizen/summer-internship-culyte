import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';   // ← naya import

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', userRoutes);  

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));