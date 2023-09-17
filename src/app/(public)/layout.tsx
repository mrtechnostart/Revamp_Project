"use client"
import { useSession } from "next-auth/react"
import { ReactNode } from "react"
import { redirect } from "next/navigation"

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
      <>
      Loading
      </>
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