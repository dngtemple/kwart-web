import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

import { FaGraduationCap } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaPortrait } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";

import { Link } from "react-router-dom";


const services = () => {
  return (
    <div className="min-h-screen sm:min-h-64 bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />

        <LocationBlock />
        <LocationBlock1 />
        <LocationBlock2 />
        <LocationBlock3 />

      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-l font-medium leading-tight">
      Hi, I'm Kojo Kwarteng,{" "}
      <span className="text-zinc-400 text-xm">
        I provide the art of photography that transcends the ordinary and connects with the soul.
      </span>
    </h1>
    <a
      href="https://forms.gle/irj4RT1jDB88iwG26"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);



const LocationBlock = () => (

  <Link to="/wedding" className="contents">
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 hover:bg-neutral-700">
    <BiMaleFemale className="text-3xl" />
    <p className="text-center text-l text-zinc-400">Wedding Photography</p>
  </Block>
  </Link>
);

const LocationBlock1 = () => (
  <Link to="/graduation" className="contents">

  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 hover:bg-neutral-700">
    <FaGraduationCap className="text-3xl" />
    <p className="text-center text-l text-zinc-400">Graduation Photography</p>
  </Block>
  </Link>);

const LocationBlock2 = () => (
  <Link to="/travel" className="contents">

  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 hover:bg-neutral-700">
    <GiCommercialAirplane className="text-3xl" />
    <p className="text-center text-l text-zinc-400">Travel Photography</p>
  </Block>
  </Link>
);

const LocationBlock3 = () => (
  <Link to="/portraits" className="contents">
  <Block   className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 hover:bg-neutral-700">
    <FaPortrait className="text-3xl" />
    <p  className="text-center text-l text-zinc-400">Portraits</p>
  </Block>
  </Link>
);








export default services;