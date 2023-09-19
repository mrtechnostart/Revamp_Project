"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const [isLoading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { data: session } = useSession();
  
  useEffect(() => {
    const userData = session?.user?.email;
    if (session) {
      (async () => {
        try {
          const response = await axios.post('/api/data', {
            email: userData,
          });
          // Assuming the response data structure matches your expected user data
          setFormData({
            id:response.data.user.id || '',
            name: response.data.user.name || '',
            phone: response.data.user.phone || '',
            address: response.data.user.address || '',
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      })();
    }
  }, [session]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      // Assuming you have an API route for updating user data
      const response = await axios.post('/api/updateprofile', {
        id:formData.id,
        name: formData.name,
        phone: formData.phone,
        address: formData.address
      });
      console.log('Updated Profile:', response.data);
      toast.success('Profile Updated Successfull', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      // Handle success or failure as needed
    } catch (error) {
      console.error('Error updating user data:', error);
      toast.error('Something Went Wrong', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }finally{
        setLoading(false)
    }
    console.log(formData)
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={session?.user?.email}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="EmailId"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your address"
            rows="4"
            ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
            {isLoading?"Please Wait":"Submit"}
          </button>
        </div>
      </form>
    </div>
    <ToastContainer/>
              </>
  );
}
