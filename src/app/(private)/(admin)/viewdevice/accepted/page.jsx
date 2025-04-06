"use client";

import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import DeviceCard from "@/app/Components/DeviceCard";
import EWasteABI from "../../../../../../constants/abi.json";

const CONTRACT_ADDRESS = "0x053163b513BDf257B0Ea35cb85082e5dA40C374D";

const Page = () => {
  const { library } = useEthers();
  const [paidDevices, setPaidDevices] = useState([]);

  useEffect(() => {
    const fetchPaidDevices = async () => {
      if (!library) return;

      try {
        const signer = library.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, signer);

        const allRequests = await contract.getAllRequests();

        const paid = allRequests
          .filter((req) => req.isPaid) // Only include paid requests
          .map((req) => ({
            id: req.id.toString(),
            deviceName: req.deviceName,
            deviceIssue: req.deviceIssue,
            description: req.description,
            purchaseYear: req.purchaseYear.toString(),
            isAccepted: true,
            userAddress: req.userAddress,
            amountPaid: ethers.utils.formatEther(req.amountPaid),
            timestamp: new Date(req.timestamp.toNumber() * 1000).toLocaleString(),
          }));

        setPaidDevices(paid);
      } catch (error) {
        console.error("Error fetching paid devices:", error);
      }
    };

    fetchPaidDevices();
  }, [library]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Paid Devices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paidDevices.map((device) => (
          <DeviceCard
            key={device.id}
            device={{ ...device, work: "recover" }}
            className="col-span-3 device-card"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
