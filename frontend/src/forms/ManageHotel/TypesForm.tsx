import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotelOptions";
import { HotelFormData } from "./ManageHotelForm";
import { useAppContext } from "../../hooks/useAppContext";

export const TypesForm = () => {
  const {
    property: { propertyName },
  } = useAppContext();

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const watchType = watch("type");

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">
        What kind of {propertyName} are you offering?
      </h2>

      <div className="w-[600px] flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
        <div className="grid grid-cols-4 gap-4">
          {hotelTypes.map((type, idx) => (
            <label
              key={idx}
              htmlFor={`type-${idx}`}
              className={` text-sm rounded-full px-4 py-2 cursor-pointer ${
                watchType === type
                  ? "bg-light-blue/80 font-semibold text-white"
                  : "bg-main-gray"
              }`}
            >
              <input
                type="radio"
                value={type}
                id={`type-${idx}`}
                className="hidden"
                {...register("type", {
                  required: `Please specify the kind of ${propertyName?.toLowerCase()} you are offering`,
                })}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.type && (
          <span className="text-red-500 text-sm">{errors.type.message}</span>
        )}
      </div>
    </>
  );
};
