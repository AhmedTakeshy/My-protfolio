import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-between w-screen h-screen px-5 lg:flex-row bg-bg blueprint-grid">
            <div className="w-full mx-8 text-left lg:w-1/2">
                <span className="mb-6 font-mono font-bold text-7xl text-accent">404</span>
                <p className="mb-12 text-2xl font-light leading-normal text-ink md:text-3xl">
                    Sorry but it seems you are lost in my app, <br />
                    but don&apos;t worry, I&apos;ll help you find your way back.
                </p>
                <Link href="/" className="inline px-5 py-3 text-sm font-medium leading-5 focus:outline-none btn">
                    Here&apos;s your way back
                </Link>
            </div>
            <div className="w-full mx-5 my-12 lg:flex lg:w-1/2">
                <Image width={700} height={436} src="/img/not-found.png" className="w-full" alt="Page not found" />
            </div>
        </div>
    )
}