import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { useAppContext } from "../../hooks/useAppContext";

export type BackButtonType = {
  level: number;
  onClickBack: (val: number) => void;
};

export type ContinueButtonType = {
  level: number;
  onContinue: (val: number) => void;
};

export const DescriptionFrom = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const { property } = useAppContext();

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">
        Tell us about your {property.propertyName}
      </h2>

      <div className="w-[600px] flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
        <label htmlFor="name" className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">
            What's the name of your {property.propertyName}
          </h3>

          <p className="font-bold">Property Name</p>
          <input
            type="text"
            id="name"
            placeholder="Start typing your property's name"
            className="w-full p-2 bg-white border-solid border-[1px] rounded"
            {...register("name", {
              required: "Your property's name is required.",
            })}
          />
          <span className=" text-gray-500">
            Guests will see this name when searching for a place to stay.
          </span>
          {errors.name && (
            <span className=" text-red-600">{errors.name.message}</span>
          )}
        </label>

        <label htmlFor="description" className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">
            Give a short description of your {property.propertyName}
          </h3>

          <p className="font-bold">Description</p>
          <textarea
            rows={5}
            id="description"
            placeholder="Start typing your property's description"
            className="w-full p-2 bg-white border-solid border-[1px] rounded"
            {...register("description", {
              required:
                "Short description is required to give your guest an idea.",
            })}
          />
          {errors.description && (
            <span className=" text-red-600">{errors.description.message}</span>
          )}
        </label>

        <label htmlFor="pricePerNight" className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">
            How much do you charge per night in your {property.propertyName}
          </h3>

          <p className="font-bold">Price per night</p>
          <input
            type="number"
            min={1}
            id="pricePerNight"
            placeholder="Start typing your price per night"
            className="w-full p-2 bg-white border-solid border-[1px] rounded"
            {...register("pricePerNight", {
              required: "Your guests need to know the base price per night.",
            })}
          />
          {errors.pricePerNight && (
            <span className=" text-red-600">
              {errors.pricePerNight.message}
            </span>
          )}
        </label>

        <label htmlFor="starRating" className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">
            How would you rate your {property.propertyName}
          </h3>

          <p className="font-bold">Rating</p>
          <select
            id="starRating"
            className="w-full p-2 bg-white border-solid border-[1px] rounded"
            {...register("starRating", {
              required:
                "Tell your guests how much you're staring your property",
            })}
          >
            <option value="">Select your property's rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </label>
        {errors.starRating && (
          <span className=" text-red-600">{errors.starRating.message}</span>
        )}
      </div>
    </>
  );
};
