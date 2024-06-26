"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
interface AchievemntItem {
  metric: string;
  value: number;
  prefix?: string;
  postfix?: string;
}
const achievementsList: AchievemntItem[] = [
  {
    metric: "Disappointments",
    value: 1000,
    postfix: "+",
  },
  {
    metric: "Days wasted",
    value: 10000,
    postfix: "+",
  },
  {
    metric: "Moments worth living",
    prefix: "~",
    value: 10,
  },
];
const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:py-16 sm:px-8">
      <div className="border-[#33353F] border rounded-md py-8 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-around">
        {achievementsList.map((achivement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-2 my-4 sm:my-0 sm:mx-4"
            >
              <h2 className="text-white text-2xl sm:text-4xl font-bold flex flex-row">
                {achivement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achivement.value}
                  locale="en-US"
                  className="text-white text-2xl sm:text-4xl font-bold"
                  transitions={(index) => {
                    return {
                      duration: index * 0.5,
                    };
                  }}
                />
                {achivement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-sm sm:text-base">
                {achivement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
