import { Fredoka, Nunito } from "next/font/google";
import NavBar from "./NavBar";

const fredoka = Fredoka({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });

type LegalSection = {
  title: string;
  content: React.ReactNode;
};

export default function LegalPage({
  title,
  introduction,
  sections,
}: {
  title: string;
  introduction: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <NavBar />
      <main className={`${nunito.className} mx-auto w-[88vw] max-w-4xl pb-24 pt-14 sm:pt-20`}>
        <header className="border-b border-[#23140F]/10 pb-8">
          <p className="font-bold uppercase tracking-wide text-[#E83F25]">
            Informations légales
          </p>
          <h1 className={`${fredoka.className} mt-3 text-4xl font-bold text-[#23140F] sm:text-5xl`}>
            {title}
          </h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#67483D]">
            {introduction}
          </p>
        </header>

        <div className="mt-10 space-y-9 text-[#67483D]">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className={`${fredoka.className} text-2xl font-bold text-[#23140F]`}>
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed">{section.content}</div>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-2xl bg-[#FFE2A3] px-5 py-4 text-sm text-[#67483D]">
          Dernière mise à jour : 15 juillet 2026
        </p>
      </main>
    </>
  );
}
