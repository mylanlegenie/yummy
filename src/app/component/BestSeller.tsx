import { Nunito } from "next/font/google";
import { Fredoka } from "next/font/google";
import HamburgerIcon from "../icons/Hamburger";
import { KineticText } from "../../components/ui/kinetic-text";
import { Reveal } from "../menu/menu-animations";

const fredoka = Fredoka({
  subsets: ["latin"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "800"],
});
type CardProps = {
  name: string;
  price: number;
  description: string;
};

function Card({ name, price, description }: CardProps) {
  return (
    <Reveal>
      <article className="flex min-h-[22vh] flex-col justify-between rounded-3xl border-2 border-[#23140F]/12 bg-white p-4 xl:p-5">
        <div className="mb-[2.25vh] flex items-start justify-between gap-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFE2A3] xl:size-16">
            <HamburgerIcon
              size={44}
              className="size-9 text-[#E83F25] xl:size-10"
            />
          </div>

          <div className="flex min-h-10 items-center justify-center rounded-full bg-[#23140F] px-4 py-1.5 xl:px-5">
            <span
              className={`${fredoka.className} whitespace-nowrap text-base font-bold text-white xl:text-lg`}
            >
              {price.toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </div>

        <div>
          <h3
            className={`${fredoka.className} text-2xl font-bold leading-tight text-[#23140F] xl:text-3xl`}
          >
            {name}
          </h3>
          <p
            className={`${nunito.className} mt-2.5 text-sm font-normal leading-relaxed text-[#67483D] xl:text-base`}
          >
            {description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function BestSeller() {
  const BEST_SELLERS = [
    {
      name: "Yummy Burger",
      price: 9.9,
      description:
        "Steak grillé, cheddar fondant, sauce maison, salade croquante et pain moelleux.",
    },
    {
      name: "Frites",
      price: 3.99,
      description:
        "Frites dorées et croustillantes, servies avec une sauce maison.",
    },
    {
      name: "Nuggets",
      price: 5.99,
      description:
        "Nuggets de poulet croustillants, servis avec une sauce barbecue.",
    },
    {
      name: "Salade",
      price: 6.99,
      description:
        "Salade fraîche avec des légumes croquants et une vinaigrette maison.",
    },
  ];
  return (
    <section className="mx-auto mt-20 w-[88vw] max-w-350 flex flex-col items-center">
      <h2
        className={`uppercase text-[#E83F25] ${nunito.className} font-extrabold text-4xl`}
      >
        Nos BestSellers
      </h2>
      <KineticText
        text="Les Classiques qui font revenir"
        className={`text-[#23140F] select-none ${fredoka.className} text-5xl mt-5 font-extrabold`}
      />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {BEST_SELLERS.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
