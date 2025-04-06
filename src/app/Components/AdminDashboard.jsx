"use client";

import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import EWasteABI from "../../../constants/abi.json";
import ConnectWallet from "@/app/Components/ConnectWallet";
import Link from "next/link";

const CONTRACT_ADDRESS = "0x053163b513BDf257B0Ea35cb85082e5dA40C374D"; // Replace with your actual contract address

const HomeDashboard = () => {
  const { account, library } = useEthers();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      if (account && library) {
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, library);
        try {
          const owner = await contract.owner();
          setIsAdmin(owner.toLowerCase() === account.toLowerCase());
        } catch (err) {
          console.error("Error fetching contract owner:", err);
        }
      }
    };

    checkOwner();
  }, [account, library]);

  const adminCards = (
    <div className="flex flex-wrap justify-center mt-8 gap-6">
      {/* Card 1 - View Device Requests */}
      <div className="w-full md:w-2/5 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          className="w-full h-60 object-cover"
          src="/images/bg.jpg"
          alt="View Device Requests"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">View Device Requests</h2>
          <Link href="/viewdevice">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">
              View Now
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2 - View Accepted Devices */}
      <div className="w-full md:w-2/5 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        <img
          className="w-full h-60 object-cover"
          src="/rnd2.jpg"
          alt="View Accepted Devices"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">View Accepted Devices</h2>
          <Link href="/viewdevice/accepted">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full">
              Show Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <ConnectWallet />

      <h1 className="text-3xl font-bold text-center mt-6">
        {isAdmin ? "Admin Dashboard" : "Access Denied"}
      </h1>

      {isAdmin ? adminCards : (
        <p className="text-center text-lg mt-10 text-red-600">
          You are not the admin of this contract.
        </p>
      )}
    </div>
  );
};

export default HomeDashboard;
