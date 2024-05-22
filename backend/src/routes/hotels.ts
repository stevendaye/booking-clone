import express, { Express } from "express";
import config from "../config/index.json";
import hotels from "../controllers/hotels";
import { uploadImage, verifyToken } from "../middlewares";
import { body } from "express-validator";

const router = express.Router();

const myHotelsRoutes = (app: Express) => {
  router.post(
    config.routes.hotel.create,
    verifyToken,
    [
      body("name").notEmpty().withMessage("Name is required"),
      body("city").notEmpty().withMessage("City is required"),
      body("country").notEmpty().withMessage("Country is required"),
      body("addressLine1").notEmpty().withMessage("Your address is required"),
      body("zip").notEmpty().withMessage("Zip Code is required"),
      body("description").notEmpty().withMessage("Description is required"),
      body("type").notEmpty().withMessage("Type is required"),
      body("adultCount")
        .notEmpty()
        .isNumeric()
        .withMessage("You must specify the number of adult expected"),
      body("childCount")
        .notEmpty()
        .isNumeric()
        .withMessage("You must specify the number of children expexted"),
      body("facilities")
        .notEmpty()
        .isArray()
        .withMessage("Facilities are required"),
      body("pricePerNight")
        .notEmpty()
        .isNumeric()
        .withMessage("Price per night is required and must be a number"),
      body("checkinFrom")
        .notEmpty()
        .withMessage("From which time to check in is required"),
      body("checkinUntill")
        .notEmpty()
        .withMessage("Untill which time to check in is required"),
      body("checkoutFrom")
        .notEmpty()
        .withMessage("From which time to check out is required"),
      body("checkoutUntill")
        .notEmpty()
        .withMessage("Untill which time to check out is required"),
      body("allowChildren")
        .notEmpty()
        .withMessage("Allow children field is required"),
      body("allowPets").notEmpty().withMessage("Allow pets field is required"),
    ],
    uploadImage.array("imageFiles", 15),
    hotels.create
  );

  app.use(config.routes.api, router);
};

export default myHotelsRoutes;
