import { useFormContext } from "react-hook-form";
import { times } from "../../config/checkInOut";
import { HotelFormData } from "./ManageHotelForm";
import { HouseRulesHints } from "../helpers";

export const HouseRules = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <>
      <h2 className="text-3xl mb-7 font-bold">Guest & House Rules</h2>

      <div className="flex gap-4">
        <div className="w-[600px] flex flex-col border-solid border-[1px] p-4 text-sm gap-6 mb-6">
          <h3 className="text-lg font-bold">
            What are your check-in and check-out?
          </h3>

          {/* Check-in & Check-out */}
          <div className="flex flex-col gap-2 text-sm">
            <div className="mb-4">
              <p className=" font-bold mb-3">Check-in</p>

              <div className="flex gap-4">
                <label htmlFor="checkinFrom" className="flex flex-col flex-1">
                  <p className="mb-2">From</p>
                  <select
                    id="checkinFrom"
                    className="w-full p-2 bg-white border-solid border-[1px] rounded"
                    {...register("checkinFrom", {
                      required:
                        "It is important to know from which time your guests can check in.",
                    })}
                  >
                    {times.map((time, idx) => (
                      <option key={`time-${idx}`}>{time}</option>
                    ))}
                  </select>
                  {errors.checkinFrom && (
                    <span className="text-red-500 text-sm">
                      {errors.checkinFrom.message}
                    </span>
                  )}
                </label>

                <label htmlFor="checkinUntill" className="flex flex-col flex-1">
                  <p className="mb-2">Until</p>
                  <select
                    id="checkinUntill"
                    className="w-full p-2 bg-white border-solid border-[1px] rounded"
                    {...register("checkinUntill", {
                      required:
                        "It is important to know untill which time your guests can check in.",
                    })}
                  >
                    {times.map((time, idx) => (
                      <option key={`time-${idx}`}>{time}</option>
                    ))}
                  </select>
                  {errors.checkinUntill && (
                    <span className="text-red-500 text-sm">
                      {errors.checkinUntill.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-1">
              <p className="font-bold mb-3">Check-out</p>

              <div className="flex gap-4">
                <label htmlFor="checkoutFrom" className="flex flex-col flex-1">
                  <span className="font mb-2">From</span>
                  <select
                    id="checkoutFrom"
                    className="w-full p-2 bg-white border-solid border-[1px] rounded"
                    {...register("checkoutFrom", {
                      required:
                        "It is important to know from which time your guests can check out.",
                    })}
                  >
                    {times.map((time, idx) => (
                      <option key={`time-${idx}`}>{time}</option>
                    ))}
                  </select>
                  {errors.checkoutFrom && (
                    <span className="text-red-500 text-sm">
                      {errors.checkoutFrom.message}
                    </span>
                  )}
                </label>

                <label
                  htmlFor="checkoutUntill"
                  className="flex flex-col flex-1"
                >
                  <span className="mb-2">Until</span>
                  <select
                    id="checkoutUntill"
                    className="w-full p-2 bg-white border-solid border-[1px] rounded"
                    {...register("checkoutUntill", {
                      required:
                        "It is important to know untill which time your guests can check out.",
                    })}
                  >
                    {times.map((time, idx) => (
                      <option key={`time-${idx}`}>{time}</option>
                    ))}
                  </select>
                  {errors.checkoutUntill && (
                    <span className="text-red-500 text-sm">
                      {errors.checkoutUntill.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Allowed Pets & Children */}
          <div className="mt-0">
            <div className="flex flex-col">
              <p className="font-bold" id="allowChildren">
                Do you allow children?
              </p>

              <label htmlFor="allowChildrenYes" className="flex gap-2">
                <input
                  type="radio"
                  id="allowChildrenYes"
                  value="Yes"
                  {...register("allowChildren", {
                    required:
                      "Your guests need to know if you allow children into your property.",
                  })}
                />
                <span>Yes</span>
              </label>

              <label htmlFor="allowChildrenNo" className="flex gap-2">
                <input
                  type="radio"
                  id="allowChildrenNo"
                  value="No"
                  {...register("allowChildren", {
                    required:
                      "Your guests need to know if you allow children into your property.",
                  })}
                />
                <span>No</span>
              </label>
              {errors.allowChildren && (
                <span className="text-red-500 text-sm">
                  {errors.allowChildren.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <p className="font-bold" id="allowPets">
                Do you allow pets?
              </p>

              <label htmlFor="allowPetsYes" className="flex gap-2">
                <input
                  type="radio"
                  id="allowPetsYes"
                  value="Yes"
                  {...register("allowPets", {
                    required:
                      "Your guests need to know if you allow pets into your property.",
                  })}
                />
                <span>Yes</span>
              </label>

              <label htmlFor="allowPetsNo" className="flex gap-2">
                <input
                  type="radio"
                  id="allowPetsNo"
                  value="No"
                  {...register("allowPets", {
                    required:
                      "Your guests need to know if you allow pets into your property.",
                  })}
                />
                <span>No</span>
              </label>

              <label htmlFor="allowPetsRequest" className="flex gap-2">
                <input
                  type="radio"
                  id="allowPetsRequest"
                  value="On Request"
                  {...register("allowPets", {
                    required:
                      "Your guests need to know if you allow pets into your property.",
                  })}
                />
                <span>Upon Request</span>
              </label>
            </div>
            {errors.allowPets && (
              <span className="text-red-500 text-sm">
                {errors.allowPets.message}
              </span>
            )}
          </div>

          {/* Guests */}
          <h3 className="text-lg font-bold">
            How many guests do you take in this property?
          </h3>
          <div className="flex gap-4 mt-[-15px] mb-3">
            <div className="flex flex-col">
              <label htmlFor="adultCount">
                <span>Adults</span>
                <input
                  type="number"
                  id="adultCount"
                  min={1}
                  className="w-full p-2 bg-white border-solid border-[1px] rounded"
                  {...register("adultCount", {
                    required:
                      "Your guests need to know how many adults your property can contain.",
                  })}
                />
                {errors.adultCount && (
                  <span className="text-red-500 text-sm">
                    {errors.adultCount.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex flex-col">
              <label htmlFor="childCount">
                <span>Children</span>
                <input
                  type="number"
                  id="childCount"
                  min={0}
                  className="w-full p-2 bg-white border-solid border-[1px] rounded"
                  {...register("childCount", {
                    required:
                      "Your guests need to know how many children your property can contain",
                  })}
                />
                {errors.childCount && (
                  <span className="text-red-500 text-sm">
                    {errors.childCount.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>

        <HouseRulesHints />
      </div>
    </>
  );
};
