import { IoIosArrowBack } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext";

export const PrevStep = ({
  text,
  cssWidth,
}: {
  text?: string;
  cssWidth: string;
}) => {
  const { listingStepper, setListingStepper, setSelectedProperty } =
    useAppContext();

  const handleGoBackward = () => {
    setSelectedProperty("");
    if (text) return setListingStepper(0);
    setListingStepper(listingStepper - 1);
  };

  return (
    <button
      className={`border-solid border-[1.5px] border-light-blue p-4 rounded ${cssWidth}
          flex flex-col items-center hover:bg-light-blue/10 text-light-blue`}
      onClick={handleGoBackward}
    >
      {text ?? <IoIosArrowBack className="text-light-blue" />}
    </button>
  );
};
