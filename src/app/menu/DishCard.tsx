import { type Dish, type MenuCategory } from "./menu-data";
import { Fredoka, Nunito } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
export default function DishCard({
  dish,
  icon: Icon,
  iconBackground,
  iconColor,
}: {
  dish: Dish;
  icon: MenuCategory["icon"];
  iconBackground: string;
  iconColor: string;
}) {
  return (
    <article className="group flex min-h-64 h-full flex-col justify-between rounded-3xl border-2 border-[#23140F]/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E83F25]/30 hover:shadow-[0_16px_30px_rgba(95,63,16,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${iconBackground}`}
        >
          <Icon className={`size-7 ${iconColor}`} strokeWidth={2.3} />
        </div>
        <span
          className={`${fredoka.className} shrink-0 rounded-full bg-[#23140F] px-4 py-2 text-base font-bold text-white`}
        >
          {dish.price}
        </span>
      </div>

      <div className="mt-8">
        <h3
          className={`${fredoka.className} text-2xl font-bold leading-tight text-[#23140F]`}
        >
          {dish.name}
        </h3>
        <p
          className={`${nunito.className} mt-2 text-sm leading-relaxed text-[#67483D] sm:text-base`}
        >
          {dish.description}
        </p>
      </div>
    </article>
  );
}
