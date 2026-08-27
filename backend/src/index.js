import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connect.js';
import authRoutes from './routes/routes.js';
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use(morgan("dev"));

connectDB();
const PORT = process.env.PORT || 5173;

app.get("/",(req,res)=>{
  res.status(200).json({message:"server is up"})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});