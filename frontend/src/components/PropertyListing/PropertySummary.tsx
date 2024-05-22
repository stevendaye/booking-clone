import Property from "../../assets/images/accomm_hotels.png";
import { NextStep, PrevStep } from "../../forms";
import { useAppContext } from "../../hooks/useAppContext";

export const PropertySummary = () => {
  const {
    property: { propertyDescription },
  } = useAppContext();

  return (
    <div className="border-solid border-[1px] flex flex-col justify-center items-center w-[600px] py-4 px-6">
      <h3 className="mt-7 mb-7">You're listing:</h3>
      <div className="w-[75px] h-[75px]">
        <img src={Property} className=" object-cover" alt="Property Icon" />
      </div>

      <p className="mt-12 mb-15 font-bold text-xl text-center w-[24rem]">
        {propertyDescription}
      </p>

      <p className="text-sm mt-24">Does this sound like your property?</p>

      <div className="flex flex-col gap-2 mt-10 w-full">
        <NextStep cssPaddingY="py-4" />
        <PrevStep text="No, I need to make a change" cssWidth="w-full" />
      </div>
    </div>
  );
};
