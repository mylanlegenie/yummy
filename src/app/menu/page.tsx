import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { ChefHat } from "lucide-react";
import NavBar from "../component/NavBar";
import DishCard from "./DishCard";
import {
  AnimatedCard,
  AnimatedHero,
  FloatingShape,
  Reveal,
  SmoothScrollLink,
} from "./menu-animations";
import { MENU_CATEGORIES } from "./menu-data";

const fredoka = Fredoka({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Notre menu | Yummy! FastFood",
  description:
    "Découvrez les burgers, accompagnements, snacks et douceurs de Yummy! FastFood.",
};

export default function Menu() {
  return (
    <>
      <NavBar />
      <main className="mx-auto w-[88vw] max-w-350 pb-24">
        <AnimatedHero className="relative mt-16 overflow-hidden rounded-[3rem] border border-[#EDCC82] bg-[#FFE2A3] px-6 py-14 text-center sm:px-12 sm:py-18">
          <FloatingShape className="absolute -left-12 -top-16 size-48 rounded-full bg-[#F0442B] opacity-90" />
          <FloatingShape
            className="absolute -bottom-20 -right-10 size-60 rounded-full bg-[#FFC239]"
            delay={0.6}
            reverse
          />
          <FloatingShape
            className="absolute right-[12%] top-8 size-16 rounded-full bg-[#FFF7E8]"
            delay={1.1}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div
              className={`${nunito.className} mx-auto flex w-fit items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#E83F25]`}
            >
              <ChefHat className="size-5" />
              La carte Yummy
            </div>
            <h1
              className={`${fredoka.className} mt-5 text-4xl font-bold leading-tight text-[#23140F] sm:text-6xl`}
            >
              Choisis ton prochain favori
            </h1>
            <p
              className={`${nunito.className} mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#67483D] sm:text-xl`}
            >
              Des recettes simples, généreuses et préparées à la commande avec
              des ingrédients qui donnent vraiment faim.
            </p>
          </div>
        </AnimatedHero>

        <Reveal delay={0.15}>
          <nav
            aria-label="Catégories du menu"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {MENU_CATEGORIES.map((category) => (
              <SmoothScrollLink
                key={category.id}
                targetId={category.id}
                className={`${nunito.className} rounded-full border border-[#23140F]/10 bg-white px-5 py-2.5 font-extrabold text-[#67483D] transition hover:-translate-y-0.5 hover:border-[#E83F25] hover:bg-[#FFF0C4] hover:text-[#E83F25]`}
              >
                {category.title}
              </SmoothScrollLink>
            ))}
          </nav>
        </Reveal>

        <div className="mt-20 space-y-20">
          {MENU_CATEGORIES.map((category) => {
            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-8"
              >
                <Reveal>
                  <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                    <div>
                      <h2
                        className={`${fredoka.className} mt-2 text-4xl font-bold text-[#23140F] sm:text-5xl`}
                      >
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {category.dishes.map((dish, index) => (
                    <AnimatedCard
                      key={dish.name}
                      className="h-full"
                      delay={index * 0.07}
                    >
                      <DishCard
                        dish={dish}
                        icon={category.icon}
                        iconBackground={category.iconBackground}
                        iconColor={category.iconColor}
                      />
                    </AnimatedCard>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
