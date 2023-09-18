"use client"
import { useSession } from "next-auth/react"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { MutatingDots } from "react-loader-spinner"

interface Props{
  children: ReactNode
}

export default function PrivateLayout({children}:Props){
  const {data:session,status} = useSession()

  if(status==="authenticated"){
    redirect("/dashboard")
  }
  else if(status==="loading"){
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#4fa94d'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
        </div>
    )
  }
  else{
    return(
        <>
        {children}
        </>
    )
  }
}