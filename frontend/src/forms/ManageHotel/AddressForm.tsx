import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { CountrySelector } from "../CountrySelector";
import { HotelFormData } from "./ManageHotelForm";
import { AddressHints } from "../helpers";

export const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const [optionalAddress, setOptionalAddress] = useState<boolean>(false);

  const toggleOptionalAddress = () => {
    setOptionalAddress(!optionalAddress);
  };

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">
        Where is the property you are listing?
      </h2>

      <div className="flex gap-4">
        <div className="w-[600px]">
          <div className="flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
            <CountrySelector />

            <label htmlFor="address-line-1" className="flex flex-col gap-2">
              <p className="font-bold">
                Street address <span className=" text-red-600">*</span>
              </p>
              <input
                type="text"
                id="address-line-1"
                placeholder="Start typing your address"
                className="w-full p-2 bg-white border-solid border-[1px] rounded"
                {...register("addressLine1", {
                  required: "Your property's address is required.",
                })}
              />
              {errors.addressLine1 && (
                <span className=" text-red-600">
                  {errors.addressLine1.message}
                </span>
              )}
            </label>

            {!optionalAddress && (
              <button
                className="text-left text-light-blue bg-transparent"
                onClick={toggleOptionalAddress}
              >
                Add appartment of floor number (optional)
              </button>
            )}

            {optionalAddress && (
              <label htmlFor="address-line-2" className="flex flex-col gap-2">
                <p className="flex gap-1 font-bold">
                  Apartment or floor number (optional){" "}
                  <button
                    className="bg-transparent text-light-blue hover:underline"
                    onClick={toggleOptionalAddress}
                  >
                    Remove
                  </button>
                </p>

                <input
                  type="text"
                  id="address-line-2"
                  placeholder="Appartment, building, floor, etc..."
                  className="w-full p-2 bg-white border-solid border-[1px] rounded"
                  {...register("addressLine2")}
                />

                <div className="flex gap-2 w-full">
                  <div>
                    <BsInfoCircle size={25} className=" text-red-800" />
                  </div>
                  <p className="text-xs">
                    Only enter this if it's required for the address of the
                    entire property. You can provide guests the apartment or
                    floor number before or during check-in.
                  </p>
                </div>
              </label>
            )}

            <label htmlFor="zip" className="flex flex-col gap-2">
              <p className="font-bold">
                Zip code <span className=" text-red-600">*</span>
              </p>
              <input
                type="text"
                id="zip"
                placeholder="Start typing your zip code"
                className="w-full p-2 bg-white border-solid border-[1px] rounded"
                {...register("zip", {
                  required: "Your property's zip code is required.",
                })}
              />
              {errors.zip && (
                <span className=" text-red-600">{errors.zip.message}</span>
              )}
            </label>

            <label htmlFor="city" className="flex flex-col gap-2 mb-7">
              <p className="font-bold">
                City <span className=" text-red-600">*</span>
              </p>
              <input
                type="text"
                id="city"
                placeholder="Start typing your city"
                className="w-full p-2 bg-white border-solid border-[1px] rounded"
                {...register("city", {
                  required:
                    "The city where your property is located is required.",
                })}
              />
              {errors.city && (
                <span className=" text-red-600">{errors.city.message}</span>
              )}
            </label>
          </div>
        </div>

        <AddressHints />
      </div>
    </>
  );
};
