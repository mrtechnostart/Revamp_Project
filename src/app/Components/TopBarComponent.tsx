import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function TopBarComponent() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="bg-green-400 text-white p-4 flex justify-between items-center border-b-2">
      <div className="text-2xl font-bold">Aavartak</div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/submitdevice/profile">Profile</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default TopBarComponent;
