import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
import {
  PiAirplaneInFlightLight,
  PiQuestion,
  PiTaxiLight,
} from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { MdAttractions } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";

import US3XFlag from "../assets/images/US3x.png";
import { useAppContext } from "../hooks/useAppContext";
import { useMutation, useQueryClient } from "react-query";
import routes from "../routes";
import * as apiClient from "../api/apiClient";
import { AccountDropdown } from "./AccountDropdown";

export const Header = () => {
  const { isLoggedIn, showToast } = useAppContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      showToast({
        title: "Success",
        message: "Signed Out!",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate(routes.home);
    },
    onError: (error: Error) => {
      showToast({ title: "Error", message: error.message, type: "ERROR" });
    },
  });

  const onLogout = (menuItem: string) => {
    if (menuItem === "Sign out") mutation.mutate();
  };

  return (
    <div className="bg-main-blue py-3">
      <div className="container w-[1125px] mx-auto flex justify-between items-start">
        <div className="text-white tracking-tight pt-2">
          {/* Main Title + Services */}
          <Link
            to={routes.home}
            className={` ${
              pathname !== routes.register && pathname !== routes.signIn
                ? "text-2xl"
                : " text-[1.2em]"
            } font-bookingBold pl-4`}
          >
            Booking.com
          </Link>
        </div>

        {/* Auth */}
        <div className="flex space-x-2 items-center text-white">
          {pathname !== routes.register && pathname !== routes.signIn && (
            <span className=" pr-4 hover:rounded hover:bg-white/10 px-4 py-3 cursor-pointer">
              XOF
            </span>
          )}

          <span className=" pr-4 hover:rounded hover:bg-white/10 px-4 py-3 cursor-pointer">
            <img
              src={US3XFlag}
              className="rounded-full"
              alt="US Flag"
              width={25}
              height={25}
            />
          </span>

          <Link
            to={routes.customerHelp}
            className=" pr-4 hover:rounded hover:bg-white/10 px-4 py-3"
          >
            <PiQuestion size={25} />
          </Link>

          {isLoggedIn && (
            <button
              id="account-notification"
              className="pr-4 hover:rounded hover:bg-white/10 px-4 py-3"
            >
              <BsBell size={20} />
            </button>
          )}

          <Link
            to={routes.listProperty}
            className=" pr-4 hover:rounded hover:bg-white/10 px-4 py-3"
          >
            List your property
          </Link>

          {pathname !== routes.register && pathname !== routes.signIn && (
            <>
              {isLoggedIn ? (
                <AccountDropdown onClick={onLogout}>
                  <div
                    id="account-dropdown"
                    className="flex justify-center items-center cursor-pointer gap-2 hover:rounded hover:bg-white/10 px-2 pr-3 py-1"
                  >
                    <BiSolidUserCircle size={35} />
                    <div className="flex flex-col">
                      <span className=" font-bold text-sm">Gwen Martina</span>
                      <span className=" text-sm text-yellow-500">
                        Genius Level 1
                      </span>
                    </div>
                  </div>
                </AccountDropdown>
              ) : (
                <>
                  <Link
                    to={routes.register}
                    className="flex items-center text-main-blue px-3 py-2 hover:bg-gray-100 bg-white rounded text-sm "
                  >
                    Register
                  </Link>
                  <Link
                    to={routes.signIn}
                    className="flex items-center text-main-blue px-3 py-2 hover:bg-gray-100 bg-white rounded text-sm"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Booking Servives */}
      {pathname !== routes.register && pathname !== routes.signIn && (
        <div className="flex py-2 gap-1 container w-[1125px] mx-auto text-white">
          <Link
            to={routes.home}
            className={`flex gap-2 text-sm items-center px-4 py-3 ${
              pathname === routes.home &&
              "border-solid border-[1px] border-white rounded-full bg-white/10"
            } hover:rounded-full hover:bg-white/10`}
          >
            <LiaBedSolid size={20} />
            <span>Stays</span>
          </Link>

          <Link
            to={routes.flights}
            className={`flex gap-2 text-sm items-center px-4 py-3 ${
              pathname === routes.flights &&
              "border-solid border-[1px] border-white rounded-full bg-white/10"
            } hover:rounded-full hover:bg-white/10`}
          >
            <PiAirplaneInFlightLight size={20} />
            <span>Flights</span>
          </Link>

          <Link
            to={routes.carRentals}
            className={`flex gap-2 text-sm items-center px-4 py-3 ${
              pathname === routes.carRentals &&
              "border-solid border-[1px] border-white rounded-full bg-white/10"
            } hover:rounded-full hover:bg-white/10`}
          >
            <IoCarOutline size={20} />
            <span>Car Rentals</span>
          </Link>

          <Link
            to={routes.attractions}
            className={`flex gap-2 text-sm items-center px-4 py-3 ${
              pathname === routes.attractions &&
              "border-solid border-[1px] border-white rounded-full bg-white/10"
            } hover:rounded-full hover:bg-white/10`}
          >
            <MdAttractions size={20} />
            <span>Atrractions</span>
          </Link>

          <Link
            to={routes.taxi}
            className={`flex gap-2 text-sm items-center px-4 py-3 ${
              pathname === routes.taxi &&
              "border-solid border-[1px] border-white rounded-full bg-white/10"
            } hover:rounded-full hover:bg-white/10`}
          >
            <PiTaxiLight size={20} />
            <span>Airport Taxi</span>
          </Link>
        </div>
      )}
    </div>
  );
};
