import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotelOptions";
import { useAppContext } from "../../hooks/useAppContext";
import { HotelFormData } from "./ManageHotelForm";
import { FacilitiesHints } from "../helpers";

export const FacilitiesForm = () => {
  const {
    property: { propertyName },
  } = useAppContext();
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">
        What can guests use at your {propertyName}?
      </h2>

      <div className="flex gap-4">
        <div className="w-[600px] flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
          <div className="flex flex-col gap-2 text-sm">
            {hotelFacilities.map((facility, idx) => (
              <label
                htmlFor={`facility${idx}`}
                key={idx}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={`facility${idx}`}
                  value={facility}
                  {...register("facilities", {
                    validate(facilities) {
                      if (facilities && facilities.length > 0) {
                        return true;
                      }
                      return "It is reuquired that you choose at least one facility";
                    },
                  })}
                />
                <span>{facility}</span>
              </label>
            ))}
          </div>
          {errors.facilities && (
            <span className="text-red-500 text-sm">
              {errors.facilities.message}
            </span>
          )}
        </div>

        <FacilitiesHints />
      </div>
    </>
  );
};
