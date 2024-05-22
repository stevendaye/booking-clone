import { useMutation } from "react-query";
import * as apiClient from "../../api/apiClient";
import { ManageHotelForm } from "./ManageHotelForm";
import { useAppContext } from "../../hooks";

const AddHotel = () => {
  const { setListingStepper } = useAppContext();
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.createHotel, {
    onSuccess() {
      showToast({
        title: "Success",
        message: "New property added successfully",
        type: "SUCCESS",
      });
      setListingStepper(0);
    },
    onError() {
      showToast({
        title: "Error",
        message: "Error while adding your hotel",
        type: "ERROR",
      });
    },
  });

  const handleSave = (data: FormData) => {
    mutate(data);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
