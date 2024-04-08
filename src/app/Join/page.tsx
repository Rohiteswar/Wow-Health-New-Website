import Link from "next/link";
import { JSX, SVGProps } from "react";
import Banner from "../../../public/Screens.png";
import Mobile from "../../../public/Home User-portrait.png";
import Image from "next/image";

export default function Component() {
  return (
    <div className="grid items-start gap-12 pt-12 pb-16 px-4 md:pt-24 md:pb-24 md:gap-24 lg:grid-cols-2 lg:gap-32 xl:px-6">
      <div className="space-y-4 mt-40 md:m-40">
        <div className="text-black text-center text-xl">
          Welcome To{" "}
          <span className="text-4xl text-[#EB2226]"> Wow Health </span>{" "}
          Memberships 🎉
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="border rounded-lg p-2 text-black">
            <Image src={Banner} alt="Picture of the author" sizes="100px" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Wow Health
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Your Health. Your Way.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
              Track your Weight, Diet, and Fitness.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
              Chat With Coaches and Make A Direct Calls.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
              Personalized health tips and Daily Reminders for Classes, We Care
              For You .
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <Link
            className="inline-flex h-10 text-black items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
            href="https://drive.google.com/file/d/1SB-XAcTXAuuMc0dDhgyAIVY3rEsXgWnH/view?usp=sharing"
            target="_blank"
          >
            Download the .APK
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-40">
        <div className="border rounded-lg p-2 text-black">
          You Will Get The Access Soon
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Scan to download the app
        </p>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
