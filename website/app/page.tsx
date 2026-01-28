import Image from "next/image";
import HeroSection from "./components/hero_section";
import AboutSection from "./components/about_section";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <HeroSection/>
       <AboutSection/>
       
      </main>
    </div>
  );
}
