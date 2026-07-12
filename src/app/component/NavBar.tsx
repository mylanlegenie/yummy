import HamburgerIcon from "../icons/Hamburger";
import { Fredoka } from "next/font/google";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});
const fredoka = Fredoka({
  subsets: ["latin"],
});

export default function NavBar() {
  const RUBRIQUES = [
    { name: "Accueil", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <nav className="flex w-full mx-auto mt-20 justify-around items-center ">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center p-2 bg-[#E83F25] rounded-2xl w-12">
          <HamburgerIcon size={30} className="text-white" />
        </div>
        <h1
          className={`text-2xl text-[#23140F] ${fredoka.className} font-bold`}
        >
          Yummy! FastFood
        </h1>
      </div>
      <div className="flex items-center justify-center gap-8 ">
        {RUBRIQUES.map((rubrique) => (
          <a
            key={rubrique.name}
            href={rubrique.href}
            className="text-[#5D4036] font-semibold hover:text-[#E83F25] transition-colors duration-300"
          >
            {rubrique.name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className={`bg-[#23140F] text-white py-2 px-4 rounded-full  ${nunito.className} font-bold`}
        >
          Commander
        </button>
      </div>
    </nav>
  );
}
