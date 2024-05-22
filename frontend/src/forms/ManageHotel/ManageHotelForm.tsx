import { FormProvider, useForm } from "react-hook-form";
import { AddressForm } from "./AddressForm";
import { useState } from "react";
import { DescriptionFrom } from "./DescriptionFrom";
import { TypesForm } from "./TypesForm";
import { FacilitiesForm } from "./FacilitiesForm";
import { HouseRules } from "./HouseRules";
import { PhotosForm } from "./PhotosForm";
import { Back } from "../Buttons/Back";
import { Submit } from "../Buttons/Submit";
import { convertToFiles } from "../../utils";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  zip: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: (string | ArrayBuffer | null)[];
  adultCount: number;
  childCount: number;
  checkinFrom: string;
  checkinUntill: string;
  checkoutFrom: string;
  checkoutUntill: string;
  allowChildren: string;
  allowPets: string;
};

type MangeHotelProps = {
  onSave: (data: FormData) => void;
  isLoading: boolean;
};

export const ManageHotelForm = ({ onSave, isLoading }: MangeHotelProps) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;
  const [level, setLevel] = useState<number>(0);

  const onClickBack = () => {
    level !== 0 && setLevel(level - 1);
  };

  const addNewHotel = (data: HotelFormData) => {
    const formData = new FormData();
    convertToFiles(data.imageFiles).then((files) => {
      formData.append("name", data.name);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("addressLine1", data.addressLine1);
      formData.append("addressLine2", data.addressLine2);
      formData.append("zip", data.zip);
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("pricePerNight", data.pricePerNight.toString());
      formData.append("starRating", data.starRating.toString());

      data.facilities.forEach((facility, index) => {
        formData.append(`facilities[${index}]`, facility);
      });

      files.forEach((fileImage) => {
        formData.append("imageFiles", fileImage);
      });

      formData.append("adultCount", data.adultCount.toString());
      formData.append("childCount", data.childCount.toString());
      formData.append("checkinFrom", data.checkinFrom.toString());
      formData.append("checkinUntill", data.checkinUntill.toString());
      formData.append("checkoutFrom", data.checkoutFrom.toString());
      formData.append("checkoutUntill", data.checkoutUntill.toString());
      formData.append("allowChildren", data.allowChildren.toString());
      formData.append("allowPets", data.allowPets.toString());
    });

    onSave(formData);
  };

  const goToNextLevel = (data: HotelFormData) => {
    switch (level) {
      case 1:
        setLevel(2);
        break;
      case 2:
        setLevel(3);
        break;
      case 3:
        setLevel(4);
        break;
      case 4:
        setLevel(5);
        break;
      case 5:
        addNewHotel(data);
        break;
      default:
        setLevel(1);
        break;
    }
  };

  const onSubmit = handleSubmit((data: HotelFormData) => {
    goToNextLevel(data);
  });

  let FormComponent;

  switch (level) {
    case 1:
      FormComponent = <DescriptionFrom />;
      break;
    case 2:
      FormComponent = <TypesForm />;
      break;
    case 3:
      FormComponent = <FacilitiesForm />;
      break;
    case 4:
      FormComponent = <HouseRules />;
      break;
    case 5:
      FormComponent = <PhotosForm />;
      break;
    default:
      FormComponent = <AddressForm />;
      break;
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        {FormComponent}

        <div className="w-[600px] flex gap-2 items-center justify-center">
          {level !== 0 && <Back onClickBack={onClickBack} />}
          <Submit
            text={level === 5 ? "Add Property" : "Continue"}
            isLoading={isLoading}
          />
        </div>
      </form>
    </FormProvider>
  );
};
