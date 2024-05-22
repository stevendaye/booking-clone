import mongoose from "mongoose";

export type HotelType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  zip: string;
  description: string;
  type: string;
  adultcount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imagesUrls: string[];
  checkinFrom: string;
  checkinUntill: string;
  checkoutFrom: string;
  checkoutUntill: string;
  allowChildren: string;
  allowPets: string;
  lastUpdated: Date;
};

const HotelSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  addressLine1: { type: String, require: true },
  addressLine2: { type: String, requir: false },
  zip: { type: String, require: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  facilities: [{ type: String, required: true }],
  pricePerNight: { type: Number, required: true },
  starRating: { type: Number, required: true, min: 1, max: 5 },
  imagesUrls: [{ type: String, required: true }],
  checkinFrom: { type: String, require: true },
  checkinUntill: { type: String, require: true },
  checkoutFrom: { type: String, require: true },
  checkoutUntill: { type: String, require: true },
  allowChildren: { type: String, require: true },
  allowPets: { type: String, require: true },
  lastUpdated: { type: Date, required: true },
});

const Hotel = mongoose.model<HotelType>("Hotel", HotelSchema);

export default Hotel;
