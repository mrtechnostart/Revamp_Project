"use client";

import { useCall, useEthers } from "@usedapp/core";
import { ethers, Contract } from "ethers";
import { useEffect, useState } from "react";
import EWasteABI from "../../../../../constants/abi.json";
import DeviceCard from "@/app/Components/DeviceCard";

const CONTRACT_ADDRESS = "0x053163b513BDf257B0Ea35cb85082e5dA40C374D";

const Page = () => {
  const { account } = useEthers();
  const [devices, setDevices] = useState([]);

  const contractInterface = new ethers.utils.Interface(EWasteABI.abi);
  const contract = new Contract(CONTRACT_ADDRESS, contractInterface);

  const result = useCall({
    contract,
    method: "getAllRequests",
    args: [],
  }) ?? {};
  useEffect(() => {
    if (result?.value && Array.isArray(result.value[0])) {
      const parsed = result.value[0].map((device) => ({
        id: device[0].toString(),
        deviceName: device[1],
        partName: device[2],
        description: device[3],
        year: device[4],
        owner: device[5],
        isAccepted: device[6],
        value: ethers.utils.formatEther(device[7]),
        timestamp: new Date(parseInt(device[8]._hex, 16) * 1000).toLocaleString(),
      }));

      setDevices(parsed);
    }
  }, [result]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Submitted Devices</h1>
      <div className="flex flex-wrap gap-4">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Page;
