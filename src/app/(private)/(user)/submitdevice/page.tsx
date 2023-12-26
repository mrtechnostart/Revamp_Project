"use client";
import Loading from "@/app/Components/Loading";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [data, setData] = useState({});
  const [city, setCity] = useState([]);
  const [randomImage, setRandomImage] = useState("");

  function extractFacilityName(address: string) {
    const regexPattern = /^M\/s\.\s(.+?),/;
    const match = address.match(regexPattern);
    return match && match[1] ? match[1].trim() : address;
  }

  async function getData() {
    const dataObject = await axios.post("/api/data", {});
    setData(dataObject.data.user);
  }

  const getCities = async () => {
    const cityData = await axios.post("/api/getlocation", {
      city: data.city,
    });
    setCity(cityData.data.data);
  };

  useEffect(() => {
    if (session) getData();
  }, [session]);

  useEffect(() => {
    if (data) getCities();
  }, [data]);

  useEffect(() => {
    axios.get("https://source.unsplash.com/random/800x400").then((response) => {
      setRandomImage(response.request.responseURL);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {data.address ? (
        <div className="container mx-auto p-4">
          <div className="text-center text-2xl font-medium mt-8">
            Welcome {data.name}
          </div>
          <div className="flex flex-wrap justify-around mt-8">
            {Array.isArray(city) &&
              city.map((plant) => (
                <div
                  key={plant.id}
                  className="w-72 mx-4 my-4 bg-white rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    className="w-full h-40 object-cover object-center"
                    src={randomImage}
                    alt="Facility"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      {extractFacilityName(plant.address)}
                    </h2>
                    <Link href={`/submitdevice/submit/${plant.id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : data ? (
        <div className="flex items-center justify-center min-h-[80vh] text-3xl text-red-500 font-medium">
          Go Update Profile First
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
