import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ahmed Takeshy Frontend Developer Portfolio",
        short_name: "Ahmed Takeshy Portfolio",
        description: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/icons/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/icons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/icons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/icons/A.png',
                sizes: '150x150',
                type: 'maskable',
            },
        ],
    }
}