import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="grid items-start gap-12 pt-12 pb-16 px-4 md:pt-24 md:pb-24 md:gap-24 lg:grid-cols-2 lg:gap-32 xl:px-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
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
              Track your steps, sleep, and heart rate.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
              Chat with doctors and book appointments.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-4 h-4 text-gray-500" />
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
              Personalized health tips and reminders.
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <Link
            className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
            href="#"
          >
            Download on the Play Store
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="border rounded-lg p-2">
          {/* <img
              alt="QR Code"
              className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
              height="200"
              src="/placeholder.svg"
              width="200"
            /> */}
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
