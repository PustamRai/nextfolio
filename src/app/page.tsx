import HeroSection from "@/components/hero-section";
import AboutPage from "@/components/about-section/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
   return (
      <main>
         <HeroSection />
         <AboutPage />
         <Skills />
         <Projects />
      </main>
   );
}
