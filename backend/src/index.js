import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import connectDB from './config/connect.js';
import authRoutes from './routes/auth.routes.js';
import profileRoute from "./routes/profile.routes.js"
import noteRoutes from "./routes/notes.routes.js";
import morgan from 'morgan';
import multer from 'multer';
import dns from "node:dns/promises";
import cors from "cors"
dns.setServers(["1.1.1.1"]);

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectDB();
app.use(morgan("dev"));
// const upload = multer({ storage: multer.memoryStorage() });
// app.use(upload.single("file"));

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
  res.status(200).json({message:"server is up"})
})

app.use("/auth", authRoutes);
app.use("/profile", profileRoute);
app.use("/note", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});