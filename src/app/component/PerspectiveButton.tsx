"use client";
import Link from "next/link";
type TextProp = {
  text: string;
  href: string;
  className?: string;
};
export default function PerspectiveButton({ text, href, className }: TextProp) {
  return (
    <Link
      href={href}
      className={`inline-block w-full -translate-y-0.5 select-none rounded-full border border-[#F45B43] bg-[#E83F25] px-6 py-3 font-extrabold text-white shadow-[0_7px_0_#9F2515] transition-all duration-150 hover:-translate-y-1 hover:bg-[#F0442B] hover:shadow-[0_8px_0_#9F2515] active:translate-y-1 active:shadow-[0_2px_0_#9F2515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E83F25] ${className}`}
    >
      {text}
    </Link>
  );
}
