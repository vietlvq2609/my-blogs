import Container from "@/app/_shared/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        <section className="flex flex-col items-center justify-center min-h-[60vh] mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
            Welcome to Viktor Le&apos;s Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 text-center max-w-2xl">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </section>
      </Container>
    </main>
  );
}
