"use client";
import { Fredoka } from "next/font/google";
import { Nunito } from "next/font/google";
import Phone from "../icons/Phone";
import ForkNKnife from "../icons/ForkNKnife";
import HamburgerIcon from "../icons/Hamburger";
import { DiaTextReveal } from "../../components/ui/dia-text-reveal";
import { WordRotate } from "../../components/ui/word-rotate";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "800",
});
const fredoka = Fredoka({
  subsets: ["latin"],
});
export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /Android|iPhone|iPad|iPod|Opera Mini/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return (
    <section className="mx-auto flex w-[88vw] max-w-350 flex-row items-center justify-center gap-16 py-10 lg:items-start lg:justify-between lg:gap-20">
      <div className="mt-10 w-full max-w-125 lg:mt-20 flex items-center justify-center flex-col lg:items-start lg:justify-start">
        <DiaTextReveal
          className={
            " text-[#23140F] text-6xl  sm:text-7xl font-bold tracking-tight block whitespace-nowrap " +
            fredoka.className
          }
          text="Le fast-food"
          colors={["#F0442B"]}
          textColor="#23140F"
        />
        <DiaTextReveal
          className={
            "text-6xl sm:text-7xl text-[#23140F]  font-bold tracking-tight block whitespace-nowrap " +
            fredoka.className
          }
          text="simple qui"
          colors={["#F0442B"]}
          textColor="#23140F"
        />
        <DiaTextReveal
          className={
            "text-6xl sm:text-7xl text-[#23140F]  font-bold tracking-tight block whitespace-nowrap " +
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
        <div className="mt-5 flex flex-wrap gap-5 items-center justify-center md:justify-start ">
          <Link href="/menu">
            <button
              className={`${nunito.className} flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E83F25] px-5.5 py-3.75 font-extrabold text-white`}
            >
              Voir le menu
              <ForkNKnife size={25} />
            </button>
          </Link>
          {isMobile && (
            <button
              className={`${nunito.className} flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#23140f]/12 bg-white px-5 py-3.75 font-extrabold text-[#23140F] hover:bg-[#FFF0C4] duration-400`}
            >
              <Phone size={22} />
              Appeler
            </button>
          )}

          <div className="flex items-center justify-center gap-4 md:hidden">
            <a
              href="https://deliveroo.fr/fr/?utm_source=google&utm_medium=cpc&utm_term=uber%20eats&utm_campaign=%2A%2A%5EAcquisition%5ESearch%5ECompetitor%5EFrance%5ENewCustomers%5EAll%20Cities%5E%5EBroad%5EAPI%5E%5E%5E%5EUber%20Eats%5EFR%5ELifecycle%5E%C2%A323750477918&utm_loc=9197145&utm_device=c&utm_adposition=&utm_network=g&utm_targetid=kwd-111378724137&gclsrc=aw.ds&gad_source=1&gad_campaignid=23750477918&gbraid=0AAAAADgqrWXRx2hd9Gv0O9YunfpC48wFb&gclid=CjwKCAjwmdLSBhANEiwAkREMN2ysAGbBRfggRilOxC_40irZ2VlnlTOceTYO52CXoursjDLNCqizjBoCogcQAvD_BwE"
              target="_blank"
            >
              <button className=" w-40  -translate-y-px cursor-pointer rounded-full border border-white/80 bg-[#23140F] px-5 shadow-[0_4px_0_#100A08] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_5px_0_#100A08] active:translate-y-0.5 active:shadow-[0_1px_0_#100A08]">
                <WordRotate
                  className={`text-white ${nunito.className} font-bold text-lg`}
                  words={["Commander", "Déguster", "Se Régaler"]}
                />
              </button>
            </a>
          </div>
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
