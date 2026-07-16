"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type MenuItem = {
  name: string;
  href: string;
};

type BurgerMenuProps = {
  items: MenuItem[];
  fontClassName?: string;
};

export default function BurgerMenu({
  items,
  fontClassName = "",
}: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigationId = useId();

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls={navigationId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex cursor-pointer items-center justify-center rounded-xl bg-[#23140F] p-4 text-white shadow-[0_3px_0_#100A08] transition-transform active:translate-y-0.5 md:hidden"
      >
        <span className="sr-only">
          {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        </span>
        <span className="relative block h-5 w-6" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={navigationId}
            role="navigation"
            aria-label="Navigation mobile"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 mt-3 flex origin-top flex-col gap-2 rounded-2xl border-b border-[#23140F]/10 bg-[#FFF6E8] p-4 shadow-xl md:hidden"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-5 py-3 text-lg font-semibold text-[#5D4036] transition-colors hover:bg-[#FFF1ED] hover:text-[#E83F25] ${fontClassName}`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
