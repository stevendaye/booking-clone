import homeIcon from "../../assets/images/accomm_home.png";
import homeMultipleIcon from "../../assets/images/accomm_multiple.png";
import { NextStep, PrevStep } from "../../forms";
import { MdCheck } from "react-icons/md";
import { useAppContext } from "../../hooks/useAppContext";
import { useEffect } from "react";

export const PropertyTypeCount = () => {
  const { property, setProperty } = useAppContext();

  const countList = [
    {
      id: 1,
      name: property.propertyName,
      description: `One ${property.propertyName} with one or multiple rooms that guests can book`,
      icon: homeIcon,
    },
    {
      id: 2,
      name: property.propertyName,
      description: `Multiple ${property.propertyName}s with one or multiple rooms that guests can book`,
      icon: homeMultipleIcon,
    },
  ];

  useEffect(() => {
    setProperty({
      ...property,
      propertyDescription:
        property.propertyCountId === 1
          ? countList[0].description
          : countList[1].description,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountSelect = (id: number, description: string) => {
    setProperty({
      ...property,
      propertyCountId: id,
      propertyDescription: description,
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    id: number,
    description: string
  ) => {
    if (e.key === "Enter") {
      setProperty({
        ...property,
        propertyCountId: id,
        propertyDescription: description,
      });
    }
  };

  return (
    <div className="mt-7 w-[600px]">
      <h2 className="mb-7 text-3xl front-bold font-bookingBold">
        How many {property.propertyName}s are you listing?
      </h2>

      <div className="border-solid border-[1px] p-7 flex flex-col gap-7">
        {countList.map((count) => (
          <div key={count.id} className="property-type-count">
            <div
              className={`px-4 py-5 border-solid border-[1px] flex gap-5 w-full items-center justify-center relative
            ${
              count.id === property.propertyCountId
                ? "border-[3px] border-blue-600"
                : ""
            }
          `}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, count.id, count.description)}
              onClick={() => handleCountSelect(count.id, count.description)}
            >
              {count.id === property.propertyCountId && (
                <MdCheck
                  size={"20px"}
                  className="text-white bg-light-blue rounded-full p-1 absolute top-[-7px] right-[-7px]"
                />
              )}
              <div className={` ${count.id === 1 ? "w-[60px]" : "w-[70px]"}`}>
                <img
                  src={count.icon}
                  className="flex-1 object-cover w-full"
                  alt="Home Icon"
                />
              </div>
              <p className="text-sm">{count.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-10">
        <PrevStep cssWidth="w-32" />
        <NextStep progress={!property.propertyCountId} />
      </div>
    </div>
  );
};
