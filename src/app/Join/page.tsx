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
            <Image src={Banner} alt="Picture of the author" sizes="80px" />
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
        <div className="flex gap-2">
          <a href="https://play.google.com/store/apps/details?id=space.wowhealth.wowhealthapp">
          <Image src={"/Badges/Play Store badge.svg"} alt={"Play Store"} width={160} height={50}         
          />
          </a>
          <a href="https://apps.apple.com/in/app/wow-health-app/id6499275589">
          <Image src={"/Badges/App Store Badge.svg"} alt={"App Store"} width={160} height={50}         
          />
          </a>
        </div>
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
