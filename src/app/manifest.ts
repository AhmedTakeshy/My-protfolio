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
        ],
    }
}