import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

type ToastProps = {
  title: string;
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const timeStamp = 5000;

export const Toast = ({ title, message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeStamp);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-[20px] left-[50%] translate-x-[-50%] py-2 px-4 rounded bg-slate-700 text-white max-w-md">
      <div className="flex justify-center items-center gap-3">
        <span className="p-0">
          {type === "SUCCESS" ? (
            <AiFillCheckCircle className=" text-green-500" size={30} />
          ) : (
            <AiFillCloseCircle className=" text-red-500" size={30} />
          )}
        </span>
        <div className="flex flex-col items-start">
          <p className="font-bold text-sm">{title}</p>
          <p className="justify-center items-center text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
