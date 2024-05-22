import React, { createContext, useMemo, useState } from "react";
import { Toast } from "../components";
import { useQuery } from "react-query";
import * as apiClient from "../api/apiClient";

type ToastMessage = {
  title: string;
  message: string;
  type: "SUCCESS" | "ERROR";
};

type ListingProperty = {
  propertyId: number | null;
  propertyName: string | null;
  propertyCountId: number;
  propertyDescription: string;
};

export type AppContextProps = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;

  selectedProperty: string;
  setSelectedProperty: (val: string) => void;
  listingStepper: number;
  setListingStepper: (val: number) => void;
  property: ListingProperty;
  setProperty: (val: ListingProperty) => void;
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

  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const [listingStepper, setListingStepper] = useState<number>(0);
  const [property, setProperty] = useState<ListingProperty>({
    propertyId: null,
    propertyName: null,
    propertyCountId: 0,
    propertyDescription: "",
  });

  const contextValue = useMemo(
    () => ({
      showToast: (toastMessage: ToastMessage) => setToast(toastMessage),
      isAuthenticated: !isError || false,
      selectedProperty,
      setSelectedProperty,
      listingStepper,
      setListingStepper,
      property,
      setProperty,
    }),
    [isError, listingStepper, property, selectedProperty]
  );

  return (
    <AppContext.Provider value={contextValue}>
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
