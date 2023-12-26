"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// Your Page component
export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/submitdevice");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Submitted Devices</h1>

      {data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((element) => (
            <div
              key={element.id}
              className="bg-white p-4 rounded-md border border-gray-300 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-2">
                Device Name: {element.deviceName}
              </h2>
              <p className="text-gray-700 mb-2">
                Description: {element.description}
              </p>
              <p
                className={`text-${
                  element.isAccepted ? "green" : "red"
                }-500 mb-2`}
              >
                Status: {element.isAccepted ? "Accepted" : "Not Accepted"}
              </p>
              <p className="text-gray-700 mb-2">Problem: {element.problem}</p>
              <p className="text-gray-700 mb-2">
                Year of Purchase: {element.purchaseYear}
              </p>
              {element?.acceptedComment && (
                <p className="text-gray-700 mb-2">
                  Accepted Comment: {element?.acceptedComment}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No submitted devices available.</p>
      )}
    </div>
  );
}
