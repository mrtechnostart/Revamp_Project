"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  Popup,
  failToast,
  successToast,
} from "@/app/Components/SuccessPopup";
import EWasteABI from "../../../../../constants/abi.json"
import { Contract } from "ethers"
import { useEthers, useContractFunction } from "@usedapp/core"
import { ethers } from "ethers"

const RepairForm = () => {
  const { account, activateBrowserWallet } = useEthers()
  const { data } = useSession();
  const [formData, setFormData] = useState({
    deviceName: "",
    purchaseYear: "",
    problem: "",
    description: "",
  });
  const contractInterface = new ethers.utils.Interface(EWasteABI.abi)
  const contract = new Contract("0x053163b513BDf257B0Ea35cb85082e5dA40C374D", contractInterface)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { state, send } = useContractFunction(contract, "createRequest", {
    transactionName: "Create Repair Request",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalData = { ...formData, userId: data.user.id };
  
      if (!account) {
        await activateBrowserWallet();
      }
  
      // Convert date to year as uint16
      const year = new Date(finalData.purchaseYear).getFullYear();
  
      // Send all required args in correct order
      const tx = await send(
        finalData.deviceName,
        finalData.problem,        // maps to `_deviceIssue`
        finalData.description,
        year
      );
  
      console.log(tx);
  
    } catch (error) {
      console.error(error);
      failToast("Failed");
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Device Repair Form</h2>

          <div className="mb-4">
            <label
              htmlFor="deviceName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Device Name
            </label>
            <input
              type="text"
              id="deviceName"
              name="deviceName"
              value={formData.deviceName}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="purchaseYear"
              className="block text-sm font-medium text-gray-600"
            >
              Purchase Year
            </label>
            <input
              type="date"
              id="purchaseYear"
              name="purchaseYear"
              value={formData.purchaseYear}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="problem"
              className="block text-sm font-medium text-gray-600"
            >
              Problem
            </label>
            <select
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            >
              <option value="" disabled>
                Select Problem
              </option>
              <option value="Screen">Screen</option>
              <option value="Motherboard">Motherboard</option>
              <option value="Camera">Camera</option>
              <option value="Battery">Battery</option>
              <option value="IDontKnow">I{"`"} Dont Know</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Describe Your Device
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
          >
            Submit
          </button>
        </form>

        <div className="mt-4">
        {state.status === "Mining" && <p>Sending transaction...</p>}
        {state.status === "Success" && <p className="text-green-500">Request submitted!</p>}
        {state.status === "Exception" && <p className="text-red-500">Error: {state.errorMessage}</p>}
      </div>
      </div>
      <Popup />
    </>
  );
};

export default RepairForm;
