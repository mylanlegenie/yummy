import NavBar from "../app/component/NavBar";
import HeroSection from "../app/component/HeroSection";
import BestSeller from "./component/BestSeller";
import Plan from "./component/Plan";
export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BestSeller />
      <Plan />
    </>
  );
}
