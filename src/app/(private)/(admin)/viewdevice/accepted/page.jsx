"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import DeviceCard from "@/app/Components/DeviceCard";

const Page = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/updateprofile");
        setDevices(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Accepted Devices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devices.map((device) => {
          if (device.isAccepted) {
            return (
              <DeviceCard
                key={device.id}
                device={{ ...device, work: "recover" }}
                className="col-span-3 device-card"
              />
            );
          }
          return null; // Add this line to handle the else case
        })}
      </div>
    </div>
  );
};

export default Page;
