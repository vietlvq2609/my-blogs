import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { HeroSection } from "@/app/_components/hero-section";
import { SkillsSection } from "@/app/_components/skills-section";
import { ExperienceSection } from "@/app/_components/experience-section";
import { EducationSection } from "@/app/_components/education-section";
import { ServicesSection } from "@/app/_components/services-section";
import { ContactSection } from "@/app/_components/contact-section";

export default function Index() {
  return (
    <main>
      <Container>
        <Header />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ServicesSection />
        <ContactSection />
      </Container>
    </main>
  );
}
