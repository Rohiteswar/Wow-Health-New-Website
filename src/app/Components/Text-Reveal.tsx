"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "./ui/Text-reveal-Card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#ffffff] h-[20rem] rounded-2xl w-full">
      <TextRevealCard
        text="Through tailored plans"
        revealText="Your goals we surmise"
      >
        <TextRevealCardTitle>Wow Health - Slide To See Our Success Secret</TextRevealCardTitle>
        <TextRevealCardDescription>
          From BMI checks to plans precise,
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
