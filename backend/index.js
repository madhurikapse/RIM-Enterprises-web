import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path"; // For path joining

import subscribeRoutes from "./route/Subscribe.js";

// Load environment variables at the top
dotenv.config();


// Initialize Express app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000"], // Adjust the origin for production
}));
app.use(express.json());

// Route for basic test
app.get("/", (req, res) => {
  res.send("working.");
});

app.use("/api/v1", subscribeRoutes);



// Serve static assets (adjust path for ES6)
const __dirname = path.resolve();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."))
  .catch((err) => {
    console.error("DB connection error:", err); // Log any DB connection issues
    process.exit(1); // Exit the process if DB connection fails
  });

// Generic error handler (for unhandled errors)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err); // Log the error
  res.status(500).send({ error: 'Internal server error' }); // Return a 500 error for unhandled errors
});

// Start server
app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});