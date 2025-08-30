export default function Card({ image, name, age, city, country, bio }) {
  return (
    <div className="flex flex-col items-center p-4 shadow rounded-lg bg-white h-full">
      <img
        src={image}
        alt={name}
        className="flex items-center w-24 h-24 rounded-full object-cover p-1"
      />
      <div className="flex items-center flex-col text-center">
        <p className="text-lg font-semibold p-1">{name}</p>
        <div className="flex justify-between">
          <div className="flex items-row gap-1 p-1">
            <p className="text-gray-500 text-sm">{city},</p>
            <p className="text-gray-500 text-sm">{country}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm p-1">{age} years</p>
        <p className="text-gray-500 text-sm p-1">{bio}</p>
      </div>
    </div>
  );
}
