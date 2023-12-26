"use client";
import HomeDashboard from "@/app/Components/HomeDashboard";
import AdminDashboard from "@/app/Components/AdminDashboard";
import { useSession } from "next-auth/react";
const Page = () => {
  const { data } = useSession();
  return (
    <>
      {data.user.role === "ADMIN" && <AdminDashboard />}
      {data.user.role === "USER" && <HomeDashboard />}
    </>
  );
};

export default Page;
