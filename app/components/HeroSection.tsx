"use client";
import React from "react";
import Image from "next/image";
import TypingNameAnimation from "./TypingNameAnimation";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="col-span-7">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 place-self-center text-center sm:text-left"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#591207] to-[#f6ec4a] mt-10">
                <TypingNameAnimation />
              </span>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              maiores minima illum molestiae et saepe.
            </p>
            <div>
              {/*<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#591207] to-[#f6ec4a] hover-bg-slate-200 text-white">
                Hire Me
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#591207] to-[#f6ec4a] hover-bg-slate-200 hover:bg-slate-200 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Downdload CV
                </span>
              </button>*/}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-5 place-self-center mt-8 lg:mt-10"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
              <Image
                src="/images/profile-pic.png"
                alt="hero image"
                className="object-cover w-full h-full"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
