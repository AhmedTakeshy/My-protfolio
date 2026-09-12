"use client"
import Link from 'next/link'
import { useSyncExternalStore } from 'react';
import { useSetCookie } from 'cookies-next/client';
import { GoogleAnalytics } from '@next/third-parties/google';

// Pure client-side by design: consent state has no SEO/SSR value, and trying
// to read it server-side ran into a real Next 16 PPR/Suspense interaction
// ("the server could not finish this Suspense boundary... switched to
// client rendering" -- React error #419) for zero benefit. useSyncExternalStore
// is the correct primitive for an external, browser-only source like
// document.cookie: no hydration-mismatch warning, no set-state-in-effect
// lint violation (which a plain useEffect+useState version would trigger).

function readConsentCookie(): string {
    const match = document.cookie.match(/(?:^|; )cookie-consent-state=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : 'not-answered';
}
function getServerSnapshot() {
    return 'not-answered';
}

// Minimal pub-sub: the only writer of this cookie is handleConsent below, so
// notifying subscribers after writing is all useSyncExternalStore needs to
// know to re-read the snapshot and re-render.
const listeners = new Set<() => void>();
function subscribe(callback: () => void) {
    listeners.add(callback);
    return () => listeners.delete(callback);
}
function notifyConsentChanged() {
    listeners.forEach((listener) => listener());
}

export default function Cookies() {
    const cookieState = useSyncExternalStore(subscribe, readConsentCookie, getServerSnapshot);
    const setCookie = useSetCookie();

    const handleConsent = (state: string) => {
        setCookie('cookie-consent-state', state);
        notifyConsentChanged();
    };

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
