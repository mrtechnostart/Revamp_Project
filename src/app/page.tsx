import Link from "next/link"
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-green-100">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Image height={300} width={300} alt="Aavartak" src="/images/revamp2.png" />
        <Link href="/auth/login" className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Login Now!
        </Link>
      </div>
    </div>
  );
}
