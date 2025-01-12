import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";

import { FaGraduationCap, FaPortrait } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";

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

        {servicesList.map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => (
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
      "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 hover:bg-neutral-700 transition",
      className
    )}
    {...rest}
  />
);

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-l font-medium leading-tight">
      Hi, I'm Kojo Kwarteng, {" "}
      <span className="text-zinc-400 text-xm">
        I provide the art of photography that transcends the ordinary and connects with the soul.
      </span>
    </h1>
    <a
      href="https://docs.google.com/forms/d/1h2ixT9YGVkMjTj_pNQ0VjtbP0zbqzQMokKJS-pra6wM"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const ServiceBlock = ({ icon: Icon, label, link }) => (
  <a href={link} className="contents">
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <Icon className="text-3xl" />
      <p className="text-center text-l underline text-zinc-400">{label}</p>
    </Block>
  </a>
);

const servicesList = [
  {
    icon: BiMaleFemale,
    label: "Wedding Photography",
    link: "/wedding",
  },
  {
    icon: FaGraduationCap,
    label: "Graduation Photography",
    link: "/graduation",
  },
  {
    icon: GiCommercialAirplane,
    label: "Travel Photography",
    link: "/travel",
  },
  {
    icon: FaPortrait,
    label: "Portraits",
    link: "/portraits",
  },
];

export default services;
