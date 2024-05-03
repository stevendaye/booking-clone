import express, { Express } from "express";
import { check } from "express-validator";
import config from "../config/index.json";
import { user } from "../controllers";

const router = express.Router();

const usersRoutes = (app: Express) => {
  router.post(
    config.routes.user.register,
    [
      check("firstName", "Firstname is required").not().isEmpty(),
      check("lastName", "Lastname is required").not().isEmpty(),
      check("email", "Email with valid address required").isEmail(),
      check("password", "Password with 6 or more characters required").isLength(
        { min: 6 }
      ),
    ],
    user.register
  );

  router.post(
    config.routes.user.signIn,
    [
      check("email", "Email with valid address is required").isEmail(),
      check("password", "Password with 6 or more characters required").isLength(
        { min: 6 }
      ),
    ],
    user.signIn
  );

  router.post(config.routes.user.signOut, user.signOut);

  app.use(config.routes.api, router);
};

export default usersRoutes;
