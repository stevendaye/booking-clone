export const Submit = ({
  text,
  isLoading,
}: {
  text: string;
  isLoading: boolean;
}) => {
  return (
    <button
      disabled={isLoading}
      className={`w-full text-center py-4 rounded font-bold flex-1 ${
        isLoading
          ? "bg-main-gray text-gray-600/50"
          : "bg-light-blue text-white hover:bg-main-blue"
      } ${!isLoading && "hover:bg-main-blue"} `}
    >
      {text}
    </button>
  );
};
