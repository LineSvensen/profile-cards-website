import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card({ image, name, age, city, country, bio }) {
  return (
    <div className="flex flex-col items-center p-4 shadow rounded-lg bg-white h-full">
      <img
        src={image}
        alt={name}
        className="flex items-center w-24 h-24 rounded-full object-cover p-1 ring-2 ring-teal-500"
      />
      <div className="flex items-center flex-col text-center">
        <h2 className="text-lg text-gray-800 font-semibold pt-2">{name}</h2>
        <div className="flex items-center gap-1 text-gray-500 text-sm p-1">
          <FontAwesomeIcon icon={faLocationDot} className="text-teal-600" />
          <span>
            {city}, {country}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm p-1">
          <FontAwesomeIcon icon={faCakeCandles} className="text-teal-600" />
          <span>{age} years</span>
        </div>
        <p className="text-gray-800 text-sm p-1">{bio}</p>
      </div>
    </div>
  );
}
