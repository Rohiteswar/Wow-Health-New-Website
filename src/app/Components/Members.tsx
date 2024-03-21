"use client";
import React from "react";

import fonder from "../../../public/hussain.jpg";
import cofonder from "../../../public/praveen.jpg";
import trainer from "../../../public/trainer.jpg";
import { AnimatedTooltip } from "./ui/Animated_ToolKit";

const people = [
  {
    id: 1,
    name: "Hussain Shaik",
    designation: "Founder",
    image: "/hussain.jpg",
  },
  {
    id: 2,
    name: "Praveen",
    designation: "Co-Founder",
    image: "/praveen.jpg",
  },
  {
    id: 3,
    name: "Janu",
    designation: "Trainer",
    image: "/trainer.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
