import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import { authRoutes, usersRoutes } from "./routes";
import path from "path";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

usersRoutes(app);
authRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
