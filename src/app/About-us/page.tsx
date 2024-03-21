"use client";
import Link from "next/link";
import { BentoGridThirdDemo } from "../Components/Bento-Grid";
import { Highlight, UseCardStack } from "../Components/Card-Stack";
import { FollowingPointer } from "../Components/Followers";
import { AnimatedTooltipPreview } from "../Components/Members";
import { TextRevealCardPreview } from "../Components/Text-Reveal";

export default function About_us() {
  return (
    <>
      <div className="p-4 md:p-40 md:grid  md:grid-cols-12 bg-white ">
        <div className="md:col-span-6 text-center md:text-8xl text-4xl">
          <div className="md:flex md:flex-col md:justify-center mt-28">
            <div className="text-black">
              Who is <span className="text-[#EB2227]">Wow</span> Health ?
            </div>
            <div className="mt-10">
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <FollowingPointer />
        </div>

        <div className="md:col-span-12 mt-4">
          <BentoGridThirdDemo />
        </div>

        <div className="md:col-span-12 border-t-2 mt-10 text-center md:text-6xl text-4xl">
          <div className="md:col-span-6">
            <div className="mt-10">
              <span className="text-[#EB2227]">#</span>
              <Highlight>vision</Highlight>
            </div>
          </div>

          <div className="md:col-span-12">
            <TextRevealCardPreview />
          </div>
        </div>

        <div className="md:col-span-12 border-t-2 text-center text-4xl mt-10 text-black">
          <div className="mt-10">Client Success</div>
          <div className="mt-4 text-xl">
            Do not Take Our Word For It. Read Our Client Success Stories
          </div>
        </div>

        <div className="md:col-span-12">
          <UseCardStack />
        </div>

        <div className="align-middle md:col-span-12 text-center">
          <Link
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
            href={"https://www.youtube.com/@WowHealth_1"}
          >
            More Testinomial
          </Link>
        </div>
      </div>
    </>
  );
}
