import Container from "@/app/_shared/_components/container";
import {
  BentoGridSection,
  HeroSection,
  WorkExperienceSection,
} from "./_components";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Container>
        <HeroSection />
        <BentoGridSection />
        <WorkExperienceSection />
      </Container>
    </main>
  );
}
