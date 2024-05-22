import { Categories } from "../components/PropertyListing/Categories";
import { useAppContext } from "../hooks/useAppContext";
import { PropertySummary, PropertyTypes } from "../components";
import { PropertyTypeCount } from "../components/PropertyListing/PropertyTypeCount";
import AddHotel from "../forms/ManageHotel/AddHotel";
import routes from "../routes";
import { Navigate } from "react-router-dom";

const ListProperty = () => {
  let ListingComponent;
  const { isAuthenticated, listingStepper } = useAppContext();

  switch (listingStepper) {
    case 1:
      ListingComponent = <PropertyTypes />;
      break;
    case 2:
      ListingComponent = <PropertyTypeCount />;
      break;
    case 3:
      ListingComponent = <PropertySummary />;
      break;
    case 4:
      ListingComponent = <AddHotel />;
      break;
    default:
      ListingComponent = <Categories />;
      break;
  }

  if (!isAuthenticated) {
    return <Navigate to={routes.signIn} />;
  }

  return <div className="w-full mt-7">{ListingComponent}</div>;
};

export default ListProperty;
