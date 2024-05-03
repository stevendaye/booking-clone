import express, { Express } from "express";
import config from "../config/index.json";
import { user } from "../controllers";
import { verifyToken } from "../middlewares";

const router = express.Router();

const authRoutes = (app: Express) => {
  router.get(config.routes.auth, verifyToken, user.validateToken);

  app.use(config.routes.api, router);
};

export default authRoutes;
