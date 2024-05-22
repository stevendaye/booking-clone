import { Request, Response } from "express";
import cloudinary from "cloudinary";
import Hotel, { HotelType } from "../models/hotel";

export default {
  //@access Private
  //@route /my-hotels/create
  async create(req: Request, res: Response) {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHotel: HotelType = req.body;

      // Upload to Cloudinary
      const uploadPromises = imageFiles.map(async (image) => {
        const base64 = Buffer.from(image.buffer).toString("base64");
        const dataURI = `data:${image.mimetype};base64,${base64}`;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });

      const imagesUrls = await Promise.all(uploadPromises);
      newHotel.imagesUrls = imagesUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      const hotel = new Hotel(newHotel);
      await hotel.save();

      res.status(201).send(hotel);
    } catch (error) {
      console.log("error:", error);
      res.status(500).json({
        message:
          "Something went wrong while creating your hotel. Try again later",
      });
    }
  },
};
