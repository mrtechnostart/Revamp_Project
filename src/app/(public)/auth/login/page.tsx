"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
export default function Page() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const emailSignIn = (e: any) => {
    e.preventDefault();
    const finalData = {
      email: data.email.toLowerCase(),
      password: data.password,
    };
    console.log(data);
    signIn("credentials", finalData);
  };
  const googleSignIn = () => {
    signIn("google");
  };
  return (
    <>
      <div className="bg-green-100 min-h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row min-h-[60vh] min-w-[90vw] bg-green-50 text-black shadow-2xl rounded-2xl lg:min-w-[60vw] md:min-w-[70vw] sm:min-w-[60vw]">
          {/* Left section */}
          <div className="min-w-[50%] min-h-full opacity-15 flex justify-center py-5 md:py-0 items-center">
            <img src="/images/revamp1.png" alt="revampLogo" className="h-60" />
          </div>

          {/* Right section (Login form) */}
          <div className="w-full md:w-[50%] p-5 md:p-10 flex flex-col justify-center items-center bg-yellow-100">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-green-600">
              Login
            </h2>
            <form className="space-y-4" onSubmit={emailSignIn}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-green-600 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-green-600 rounded-md shadow-inner text-black placeholder-black focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
                  placeholder="Enter your email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <label
                  htmlFor="password"
                  className="block text-lg font-semibold text-green-600 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-green-600 rounded-md shadow-inner text-black placeholder-black focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
                  placeholder="Password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-3 md:space-y-5">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-green-200"
                >
                  Login
                </button>
                <button
                  onClick={googleSignIn}
                  type="button"
                  className="bg-red-600 flex justify-center items-center hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-red-200"
                >
                  <BsGoogle className="mr-2" /> Continue With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
