import React from "react";
import { useAppContext } from "../hooks/useAppContext";

export const Hero: React.FC = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-main-blue pb-20 pt-11">
      <div className=" container w-[1125px] mx-auto flex flex-col gap-2">
        <h1 className=" text-5xl text-white font-bookingExtraBold">
          {isLoggedIn ? "Where to next, Gwen Martina" : "Find your next stay"}
        </h1>
        <p className="text-2xl text-white font-bookingRegular">
          {isLoggedIn
            ? "Find exclusive Genius rewards in every corner of the world!"
            : "Search deals on hotels, homes, and much more..."}
        </p>
      </div>
    </div>
  );
};
