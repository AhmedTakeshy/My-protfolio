"use client"
// import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useGetCookie, useSetCookie } from 'cookies-next/client';

export default function Cookies() {
    const [cookieState, setCookieState] = useState('not-answered');
    const getCookie = useGetCookie();
    const setCookie = useSetCookie();
    useEffect(() => {
        const state = getCookie('cookie-consent-state');
        if (state) setCookieState(state);
    }, [getCookie]);

    const handleConsent = (state: string) => {
        setCookie('cookie-consent-state', state);
        setCookieState(state);
        // sendGTMEvent({ event: 'buttonClicked', value: { gAna: "G-T191THPQ29" } })
    };

    return (
        cookieState === 'not-answered' ? (
            <div className="fixed sm:bottom-6 bottom-0 sm:right-10 right-0 w-full sm:max-w-sm rounded-lg border p-6 shadow-lg z-[51] bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-700">🍪 Use of cookies</h2>
                <p className="mb-4 mt-2 text-gray-400">We use our own and third party cookies to improve your experience and our services by analyzing how you use our website. <Link href="https://policies.google.com/technologies/cookies?hl=en-US" className="cursor-pointer underline hover:text-blue-500">More info</Link></p>
                <div className="text-right">
                    <button
                        onClick={() => {
                            handleConsent("accepted");
                        }}
                        className="text-md inline-block rounded-lg px-4 py-1 text-right font-semibold text-blue-500 transition duration-500 hover:bg-blue-100">Accept</button>
                </div>
            </div>
        ) : null
    )
}
