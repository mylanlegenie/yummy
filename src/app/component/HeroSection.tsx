"use client";
import { Fredoka } from "next/font/google";
import { Nunito } from "next/font/google";
import Phone from "../icons/Phone";
import ForkNKnife from "../icons/ForkNKnife";
import HamburgerIcon from "../icons/Hamburger";
import { DiaTextReveal } from "../../components/ui/dia-text-reveal";

import { motion } from "motion/react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "800",
});
const fredoka = Fredoka({
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <section className="mx-auto flex w-[88vw] max-w-350 flex-row items-center justify-center gap-16 py-10 lg:items-start lg:justify-between lg:gap-20">
      <div className="mt-10 w-full max-w-125 lg:mt-20 flex items-center justify-center flex-col lg:items-start lg:justify-start">
        <DiaTextReveal
          className={
            " text-[#23140F] text-7xl font-bold tracking-tight block whitespace-nowrap " +
            fredoka.className
          }
          text="Le fast-food"
          colors={["#F0442B"]}
          textColor="#23140F"
        />
        <DiaTextReveal
          className={
            "text-7xl text-[#23140F]  font-bold tracking-tight block whitespace-nowrap " +
            fredoka.className
          }
          text="simple qui"
          colors={["#F0442B"]}
          textColor="#23140F"
        />
        <DiaTextReveal
          className={
            "text-7xl text-[#23140F]  font-bold tracking-tight block whitespace-nowrap " +
            fredoka.className
          }
          text="donne faim."
          colors={["#F0442B"]}
          textColor="#23140F"
        />
        <p className="mt-6 text-justify text-xl leading-8 text-[#67483D] sm:text-2xl sm:leading-9">
          Burgers moelleux, frites dorées, snacks croustillants et formules à
          emporter — préparés vite, servis avec le sourire.
        </p>
        <div className="mt-5 flex flex-wrap gap-5">
          <button
            className={`${nunito.className} flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E83F25] px-5.5 py-3.75 font-extrabold text-white`}
          >
            Voir le menu
            <ForkNKnife size={25} />
          </button>
          <button
            className={`${nunito.className} flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#23140f]/12 bg-white px-5 py-3.75 font-extrabold text-[#23140F] hover:bg-[#FFF0C4] duration-400`}
          >
            <Phone size={22} />
            Appeler
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -30 }}
        className="hidden lg:flex relative h-[88vw] w-[88vw] shrink-0 overflow-hidden rounded-[4.5rem] border border-[#edcc82] bg-[#FFE2A3] shadow-[inset_0_0_60px_rgba(255,255,255,0.16)] lg:mt-10 lg:h-[70vh] lg:max-h-155 lg:w-[43vw] lg:max-w-155"
      >
        <div className="absolute left-[8%] top-[9%] size-[30vw] max-h-52.5 max-w-52.5 rounded-full bg-[#F0442B] lg:size-[15vw]" />
        <div className="absolute right-[7%] top-[16%] size-[23vw] max-h-40 max-w-40 rounded-full bg-[#FFF7E8] lg:size-[11vw]" />
        <div className="absolute bottom-[10%] right-[10%] size-[33vw] max-h-58.75 max-w-58.75 rounded-full bg-[#FFC239] lg:size-[17vw]" />

        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -10 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="absolute left-1/2 top-1/2 flex h-[56vw] max-h-100 w-[58vw] max-w-102.5 -translate-x-1/2 -translate-y-1/2 -rotate-3 flex-col items-center justify-center rounded-[3rem] border border-[#e4e4e4] bg-white px-8 text-center shadow-[0_18px_35px_rgba(95,63,16,0.13)] lg:h-[45vh] lg:w-[29vw]"
        >
          <HamburgerIcon
            size={130}
            className="mb-[4vh] h-[14vw] max-h-35 max-w-35 text-[#F0442B] "
          />
          <p
            className={`${fredoka.className} text-[clamp(1.5rem,3.1vw,2.7rem)] font-bold leading-tight text-[#23140F]`}
          >
            Burger signature
          </p>
          <p
            className={`${fredoka.className} mt-4 text-[clamp(1rem,1.9vw,1.65rem)] font-semibold text-[#F0442B]`}
          >
            Menu dès 9,90 €
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
