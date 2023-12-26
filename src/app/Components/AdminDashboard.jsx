import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center mt-8">
        {/* Card 1 - Submit Devices */}
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover object-center"
            src="https://source.unsplash.com/random/800x400"
            alt="Submit Devices"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">View Device Requests</h2>
            <Link href="/viewdevice">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                View Device Requests
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 - View Submitted Devices */}
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover object-center"
            src="https://source.unsplash.com/random/800x401"
            alt="View Submitted Devices"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">View Accepted Devices</h2>
            <Link href="/viewdevice/accepted">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full focus:outline-none">
                Show Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
