import Link from "next/link";
import React from "react";
import ConnectWallet from "@/app/Components/ConnectWallet"
const HomeDashboard = () => {
  return (
    <>
    <div className="container mx-auto p-4">
    <ConnectWallet/>
      <div className="flex flex-wrap justify-center mt-8">
        {/* Card 1 - Submit Devices */}
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover object-center"
            src="/images/bg.jpg"
            alt="Submit Devices"
            />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Submit Devices</h2>
            <Link href="/submitdevice">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                Submit Devices
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 - View Submitted Devices */}
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover object-center"
            src="/rnd2.jpg"
            alt="View Submitted Devices"
            />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">View Submitted Devices</h2>
            <Link href="/viewdevices">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full focus:outline-none">
                View Submitted Devices
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
            </>
  );
};

export default HomeDashboard;
