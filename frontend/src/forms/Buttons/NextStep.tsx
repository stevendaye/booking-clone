import { useAppContext } from "../../hooks/useAppContext";

export const NextStep = ({
  progress,
  cssPaddingY,
}: {
  progress?: boolean;
  cssPaddingY?: string;
}) => {
  const { listingStepper, setListingStepper } = useAppContext();

  return (
    <button
      className={`${
        !progress
          ? "bg-light-blue text-white hover:bg-main-blue"
          : "bg-main-gray text-slate-400"
      }   text-center w-full rounded flex-1 ${cssPaddingY} `}
      onClick={() => setListingStepper(listingStepper + 1)}
      disabled={progress}
    >
      Continue
    </button>
  );
};
