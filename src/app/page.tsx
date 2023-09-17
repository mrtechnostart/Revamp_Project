import Link from "next/link"
export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-green-100">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-6xl font-bold text-green-600">Revamp</h1>
        <p className="text-lg text-gray-600">Earn Cash From Trash</p>
        <Link href="/auth/login" className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Login Now!
        </Link>
      </div>
    </div>
  );
}
