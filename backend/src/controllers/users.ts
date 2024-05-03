import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcryt from "bcryptjs";
import { User } from "../models";

export default {
  //@access Public
  //@route POST /users/register
  async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ message: errors.array() });

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user)
        return res
          .status(400)
          .json({ message: "This user already has an account" });

      user = new User(req.body);
      await user.save();

      // Create auth_token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "prodcution",
        maxAge: 86400000,
      });

      return res.status(200).send({ message: "User registered successfully" });
    } catch (error) {
      console.log("/register", error);
      res
        .status(500)
        .send({ message: "Something went wrong. Please, try again later" });
    }
  },

  //@access Public
  //@route POST /users/sign-in
  async signIn(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ message: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user)
        return res.status(400).json({ message: "Incorrect Credentials" });

      const isMatch = await bcryt.compare(password, user.password);

      if (!isMatch)
        return res.status(400).json({ message: "Incorrect Credentials" });

      // Create auth_token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(200).json({ userId: user._id });
    } catch (error) {
      console.log("/login", error);
      res
        .status(500)
        .send({ message: "Something went wrong. Please, try again later" });
    }
  },

  //@access Private
  //@route POST /users/logout
  signOut(req: Request, res: Response) {
    res.cookie("auth_token", "", {
      expires: new Date(0),
    });
    res.send();
  },

  //@access Private
  //@route GET /auth/validate-token
  async validateToken(req: Request, res: Response) {
    res.status(200).send({ userId: req.userId });
  },
};
