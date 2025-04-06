"use client";

import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import EWasteABI from "../../../../../../../constants/abi.json";

const CONTRACT_ADDRESS = "0x053163b513BDf257B0Ea35cb85082e5dA40C374D";

const PayUserForm = ({ params }) => {
  const { account, library } = useEthers();
  const userAddress = params.id;

  const [requests, setRequests] = useState([]);
  const [loadingMap, setLoadingMap] = useState({});
  const [amountMap, setAmountMap] = useState({});
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    const fetchUserRequests = async () => {
      if (!library) return;

      try {
        const signer = library.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, signer);
        const userRequests = await contract.getUserRequests(userAddress);
        setRequests(userRequests);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };

    fetchUserRequests();
  }, [library, userAddress]);

  const handleAmountChange = (requestId, value) => {
    setAmountMap((prev) => ({ ...prev, [requestId]: value }));
  };

  const handlePay = async (requestId) => {
    if (!library || !account) return;

    const amount = amountMap[requestId];
    if (!amount || parseFloat(amount) <= 0) {
      setStatusMap((prev) => ({
        ...prev,
        [requestId]: "❌ Enter a valid ETH amount.",
      }));
      return;
    }

    try {
      setLoadingMap((prev) => ({ ...prev, [requestId]: true }));
      setStatusMap((prev) => ({ ...prev, [requestId]: "⏳ Sending payment..." }));

      const signer = library.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, signer);

      const tx = await contract.payUser(requestId, {
        value: ethers.utils.parseEther(amount),
      });

      await tx.wait();

      setStatusMap((prev) => ({ ...prev, [requestId]: "✅ Payment successful!" }));

      // Refresh request list
      const updatedRequests = await contract.getUserRequests(userAddress);
      setRequests(updatedRequests);
    } catch (err) {
      console.error(err);
      setStatusMap((prev) => ({ ...prev, [requestId]: "❌ Transaction failed." }));
    } finally {
      setLoadingMap((prev) => ({ ...prev, [requestId]: false }));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Pay User: {userAddress}</h1>

      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-lg shadow p-4 mb-4 border"
          >
            <h2 className="text-lg font-semibold mb-1">
              Device: {request.deviceName}
            </h2>
            <p className="text-sm text-gray-600">
              Issue: {request.deviceIssue}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Purchase Year: {request.purchaseYear}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Paid: {request.isPaid ? "✅ Yes" : "❌ No"}
            </p>

            <input
              type="number"
              step="0.0001"
              placeholder="Enter ETH amount"
              disabled={request.isPaid}
              value={amountMap[request.id] || ""}
              onChange={(e) => handleAmountChange(request.id, e.target.value)}
              className="w-full px-3 py-2 border rounded mb-2"
            />

            <button
              onClick={() => handlePay(request.id)}
              disabled={loadingMap[request.id] || request.isPaid}
              className={`w-full py-2 rounded text-white ${
                request.isPaid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {request.isPaid
                ? "Already Paid"
                : loadingMap[request.id]
                ? "Processing..."
                : "Send ETH"}
            </button>

            {statusMap[request.id] && (
              <p className="text-sm mt-2 text-gray-700">
                {statusMap[request.id]}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PayUserForm;
