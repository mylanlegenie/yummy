import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Fredoka, Nunito } from "next/font/google";
import NavBar from "../component/NavBar";
import {
  AnimatedCard,
  AnimatedHero,
  FloatingShape,
  Reveal,
} from "../menu/menu-animations";

const fredoka = Fredoka({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "À propos | Yummy! FastFood",
  description:
    "Horaires, adresse, téléphone et informations pratiques de Yummy! FastFood.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "01 84 80 20 20",
    href: "tel:+33184802020",
    action: "Nous appeler",
    iconClassName: "bg-[#E83F25] text-white",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contact@yummy-fastfood.fr",
    href: "mailto:contact@yummy-fastfood.fr",
    action: "Nous écrire",
    iconClassName: "bg-[#FFC239] text-[#23140F]",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "12 rue des Gourmands, 75011 Paris",
    href: "https://www.google.com/maps/search/?api=1&query=12+rue+des+Gourmands+75011+Paris",
    action: "Voir l’itinéraire",
    iconClassName: "bg-[#23140F] text-white",
  },
];

const openingHours = [
  { days: "Lundi — Jeudi", hours: "11h30 — 22h30" },
  { days: "Vendredi — Samedi", hours: "11h30 — 23h30" },
  { days: "Dimanche", hours: "12h00 — 22h00" },
];

const services = [
  {
    icon: Utensils,
    title: "Sur place",
    description: "Installez-vous et profitez de notre salle chaleureuse.",
  },
  {
    icon: ShoppingBag,
    title: "À emporter",
    description: "Commandez, récupérez votre repas et dégustez où vous voulez.",
  },
  {
    icon: Bike,
    title: "En livraison",
    description: "Vos favoris Yummy! directement devant votre porte.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className={`${nunito.className} overflow-hidden pb-24`}>
        <section className="relative mx-auto w-[88vw] max-w-350 py-14 sm:py-20">
          <FloatingShape className="absolute -right-16 top-8 size-48 rounded-full bg-[#FFC239]/65 blur-sm" />
          <FloatingShape
            reverse
            delay={0.8}
            className="absolute -left-24 top-64 size-40 rounded-full bg-[#E83F25]/15"
          />

          <AnimatedHero className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="font-extrabold uppercase tracking-[0.18em] text-[#E83F25]">
              Toutes les infos utiles
            </p>
            <h1
              className={`${fredoka.className} mt-4 text-5xl font-bold tracking-tight text-[#23140F] sm:text-7xl`}
            >
              À propos de Yummy!
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#67483D] sm:text-xl">
              Une question, une envie de commander ou simplement besoin de
              nous trouver ? Retrouvez ici nos coordonnées, nos horaires et
              toutes les informations pratiques.
            </p>
          </AnimatedHero>

          <div className="relative z-10 mt-12 grid gap-5 lg:grid-cols-3">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <AnimatedCard key={detail.label} delay={index * 0.1}>
                  <a
                    href={detail.href}
                    target={detail.label === "Adresse" ? "_blank" : undefined}
                    rel={detail.label === "Adresse" ? "noreferrer" : undefined}
                    className="group flex h-full min-h-64 flex-col rounded-[2rem] border border-[#23140F]/10 bg-white p-7 shadow-[0_16px_35px_rgba(95,63,16,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(95,63,16,0.13)]"
                  >
                    <span
                      className={`flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${detail.iconClassName}`}
                    >
                      <Icon className="size-7" />
                    </span>
                    <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.14em] text-[#E83F25]">
                      {detail.label}
                    </p>
                    <h2
                      className={`${fredoka.className} mt-2 text-2xl font-bold leading-snug text-[#23140F]`}
                    >
                      {detail.value}
                    </h2>
                    <span className="mt-auto flex items-center gap-2 pt-6 font-extrabold text-[#67483D] transition-colors group-hover:text-[#E83F25]">
                      {detail.action}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </AnimatedCard>
              );
            })}
          </div>
        </section>

        <section className="bg-white/55 py-20">
          <div className="mx-auto grid w-[88vw] max-w-350 items-stretch gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <article className="flex h-full flex-col rounded-[2.5rem] bg-[#23140F] p-8 text-white sm:p-10">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-[#FFC239] text-[#23140F]">
                  <Clock3 className="size-7" />
                </span>
                <p className="mt-7 font-extrabold uppercase tracking-[0.16em] text-[#FFC239]">
                  Horaires d’ouverture
                </p>
                <h2
                  className={`${fredoka.className} mt-2 text-4xl font-bold sm:text-5xl`}
                >
                  Quand venir ?
                </h2>
                <div className="mt-8 divide-y divide-white/15">
                  {openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex flex-col gap-1 py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <span className="font-bold text-white/75">{item.days}</span>
                      <span
                        className={`${fredoka.className} text-xl font-bold text-white`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-auto rounded-2xl bg-white/8 px-5 py-4 text-sm leading-relaxed text-white/65">
                  Les horaires peuvent varier pendant les jours fériés. Un
                  petit appel avant de venir et vous êtes tranquille !
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative grid h-full min-h-110 grid-cols-2 overflow-hidden rounded-[2.5rem] border-4 border-white bg-[#FFE2A3] shadow-[0_20px_40px_rgba(95,63,16,0.12)]">
                <Image
                  src="/facade1.png"
                  alt="Intérieur de Yummy! FastFood, côté gauche"
                  width={487}
                  height={362}
                  className="h-full w-full object-cover"
                />
                <Image
                  src="/facade2.png"
                  alt="Intérieur de Yummy! FastFood, côté droit"
                  width={487}
                  height={362}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/92 p-5 text-center shadow-xl backdrop-blur sm:inset-x-8 sm:bottom-8">
                  <p
                    className={`${fredoka.className} text-2xl font-bold text-[#23140F] sm:text-3xl`}
                  >
                    12 rue des Gourmands, Paris 11e
                  </p>
                  <p className="mt-1 font-semibold text-[#67483D]">
                    Métro Voltaire · Sortie 2 · À 3 minutes à pied
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-[88vw] max-w-350 py-20 text-center">
          <Reveal>
            <p className="font-extrabold uppercase tracking-[0.16em] text-[#E83F25]">
              Comme vous préférez
            </p>
            <h2
              className={`${fredoka.className} mt-3 text-4xl font-bold text-[#23140F] sm:text-5xl`}
            >
              Trois façons de se régaler
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <article className="h-full rounded-[2rem] border border-[#23140F]/10 bg-white p-7 transition duration-300 hover:border-[#E83F25]/30 hover:bg-[#FFFDF9]">
                    <Icon className="mx-auto size-9 text-[#E83F25]" />
                    <h3
                      className={`${fredoka.className} mt-5 text-2xl font-bold text-[#23140F]`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#67483D]">
                      {service.description}
                    </p>
                  </article>
                </AnimatedCard>
              );
            })}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-[#E83F25] px-7 py-4 font-extrabold text-white shadow-[0_6px_0_#9F2515] transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_#9F2515] active:translate-y-0.5 active:shadow-[0_2px_0_#9F2515]"
            >
              Découvrir le menu
              <ArrowRight className="size-5" />
            </Link>
          </Reveal>
        </section>
      </main>
    </>
  );
}
