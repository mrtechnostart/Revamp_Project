"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import DeviceCard from "@/app/Components/DeviceCard";
const Page = () => {
  const [devices, setDevices] = useState([]);
  console.log(devices);
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
      <h1 className="text-3xl font-bold mb-4">Submitted Devices</h1>
      <div className="container flex">
        {devices.map((device) => {
          if (!device.isAccepted) {
            return <DeviceCard key={device.id} device={device} />;
          }
        })}
      </div>
    </div>
  );
};

export default Page;
