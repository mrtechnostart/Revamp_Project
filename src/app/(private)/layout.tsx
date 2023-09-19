"use client"
import {  useSession } from "next-auth/react"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import Loading from "@/app/Components/Loading"
import { Sidebar } from "react-pro-sidebar"
import TopBarComponent from "../Components/TopBarComponent"
interface Props{
  children: ReactNode
}

export default function PrivateLayout({children}:Props){
  const {data:session,status} = useSession()

  if(status==="authenticated"){
    return( 
      <>
      <TopBarComponent/>
      {children}
      </>)
  }
  else if(status==="loading"){
    return (
      <>
      <Loading/>
      </>
    )
  }
  else{
    redirect("/")
  }
}