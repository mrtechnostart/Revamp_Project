"use client";
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers, Contract } from "ethers";
import EWasteABI from "../../../../../constants/abi.json"; // adjust if needed

const GetMyRequests = () => {
  const { account, library } = useEthers();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyRequests = async () => {
    if (!account || !library) return;
    try {
      setLoading(true);
      const signer = library.getSigner();
      const contract = new Contract(
        "0xa1aeF1462881aF72e54a31f67251C093333fAB6a", // contract address
        EWasteABI.abi,
        signer
      );
      const result = await contract.getMyRequests();
      setRequests(result);
    } catch (err) {
      console.error("Error calling getMyRequests:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyRequests();
  }, [account]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Requests</h1>
      {loading ? (
        <p>Loading...</p>
      ) : requests.length > 0 ? (
        requests.map((item, index) => (
          <div key={index} className="border p-4 rounded-md mb-2">
            <p><strong>Device:</strong> {item.deviceName}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Problem:</strong> {item.deviceIssue}</p>
            <p><strong>Purchase Year:</strong> {item.purchaseYear}</p>
            {/* Add more fields as needed */}
          </div>
        ))
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
};

export default GetMyRequests;
