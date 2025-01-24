"use client"
import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'

export default function Cookies() {
    return (
        <div className="fixed bottom-6 right-10 max-w-sm rounded-lg border p-6 shadow-lg z-[51] bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-700">🍪 Use of cookies</h2>
            <p className="mb-4 mt-2 text-gray-400">We use our own and third party cookies to improve your experience and our services by analyzing how you use our website. <Link href="https://policies.google.com/technologies/cookies?hl=en-US" className="cursor-pointer underline hover:text-blue-500">More info</Link></p>
            <div className="text-right">
                <button
                    onClick={() => {
                        sendGTMEvent({ event: 'buttonClicked', value: process.env.NEXT_PUBLIC_GTM_ID })
                    }}
                    className="text-md inline-block rounded-lg px-4 py-1 text-right font-semibold text-blue-500 transition duration-500 hover:bg-blue-100">Accept</button>
            </div>
        </div>
    )
}
