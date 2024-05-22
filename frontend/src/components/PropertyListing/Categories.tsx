import appartIcon from "../../assets/images/accomm_apart.png";
import homeIcon from "../../assets/images/accomm_home.png";
import hotelIcon from "../../assets/images/accomm_hotels.png";
import tentIcon from "../../assets/images/accomm_tent.png";
import { Card } from "./Card";
import { CardGrid } from "./CardGrid";

export type PropertiesType = {
  id: number;
  type: string;
  name: string;
  description: string;
  icon: string;
  inactive: boolean;
};

export const Categories = () => {
  /* Relace with BE property categories data */
  const categoriesList: PropertiesType[] = [
    {
      id: 1,
      type: "appartment",
      name: "Appartment",
      description:
        "Furnished and self-catering accommodations where guests rent the entire place",
      icon: appartIcon,
      inactive: true,
    },
    {
      id: 2,
      type: "homes",
      name: "Homes",
      description: "Properties like apartments, vacation homes, villas, etc.",
      icon: homeIcon,
      inactive: true,
    },
    {
      id: 3,
      type: "hotel",
      name: "Hotels B&Bs & More",
      description:
        "Properties like hotels, B&Bs, guest houses, hostels, condo hotels, etc.",
      icon: hotelIcon,
      inactive: false,
    },
    {
      id: 4,
      type: "alternative",
      name: "Alternative Places",
      description: "Properties like boats, campgrounds, luxury tents, etc.",
      icon: tentIcon,
      inactive: true,
    },
  ];

  return (
    <div className="mt-7">
      <h1 className=" text-3xl font-bookingBold">
        List your property on Booking.com and start welcoming guests in no time!
      </h1>
      <p className=" text-xl mt-2 mb-14">
        To get started, select the type of property you want to list on
        Booking.com
      </p>

      <CardGrid initStep>
        {categoriesList.map((category) => (
          <Card key={category.id} property={category} initStep />
        ))}
      </CardGrid>
    </div>
  );
};
