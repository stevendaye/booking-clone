import { PropertiesType } from "./Categories";
import { useAppContext } from "../../hooks/useAppContext";
import { useEffect } from "react";
import { MdCheck } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

export const Card = ({
  property,
  initStep,
  isSelected,
  onSelect,
}: {
  property: PropertiesType;
  initStep?: boolean;
  isSelected?: boolean;
  onSelect?: (val1: number, val2: string) => void;
}) => {
  const { setListingStepper, selectedProperty, setSelectedProperty } =
    useAppContext();

  useEffect(() => {
    selectedProperty === "hotel" && setListingStepper(1);
  }, [selectedProperty, setListingStepper]);

  const handleGoForward = () => {
    setSelectedProperty(property.type);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    cardId: number,
    cardName: string
  ) => {
    if (e.key === "Enter") {
      onSelect?.(cardId, cardName);
    }
  };

  return (
    <div
      className={`card relative flex flex-col p-5
        border-solid border-[1px] cursor-pointer
        ${
          !initStep
            ? "rounded-md w-full"
            : "justify-center items-center w-[275px]"
        }
        ${!initStep && isSelected && "border-[3px] border-blue-600"}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e, property.id, property.name)}
      onClick={() => onSelect?.(property.id, property.name)}
    >
      {initStep && property.id === 3 && (
        <div
          className="text-xs text-white absolute top-[-10px] left-[75px] 
        bg-green-700 p-1 rounded text-center w-[42%] flex items-center justify-center gap-1"
        >
          <span className="flex gap-0 items-center justify-center">
            <HiMenuAlt3 size={15} />
            <MdCheck
              size={15}
              fontWeight={"bold"}
              className="border-solid border-[1.5px] rounded-full p-[0.5px]"
            />
          </span>
          <span>Quick start</span>
        </div>
      )}

      {!initStep && isSelected && (
        <MdCheck
          size={"20px"}
          className="text-white bg-light-blue rounded-full p-1 absolute top-[-7px] right-[-7px]"
        />
      )}
      {property.icon && (
        <div className="flex-1 mb-5">
          <img
            src={property.icon}
            alt={`${property.type}'s icon`}
            width="50px"
            height="50px"
          />
        </div>
      )}
      <h2 className="font-bold flex-1 mb-5">{property.name}</h2>
      <div
        className={`w-full text-xs mb-10 flex-1 ${initStep && "text-center"}`}
      >
        {property.description}
      </div>
      {initStep && (
        <button
          className={`${
            property.inactive
              ? "bg-main-gray text-gray-600/30"
              : "bg-light-blue text-white"
          } text-sm py-2 px-4 rounded cursor-pointer hover:${
            !property.inactive && "bg-main-blue"
          }`}
          disabled={property.inactive}
          onClick={handleGoForward}
        >
          List your property
        </button>
      )}
    </div>
  );
};
