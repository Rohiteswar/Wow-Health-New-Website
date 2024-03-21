"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";

export function TypeWrite() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Your",
    },
    {
      text: "Gut",
    },
    {
      text: "Health",
    },
    {
      text: "with",
    },
    {
      text: "Wow Health.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 text-xs sm:text-base  ">
        The road to Wealth To Health starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:text-white hover:bg-slate-950 transition duration-200 text-black"
          href="/Join"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
