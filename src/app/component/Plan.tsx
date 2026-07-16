"use client";
import Image from "next/image";
import { Fredoka, Nunito } from "next/font/google";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import PerspectiveButton from "./PerspectiveButton";

const MotionImage = motion.create(Image);
const fredoka = Fredoka({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function LocationSection() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="nous-trouver"
      className="relative z-10 mx-auto my-20 w-[88vw] max-w-350 scroll-mt-8 text-center"
    >
      <p
        className={`${nunito.className} text-lg font-extrabold uppercase tracking-wide text-[#E83F25] sm:text-xl`}
      >
        Envie d&apos;un Yummy ?
      </p>
      <h2
        className={`${fredoka.className} mt-3 text-4xl font-bold text-[#23140F] sm:text-5xl`}
      >
        Retrouvez-nous
      </h2>
      <p
        className={`${nunito.className} mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#67483D] sm:text-lg`}
      >
        Venez découvrir{" "}
        <span className="font-extrabold text-[#E83F25]">Yummy! FastFood</span>,
        à deux pas de votre quartier. Nous vous accueillons avec des recettes
        généreuses, préparées rapidement et avec passion.
      </p>

      <div className="mt-8 rounded-[2rem] border-2 border-[#23140F]/12 bg-white p-3 shadow-[0_18px_35px_rgba(95,63,16,0.10)] sm:p-4">
        <div
          ref={containerRef}
          className="relative mx-auto min-h-80 w-full overflow-hidden rounded-[1.4rem] sm:min-h-90"
          style={{
            aspectRatio: "974 / 362",
            height: "auto",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41986.00609450645!2d2.464657439453113!3d48.874886317986814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6734ae1c8dabd%3A0xff7b1228e00744e4!2sLe%20Tiger%20Asian%20FOOD!5e0!3m2!1sfr!2sfr!4v1753626946544!5m2!1sfr!2sfr"
            title="Localisation de Yummy FastFood"
            className="absolute inset-0 z-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <MotionImage
            src="/facade1.png"
            alt="facade gauche"
            width={487}
            height={362}
            className="absolute left-0 top-0 z-10 h-full w-1/2 object-cover"
            initial={{ x: "0%" }}
            animate={inView ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <MotionImage
            src="/facade2.png"
            alt="facade droite"
            width={487}
            height={362}
            className="absolute right-0 top-0 z-10 h-full w-1/2 object-cover"
            initial={{ x: "0%" }}
            animate={inView ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto mt-4 w-full">
          <PerspectiveButton
            text="Voir sur Google Maps"
            href=""
            className={nunito.className}
          />
        </div>
      </div>
    </section>
  );
}
