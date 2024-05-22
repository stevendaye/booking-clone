import { HiOutlineLightBulb } from "react-icons/hi";

export const HouseRulesHints = () => {
  return (
    <div className="rounded-lg border-solid border-[1px] w-72 p-5 h-min">
      <div className="flex gap-2">
        <div>
          <HiOutlineLightBulb size={30} />
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="font-bold">What if my house rules change</h5>

          <p className="text-sm">
            You can easily customize these house rules later, and you can set
            additional house rules on the Policies page of the Extranet after
            completing registration.
          </p>
        </div>
      </div>
    </div>
  );
};
