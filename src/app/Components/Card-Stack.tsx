"use client";

import { cn } from "../utils/cn";
import { CardStack } from "./ui/CardStack";

export function UseCardStack() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const content_2 = "Health's"
const CARDS = [
  {
    id: 0,
    name: "Madhu",
    designation: "Railway Officer",
    content: (
      <p>
       Wow Health transformed my journey. <Highlight> Personalized plans </Highlight> and easy tracking tools made all the difference. Feeling great thanks to Wow Health.
      </p>
    ),
  },
  {
    id: 1,
    name: "Madhavi",
    designation: "House-Wife",
    content: (
      <p>
        Wow {content_2} app is a <Highlight> game-changer!</Highlight> With tailored diet plans and intuitive monitoring, I have seen real results.
      </p>
    ),
  },
  {
    id: 2,
    name: "Surya",
    designation: "Software Engineer",
    content: (
      <p>Impressed by the simplicity and effectiveness of Wow Health.<Highlight> Highly recommend </Highlight>for anyone serious about their health.
      </p>
    ),
  },
];
