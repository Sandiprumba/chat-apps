import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/Socket.js";

import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";

const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoutes);

//path.join gives the absolute folder
app.use(express.static(path.join(__dirname, "/frontend/dist")));

//any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server Running On PORT ${PORT}`);
});
