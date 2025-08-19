import express from 'express';
import authRoutes from './routes/auth.ts';
import messageRoutes from './routes/message.ts';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.ts';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server in running on port ${PORT}`);
  connectDB();
});