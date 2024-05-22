import React from "react";

export const CardGrid = ({
  children,
  initStep,
}: {
  children: React.ReactNode;
  initStep?: boolean;
}) => {
  return (
    <div
      className={`grid ${
        initStep ? "grid-cols-4 gap-10" : "grid-cols-3 gap-5"
      }`}
    >
      {children}
    </div>
  );
};
