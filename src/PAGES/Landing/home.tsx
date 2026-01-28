import { HeroSection } from "./components";
import { Navbar } from "./components/navbar";
import { HowItWorksSection } from "./components/work";

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
    </>
  );
}
