import Link from "next/link";
import HamburgerIcon from "../icons/Hamburger";

const footerLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Cookies", href: "/politique-de-cookies" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#23140F]/10 bg-white/55">
      <div className="mx-auto flex w-[88vw] max-w-350 flex-col items-center justify-between gap-6 py-8 text-center sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-3 text-[#23140F]">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#E83F25] text-white">
            <HamburgerIcon size={24} />
          </span>
          <span className="font-bold">Yummy! FastFood</span>
        </Link>

        <nav
          aria-label="Liens de pied de page"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-[#67483D]"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#E83F25]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-[#67483D]">
          © {new Date().getFullYear()} Yummy! FastFood
        </p>
      </div>
    </footer>
  );
}
