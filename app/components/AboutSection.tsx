"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton, { TabButtonProps } from "./TabButton";
import { motion, useInView } from "framer-motion";

interface TAB_DATA_PROPS {
  title: string;
  id: string;
  content: JSX.Element;
}
const TAB_DATA: TAB_DATA_PROPS[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>me relly bad</li>
        <li>me no skill</li>
        <li>me sad</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master's Degree in Ice Cream Tasting</li>
        <li>Bachelor Degree in sleeping under 1 minute</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Coursera Attestation of Nothingness</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const selectedTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/about-image.png"
            alt="About me image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatem dicta id labore libero ab doloremque quia autem quod,
            tempore inventore modi perspiciatis sequi blanditiis dolorem
            exercitationem iste officia accusamus.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTab ? (
              selectedTab.content
            ) : (
              <p>No content available for this tab.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
