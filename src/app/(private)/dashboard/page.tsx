"use client"

import Loading from "@/app/Components/Loading"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Page() {
    const { data: session, status } = useSession()
    const [data, setData] = useState({})

    async function getData() {
        const userData = session?.user?.email
        const dataObject = await axios.post("/api/data", {
            email: userData
        })
        setData(dataObject.data.user)
    }
    useEffect(() => {
        getData()
    }, [session])
    return (
        <div>
            {data.address ? (<div>
                <div className="flex justify-center mt-3 text-2xl font-medium">Welcome {data.name}</div>
            </div>) : data ? (<div className="flex items-center justify-center min-h-[80vh] text-3xl text-red-500 font-medium">Go Update Profile First</div>) : <Loading />}
        </div>
    )
}