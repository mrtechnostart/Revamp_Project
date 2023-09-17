"use client"
import { useState } from "react";

export default function Page() {
    const [email,setEmail] = useState("")
    return (
      <>
        <div className="bg-green-100 min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row min-h-[60vh] min-w-[90vw] bg-green-50 text-black shadow-2xl rounded-2xl lg:min-w-[60vw] md:min-w-[70vw] sm:min-w-[60vw]">
            {/* Left section */}
            <div className="min-w-[50%] flex min-h-full bg-green-500 opacity-15 items-start p-5 md:pt-20">
              <p className="text-white font-semibold text-4xl md:text-5xl lg:text-7xl mx-auto">Revamp</p>
            </div>
  
            {/* Right section (Login form) */}
            <div className="w-full md:w-[50%] p-5 md:p-10 flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">Login</h2>
              <form className="space-y-4">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-semibold text-green-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-green-600 rounded-md shadow-inner text-black placeholder-black focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-red-200"
                  >
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  