import { AboutSection, CarLineupSection, ContactSection, EducationSection, HeroSection, ProjectSection, SkillSection } from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <ProjectSection />
      <CarLineupSection />
      <ContactSection />
    </main>
  );
}
