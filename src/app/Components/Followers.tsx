import Image from "next/image";
import Fonder from "../../../public/hussain.jpg";

import thumbnail from "../../../public/thumbnail.jpg";
import { FollowerPointerCard } from "./ui/Following-Pointer";
import Link from "next/link";

export function FollowingPointer() {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              height="1"
              width="320"
              // layout="fill"
              // objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <Link className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs" href="/Join">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "Wow-Health's-grid-layouts",
  author: "Hussain Shaik",
  date: "21st March, 2024",
  title:
    "Meet Our Dynamic Team Driving Wow Health's Affordable Wellness Revolution",
  description:
    "Discover the driving force behind Wow Health's mission: Founder Hussain Shaik, Co-founder Praveen, and Trainer Janu. Together, we're committed to making healthy Lifestyle accessible to all, breaking down cost barriers for a healthier tomorrow.",
  image: "/thumbnail.jpg",
  authorAvatar: "/hussain.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
