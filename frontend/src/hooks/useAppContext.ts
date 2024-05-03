import { useContext } from "react";
import { AppContext, AppContextProps } from "../contexts/AppContext";

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextProps;
};
