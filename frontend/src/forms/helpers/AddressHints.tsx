import { GoThumbsup } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";

export const AddressHints = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border-solid border-[1px] w-72 p-5">
        <div className="flex gap-2 items-start">
          <div>
            <GoThumbsup size={25} />
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-bold">
              What needs to be included in my address?
            </h5>
            <ul className="text-sm list-item list-disc">
              <div className="hidden">
                <li>
                  Include both your street name and number for the entire
                  property
                </li>
                <li>The floor number in address line 2 if relevant</li>
                <li>
                  Individual apartment or floor numbers can be shared later
                </li>
              </div>

              <li>Provide the zip code</li>
              <li>Spell the street name correctly</li>
              <li>
                Use the physical address of the property, not your office or
                home address
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-solid border-[1px] w-72 p-5">
        <div className="flex gap-2">
          <div>
            <HiOutlineLightBulb size={30} />
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="font-bold">Why do I need to add my address?</h5>

            <p className="text-sm">
              Once a guest books your property, this is the address that will be
              shared with them. It's important that it's correct so guests can
              easily find your property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
