import { HiOutlineLightBulb } from "react-icons/hi";

export const FacilitiesHints = () => {
  return (
    <div className="rounded-lg border-solid border-[1px] w-72 p-5 h-min">
      <div className="flex gap-2">
        <div>
          <HiOutlineLightBulb size={30} />
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="font-bold">What if I don't see a facility I offer?</h5>

          <p className="text-sm">
            The facilities listed here are the ones guests search for most.
            After you complete your registration, you can add more facilities
            from a larger list on the Extranet, the platform you'll use to
            manage your property.
          </p>
        </div>
      </div>
    </div>
  );
};
