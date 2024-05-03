import { Link } from "react-router-dom";

export const FooterLinks = () => {
  return (
    <div className="container w-[1125px] mx-auto">
      <div className="flex justify-between pt-4 pb-20 text-light-blue">
        <ul className="flex flex-col gap-3">
          <li className="text-xs">
            <Link to={"#countries"}> Countries </Link>
          </li>
          <li className="text-xs">
            <Link to={"#regions"}> Regions </Link>
          </li>
          <li className="text-xs">
            <Link to={"#cities"}> Cities</Link>
          </li>
          <li className="text-xs">
            <Link to={"#districts"}> Districts</Link>
          </li>
          <li className="text-xs">
            <Link to={"#airports"}> Airports</Link>
          </li>
          <li className="text-xs">
            <Link to={"#hotels"}> Hotels</Link>
          </li>
          <li className="text-xs">
            <Link to={"#places"}> Places of interest</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-xs">
            <Link to={"#homes"}> Homes </Link>
          </li>
          <li className="text-xs">
            <Link to={"#appartments"}> Appartments </Link>
          </li>
          <li className="text-xs">
            <Link to={"#resorts"}> Resorts</Link>
          </li>
          <li className="text-xs">
            <Link to={"#villas"}> Villas</Link>
          </li>
          <li className="text-xs">
            <Link to={"#hotels"}> Hotels</Link>
          </li>
          <li className="text-xs">
            <Link to={"#bbs"}> B&Bs</Link>
          </li>
          <li className="text-xs">
            <Link to={"#guest-houses"}> Guest Houses</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-xs">
            <Link to={"#unique-places"}> Unique places to stay </Link>
          </li>
          <li className="text-xs">
            <Link to={"#all-destinations"}> All destinations </Link>
          </li>
          <li className="text-xs">
            <Link to={"#flights-destination"}> All flights destinations</Link>
          </li>
          <li className="text-xs">
            <Link to={"#car-rentals-location"}>All car rentals locations</Link>
          </li>
          <li className="text-xs">
            <Link to={"#vaction-destination"}> All vaction desitnations</Link>
          </li>
          <li className="text-xs">
            <Link to={"#discover-monthly-stays"}>Discover monthly stays</Link>
          </li>
          <li className="text-xs">
            <Link to={"#travel-articles"}> Unpacked: Travel articles</Link>
          </li>
          <li className="text-xs">
            <Link to={"#holidays-deals"}> Seasonal & holidays deals</Link>
          </li>
          <li className="text-xs">
            <Link to={"#review-awards"}> Traveller Review Awards</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-xs">
            <Link to={"#car-rental"}> Car rental </Link>
          </li>
          <li className="text-xs">
            <Link to={"#flight-finder"}> Flight finder </Link>
          </li>
          <li className="text-xs">
            <Link to={"#restaurant"}> Restaurant reservations</Link>
          </li>
          <li className="text-xs">
            <Link to={"#travel-agents"}> Booking.com for Travel Agents</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-xs">
            <Link to={"#coronavirus.faq"}> Coronavirus (COVID-19) FAQs </Link>
          </li>
          <li className="text-xs">
            <Link to={"#about-us"}> About Booking.com </Link>
          </li>
          <li className="text-xs">
            <Link to={"#customer-service"}> Customer Service Help</Link>
          </li>
          <li className="text-xs">
            <Link to={"#partner-help"}> Partner help</Link>
          </li>
          <li className="text-xs">
            <Link to={"#careers"}> Careers</Link>
          </li>
          <li className="text-xs">
            <Link to={"#sustainability"}> Sustainability</Link>
          </li>
          <li className="text-xs">
            <Link to={"#press-center"}> Press Center</Link>
          </li>
          <li className="text-xs">
            <Link to={"#safety-resource"}> Safety Resource Center </Link>
          </li>
          <li className="text-xs">
            <Link to={"#investor-relations"}> Investor Relations</Link>
          </li>
          <li className="text-xs">
            <Link to={"#terms-conditions"}>Terms & Conditions </Link>
          </li>
          <li className="text-xs">
            <Link to={"#partner-dispute"}> Partner dispute</Link>
          </li>
          <li className="text-xs">
            <Link to={"#how-we-work"}> How We Work</Link>
          </li>
          <li className="text-xs">
            <Link to={"#cookie"}> Privacy & cookie statement</Link>
          </li>
          <li className="text-xs">
            <Link to={"#statement"}> MSA statement</Link>
          </li>
          <li className="text-xs">
            <Link to={"#cooporate"}> Coorporate contact</Link>
          </li>
          <li className="text-xs">
            <Link to={"#guidelines"}> Content guidelines and reporting</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
