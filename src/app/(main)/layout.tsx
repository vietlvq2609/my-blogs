import Container from "../_shared/_components/container";
import Footer from "../_shared/_components/footer";
import Header from "../_shared/_components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
