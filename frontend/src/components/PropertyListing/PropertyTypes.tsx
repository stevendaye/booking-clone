import { Card } from "./Card";
import { CardGrid } from "./CardGrid";
import { PropertiesType } from "./Categories";
import { NextStep, PrevStep } from "../../forms";
import { useAppContext } from "../../hooks/useAppContext";

export const PropertyTypes = () => {
  /* Replace with BE property type */
  const typesList: PropertiesType[] = [
    {
      id: 1,
      type: "hotel",
      name: "Hotel",
      description:
        "Accommodations for travelers often with restaurants, meeting rooms and other guest services",
      icon: "",
      inactive: false,
    },
    {
      id: 2,
      type: "guesthouse",
      name: "Guesthouse",
      description:
        "Private home with separate living facilities for host and guest",
      icon: "",
      inactive: false,
    },
    {
      id: 3,
      type: "lodge",
      name: "Lodge",
      description:
        "Private home with accommodations surrounded by nature, such as a forest or mountains",
      icon: "",
      inactive: false,
    },
    {
      id: 4,
      type: "homestay",
      name: "Homestay",
      description:
        "A shared home where the guest has a private room and the host lives and is on site. Some facilities are shared between hosts and guests",
      icon: "",
      inactive: false,
    },
    {
      id: 5,
      type: "hostel",
      name: "Hostel",
      description:
        "Budget accommodations with mostly dorm-style beds and social atmosphere",
      icon: "",
      inactive: false,
    },
    {
      id: 6,
      type: "country house",
      name: "Country house",
      description: "Private home in the countryside with simple accommodations",
      icon: "",
      inactive: false,
    },
    {
      id: 7,
      type: "farm stay",
      name: "Farm Stay",
      description: "Private farm with simple accommodations",
      icon: "",
      inactive: false,
    },
    {
      id: 8,
      type: "motel",
      name: "Motel",
      description:
        "Roadside hotel usually for motorists, with direct access to parking and fewer amenities",
      icon: "",
      inactive: false,
    },
    {
      id: 9,
      type: "ressort",
      name: "Ressort",
      description:
        "A place for relaxation with on-site restaurants, activities and often a luxury feel",
      icon: "",
      inactive: false,
    },
  ];

  const { property, setProperty } = useAppContext();
  const handleSelectCard = (cardId: number, cardName: string) => {
    setProperty({ ...property, propertyId: cardId, propertyName: cardName });
  };

  return (
    <div className="mt-7 w-full">
      <h1 className=" text-3xl font-bookingBold mb-12">
        From the list below, which property category is the best fit for your
        place?
      </h1>

      <CardGrid>
        {typesList.map((type) => (
          <Card
            key={type.id}
            property={type}
            isSelected={property.propertyId === type.id}
            onSelect={handleSelectCard}
          />
        ))}
      </CardGrid>

      <div className="flex gap-2 mt-10">
        <PrevStep cssWidth="w-32" />
        <NextStep progress={!property.propertyId} />
      </div>
    </div>
  );
};
