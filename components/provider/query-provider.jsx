"use client"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { Toaster } from "sonner"
import { useState } from "react"

export function QuaryProvider({children}){
    const [client]=useState(()=> new QueryClient);

    return (
        <>
        <QueryClientProvider client={client}>
            {children}
            <Toaster />
        </QueryClientProvider>
        </>
    )
}
export default QuaryProvider;