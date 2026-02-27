import Container from "@/app/_shared/_components/container";
import Header from "@/app/_shared/_components/header";
import { HeroPost } from "@/app/_shared/_components/hero-post";
import { MoreStories } from "@/app/_shared/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function BlogsPage() {
  const allPosts = getAllPosts();

  if (allPosts.length === 0) {
    return (
      <main>
        <Container>
          <Header />
          <section className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Blogs</h1>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              No blog posts yet. Check back soon!
            </p>
          </section>
        </Container>
      </main>
    );
  }

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Header />
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4">
            Blogs
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </section>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
