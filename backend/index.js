import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import subscribeRouter from './route/Subscribe.js';

// Load env vars
dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', subscribeRouter);      // All subscribe routes here
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
