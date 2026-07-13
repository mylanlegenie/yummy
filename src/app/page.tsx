import NavBar from "../app/component/NavBar";
import HeroSection from "../app/component/HeroSection";
import BestSeller from "./component/BestSeller";
import Plan from "./component/Plan";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section } = await searchParams;
  return (
    <>
      <NavBar />
      {section === "menu" ? (
        <></>
      ) : section === "contact" ? (
        <></>
      ) : (
        <>
          <HeroSection />
          <BestSeller />
          <Plan />
        </>
      )}
    </>
  );
}
