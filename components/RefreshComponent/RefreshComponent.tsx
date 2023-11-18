'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function RefreshComponent() {
    const {refresh}=useRouter()
    useEffect(() => {
    refresh()

    },[])
    return (
        <div/>
    )
}