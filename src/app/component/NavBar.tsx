import HamburgerIcon from "../icons/Hamburger";
import { Fredoka } from "next/font/google";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
});
const fredoka = Fredoka({
  subsets: ["latin"],
});

export default function NavBar() {
  const RUBRIQUES = [
    { name: "Accueil", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex w-full mx-auto mt-20 justify-around items-center ">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center p-2 bg-[#E83F25] rounded-2xl w-12">
          <HamburgerIcon size={30} className="text-white" />
        </div>
        <Link
          href="/"
          className={`text-2xl text-[#23140F] ${fredoka.className} font-bold cursor-pointer`}
        >
          <h1>Yummy! FastFood</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8 ">
        {RUBRIQUES.map((rubrique) => (
          <Link
            key={rubrique.name}
            href={rubrique.href}
            className={`text-[#5D4036] font-semibold text-lg hover:text-[#E83F25] transition-colors duration-300 ${fredoka.className} cursor-pointer`}
          >
            {rubrique.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://deliveroo.fr/fr/?utm_source=google&utm_medium=cpc&utm_term=uber%20eats&utm_campaign=%2A%2A%5EAcquisition%5ESearch%5ECompetitor%5EFrance%5ENewCustomers%5EAll%20Cities%5E%5EBroad%5EAPI%5E%5E%5E%5EUber%20Eats%5EFR%5ELifecycle%5E%C2%A323750477918&utm_loc=9197145&utm_device=c&utm_adposition=&utm_network=g&utm_targetid=kwd-111378724137&gclsrc=aw.ds&gad_source=1&gad_campaignid=23750477918&gbraid=0AAAAADgqrWXRx2hd9Gv0O9YunfpC48wFb&gclid=CjwKCAjwmdLSBhANEiwAkREMN2ysAGbBRfggRilOxC_40irZ2VlnlTOceTYO52CXoursjDLNCqizjBoCogcQAvD_BwE"
          target="_blank"
        >
          <button
            className={`bg-[#23140F] text-white py-2 px-4 rounded-full  ${nunito.className} font-bold cursor-pointer`}
          >
            Commander
          </button>
        </a>
      </div>
    </nav>
  );
}
