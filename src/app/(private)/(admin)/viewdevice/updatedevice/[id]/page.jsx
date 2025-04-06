"use client";

import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import EWasteABI from "../../../../../../../constants/abi.json";

const CONTRACT_ADDRESS = "0x053163b513BDf257B0Ea35cb85082e5dA40C374D";

const PayUserForm = ({ params }) => {
  const { account, library } = useEthers();
  const userAddress = params.id; // this is the user's address, not a request ID
  const [ethAmount, setEthAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [requestId, setRequestId] = useState(null);
  const [alreadyPaid, setAlreadyPaid] = useState(false);

  // Fetch the requestId for the given user address
  useEffect(() => {
    const fetchUserRequests = async () => {
      if (!library) return;

      try {
        const signer = library.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, signer);
        const requests = await contract.getUserRequests(userAddress);

        if (requests.length === 0) {
          setStatusMessage("❌ No request found for this user.");
          return;
        }

        const request = requests[0]; // or latest: requests[requests.length - 1]
        setRequestId(request.id);

        if (request.isPaid) {
          setAlreadyPaid(true);
          setStatusMessage("✅ Payment has already been sent.");
        }
      } catch (err) {
        console.error("Error fetching user requests:", err);
        setStatusMessage("❌ Failed to fetch user's requests.");
      }
    };

    fetchUserRequests();
  }, [library, userAddress]);

  const handlePayment = async () => {
    if (!library || !account) {
      setStatusMessage("❌ Please connect your wallet.");
      return;
    }

    if (!ethAmount || parseFloat(ethAmount) <= 0) {
      setStatusMessage("❌ Please enter a valid ETH amount.");
      return;
    }

    if (requestId === null) {
      setStatusMessage("❌ No valid request ID found.");
      return;
    }

    try {
      setLoading(true);
      setStatusMessage("⏳ Sending payment...");

      const signer = library.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, EWasteABI.abi, signer);

      const tx = await contract.payUser(requestId, {
        value: ethers.utils.parseEther(ethAmount),
      });

      await tx.wait();
      setAlreadyPaid(true);
      setEthAmount("");
      setStatusMessage("✅ Payment successful!");
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Transaction failed. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pay User {userAddress}</h1>

      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg p-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter ETH Amount to Send:
        </label>
        <input
          type="number"
          min="0"
          step="0.0001"
          value={ethAmount}
          onChange={(e) => setEthAmount(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          placeholder="0.01"
          disabled={alreadyPaid}
        />

        <button
          className={`${
            loading || alreadyPaid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } text-white px-4 py-2 rounded-full w-full`}
          onClick={handlePayment}
          disabled={loading || alreadyPaid}
        >
          {alreadyPaid
            ? "Already Paid"
            : loading
            ? "Processing..."
            : "Send ETH"}
        </button>

        {statusMessage && (
          <p className="mt-4 text-center text-sm text-gray-700">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default PayUserForm;
