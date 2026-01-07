import {
  Navbar,
  Hero,
  Partners,
  Features,
  Products,
  Archive,
  Ecosystem,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Products />
        <Archive />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
