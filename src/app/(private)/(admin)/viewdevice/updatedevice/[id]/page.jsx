"use client";
import axios from "axios";
import { useState } from "react";
import {
  Popup,
  failToast,
  successToast,
} from "../../../../../Components/SuccessPopup";
const UpdateDevice = ({ params }) => {
  const { id } = params;
  console.log(id);
  const [deviceDetails, setDeviceDetails] = useState({
    isAccepted: true,
    acceptedComment: "",
  });

  const handleAcceptance = async () => {
    try {
      console.log(deviceDetails);

      const response = await axios.patch("/api/submitdevice", {
        id,
        ...deviceDetails,
      });
      if (response.status == 200) {
        console.log("Device updated successfully!");
        console.log(response);
        successToast("Device updated successfully!");
      }
    } catch (error) {
      failToast("Something Went Wrong!");
      console.error("Error updating device:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Update Device</h1>

        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
          {/* Display Device Details */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Device ID: {id}</h2>
            <div className="flex items-center mb-4">
              <label className="block text-gray-700 text-sm font-bold mr-2">
                Status:
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  id="statusSwitch"
                  name="statusSwitch"
                  checked={deviceDetails.isAccepted}
                  onChange={() =>
                    setDeviceDetails({
                      ...deviceDetails,
                      isAccepted: !deviceDetails.isAccepted,
                    })
                  }
                  className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
                    deviceDetails.isAccepted
                      ? "border-green-500"
                      : "border-red-500"
                  } focus:outline-none focus:shadow-outline-blue`}
                />
                <label
                  htmlFor="statusSwitch"
                  className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
                    deviceDetails.isAccepted ? "bg-green-500" : "bg-red-500"
                  }`}
                ></label>
              </div>
              <span className="text-sm text-gray-600">
                {deviceDetails.isAccepted ? "Accepted" : "Not Accepted"}
              </span>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Accepted Comment:
            </label>
            <textarea
              className="w-full h-20 px-3 py-2 mb-3 border rounded-md"
              value={deviceDetails.acceptedComment}
              onChange={(e) =>
                setDeviceDetails({
                  ...deviceDetails,
                  acceptedComment: e.target.value,
                })
              }
            ></textarea>
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none`}
              onClick={handleAcceptance}
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
      <Popup />
    </>
  );
};

export default UpdateDevice;
