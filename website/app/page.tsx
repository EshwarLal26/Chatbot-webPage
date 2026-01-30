import HeaderSection from "./components/header_section";
import HeroSection from "./components/hero_section";
import ProblemSolutionSection from "./components/problem_solution_section";
import KeyFeaturesSection from "./components/key_feature_section";
import HowItWorksSection from "./components/how_work";
import FutureEnhancementsSection from "./components/future_enhancement_section";
import FooterSection from "./components/footer_section";

export default function HomePage() {
  return (
    <>
 

      <main >
        
        <section id="hero">
          <HeroSection />
        </section>

        <section id="problem-solution" data-aos="fade-up">
          <ProblemSolutionSection />
        </section>

        <section id="features" data-aos="fade-up">
          <KeyFeaturesSection />
        </section>

        <section id="how-it-works" data-aos="fade-up">
          <HowItWorksSection />
        </section>

        <section id="future" data-aos="fade-up">
          <FutureEnhancementsSection />
        </section>
      </main>

      <FooterSection />
    </>
  );
}
