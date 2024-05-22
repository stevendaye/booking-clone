import React, { useState } from "react";
import countries from "./countries.json";
import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotel/ManageHotelForm";

type CountryType = {
  code: string;
  name: string;
};

export const CountrySelector = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const [country, setCountry] = useState<string>("");

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="" htmlFor="country">
        <span className="font-bold">Country/region</span>{" "}
        <span className=" text-red-600">*</span>
        <select
          id="country"
          value={country}
          className="w-full p-2 bg-white border-solid border-[1px] rounded"
          {...register("country", {
            required: "The country where the propoerty is located is needed.",
          })}
          onChange={handleCountrySelect}
        >
          <option value="">Select your country</option>
          {countries.map((country: CountryType) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
      {errors.country && (
        <span className="text-red-500 text-sm">{errors.country.message}</span>
      )}
    </div>
  );
};
