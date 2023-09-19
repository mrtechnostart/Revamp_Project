import React from 'react';
import Link from 'next/link';
function TopBarComponent() {
  return (
    <nav className="bg-green-400 text-white p-4 flex justify-between items-center border-b-2">
      <div className="text-2xl font-bold">
        Revamp
      </div>
      <div>
        <ul className="flex space-x-4">
          <li><Link href="/dashboard">Home</Link></li>
          <li><a href="#about">About</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
      <div>
      <Link href="/dashboard/profile">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">  
          Profile
        </button>
      </Link>
      </div>
    </nav>
  );
}

export default TopBarComponent;
