import React, { createContext, useState } from "react";
import { Toast } from "../components";
import { useQuery } from "react-query";
import * as apiClient from "../api/apiClient";

type ToastMessage = {
  title: string;
  message: string;
  type: "SUCCESS" | "ERROR";
};

export type AppContextProps = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => setToast(toastMessage),
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};
