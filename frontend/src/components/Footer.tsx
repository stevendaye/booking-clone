import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import { FooterLinks } from "./FooterLinks";

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [value, setValue] = useState<string>("");

  return (
    <>
      <div className="bg-secondary-blue py-12 font-bookingRegular">
        <div className="container w-[1125px] mx-auto flex flex-col font-bookingRegular justify-center items-center text-center">
          <p className=" text-white text-2xl">Stay in the know</p>
          <p className=" text-main-gray py-2">
            Sign up to get marketing emails from Booking.com, including
            promotions, rewards, travel experiences, and information about
            Booking.com and Booking.com Transport Limited's products and
            services.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-1 pt-5 pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="text-secondary-gray py-3 px-3 w-[375px] text-xl rounded"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <button
              type="submit"
              className="py-3 px-4 bg-light-blue rounded w-40 text-xl text-white"
            >
              Subscribe
            </button>
          </form>
          <p className="text-main-gray text-sm">
            You can opt out anytime.
            <Link to={routes.privacy} className=" text-light-blue underline">
              See our privacy statement.
            </Link>
          </p>
        </div>
      </div>

      <div className=" bg-main-blue py-4 flex flex-col items-center">
        <Link
          to={routes.listProperty}
          className="border-solid  text-xs border-[1px] border-white py-2 px-3 text-white rounded hover:rounded hover:bg-white/10"
        >
          List your property
        </Link>
      </div>

      <div className="bg-main-blue text-white border-solid border-[1px] border-white">
        <div className="container w-[1125px] mx-auto flex flex-col items-center">
          <ul className="mx-auto list-none gap-2 flex">
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.mobileVersion}>Mobile Version</Link>
            </li>
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.account}>Your Account</Link>
            </li>
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.makeChanges}>
                Make changes online for your booking
              </Link>
            </li>
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.customerHelp}>Customer Service Help</Link>
            </li>
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.affiliateProgram}>Become a affiliate</Link>
            </li>
            <li className="py-4 pr-4 pl-3 text-xs font-bold underline border-solid border-r-[1px] border-secondary-blue">
              <Link to={routes.bookingForBusiness}>
                Booking.com for Business
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <FooterLinks />

      <div className="flex flex-col gap-4 items-center py-10 text-xs">
        <p>Copyright &copy; 1996-2024 Booking.com™. All rights reserved.</p>
        <p> Cloned with ❤️ by Steven Audrey Daye</p>
        <p className="text-secondary-gray">
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services
        </p>
      </div>
    </>
  );
};
