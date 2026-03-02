import { getAllPosts } from "@/lib/api";
import {
  BlogSection,
  DevChecklistSection,
  FeaturedWorkSection,
  HeroSection,
  SkillsBentoSection,
} from "./_components";

export default function Index() {
  const posts = getAllPosts();

  return (
    <main>
      <HeroSection />
      <FeaturedWorkSection />
      <SkillsBentoSection />
      <BlogSection posts={posts} />
      <DevChecklistSection />
    </main>
  );
}
