import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import authRoutes from "./routes/routes.js"
import cors from "cors";


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);

//test
app.get("/", async (req, res) => {
  try {
    res.json({ message: "server has started" });
  } catch (err) {
    res.status(500).json({ error: "some error occured" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});