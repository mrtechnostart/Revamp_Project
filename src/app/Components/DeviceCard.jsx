import Link from "next/link";

const DeviceCard = ({ device }) => {
  const { deviceName, problem, purchaseYear, isAccepted, description, owner: id } =
    device;
  console.log(device," device in card");
  return (
    <div className="mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{deviceName}</h2>

        <p className={`text-${isAccepted ? "green" : "red"}-500 mb-2`}>
          {isAccepted ? "Already Paid" : "Not Paid"}
        </p>
        <p className="text-gray-700 mb-2">Problem: {problem}</p>
        <p className="text-gray-700 mb-2">Year of Purchase: {purchaseYear}</p>
        {description && <p className="text-gray-700 mb-2">{description}</p>}
        {!isAccepted && <Link href={`/viewdevice/updatedevice/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
            View Device
          </button>
        </Link>}
      </div>
    </div>
  );
};

export default DeviceCard;
