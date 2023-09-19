"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Page(){
    const {data:session,status} = useSession()
    const [data,setData] = useState(null)
    
    useEffect(()=>{
        let userdata = session?.user?.email
        async function getData(){
        const userData = await axios.post("/api/data",{
            email:userdata
        })   
        setData(userData)
        }
        getData()
    },[session])
    if(data)
    console.log(data.data.user.email)
    return(
        <>
        Hii From Profile Page
        </>
    )
}