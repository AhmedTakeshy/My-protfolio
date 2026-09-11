"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useGetCookie, useSetCookie } from 'cookies-next/client';
import { GoogleAnalytics } from '@next/third-parties/google';

type CookiesProps = {
    cookie: string;
};
export default function Cookies({ cookie }: CookiesProps) {
    const [cookieState, setCookieState] = useState<string>(cookie);
    const getCookie = useGetCookie();
    const setCookie = useSetCookie();
    useEffect(() => {
        const state = getCookie('cookie-consent-state');
        setCookieState(state || 'not-answered');
    }, [getCookie]);

    const handleConsent = (state: string) => {
        setCookie('cookie-consent-state', state);
        setCookieState(state);
    };

    if (cookieState === null) {
        return null;
    }

    if (cookieState === 'not-answered') {
        return (
            <div className="fixed sm:bottom-6 bottom-0 sm:right-10 right-0 w-full sm:max-w-sm rounded-lg border border-border p-6 shadow-lg z-[51] bg-surface">
                <h2 className="text-lg font-semibold text-ink">Cookies</h2>
                <p className="mb-4 mt-2 text-sm text-muted">
                    We use our own and third-party cookies to improve your experience and our services by analyzing how you use our website.{' '}
                    <Link
                        href="https://policies.google.com/technologies/cookies?hl=en-US"
                        className="cursor-pointer underline hover:text-accent transition-colors"
                        target='_blank'
                        rel={"noopener noreferrer"}
                        aria-label="More info"
                        aria-description='More info about cookies'
                    >
                        More info
                    </Link>
                </p>
                <div className="text-right">
                    <button
                        onClick={() => {
                            handleConsent('accepted');
                        }}
                        className="text-sm inline-block rounded-lg px-4 py-1.5 text-right font-medium text-accent transition-colors duration-200 hover:bg-bg border border-border"
                    >
                        Accept
                    </button>
                </div>
            </div>
        );
    }

    if (cookieState === 'accepted') {
        return <GoogleAnalytics gaId={`${process.env.GA_ID}`} />;
    }

    return null;
}
