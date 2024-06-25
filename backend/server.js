import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server Running On PORT ${PORT}`);
});