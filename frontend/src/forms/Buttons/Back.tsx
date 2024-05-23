import { IoIosArrowBack } from "react-icons/io";

export const Back = ({ onClickBack }: { onClickBack: () => void }) => {
  return (
    <button
      type="button"
      id="back"
      className={`border-solid border-[1.5px] border-light-blue py-4 rounded w-32
      items-center hover:bg-light-blue/10 text-light-blue flex flex-col`}
      onClick={onClickBack}
    >
      <IoIosArrowBack className="text-light-blue" />
    </button>
  );
};
