"use client";
import React from "react";
import { TracingBeam } from "./ui/Traing_beam";
import Bmi from "./ui/Content/Bmi";
import Diet from "./ui/Content/Diet";
import Planning from "./ui/Content/Planning";


export function Journey() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-base text-slate-700 prose prose-sm dark:prose-invert">
              {item.svg}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const sentence =
  "At WOW Health Services, we prioritize understanding your body's metrics. Through our BMI assessment service, we provide insight into your body mass index relative to your age. This assessment serves as a foundational step in comprehending your current health condition, guiding our tailored approach towards holistic well-being.";

const sentence2 =
  "Take charge of your wellness journey with WOW Health Services' personalized weight management program. Utilizing data from your BMI report, we curate a comprehensive plan designed for your specific goals, whether it be weight loss or weight gain. Our expert guidance and tailored strategies empower you to achieve sustainable results and foster a healthier lifestyle.";

const sentence3 =
  "Elevate your health experience with the WOW Health Application subscription. Gain exclusive access to our innovative platform, where personalized plans are at your fingertips. Seamlessly integrated with our monitoring system, the application enables continuous tracking of your diet and progress. With WOW Health, embark on a journey towards optimal health and well-being, supported by technology and expertise.";

const dummyContent = [
  {
    title: "Understanding Your Body's Metrics",
    description: <>{sentence}</>,
    badge: "BMI Assessment",
    svg: <Bmi />,
  },
  {
    title: "Crafting Your Path to Wellness",
    description: <>{sentence2}</>,
    badge: "Personalized Weight Management",
    svg: <Planning />,
  },
  {
    title: "Your Personalized Health Companion",
    description: <>{sentence3}</>,
    badge: "WOW Health App Subscription",
    svg: <Diet />,
  },
];
