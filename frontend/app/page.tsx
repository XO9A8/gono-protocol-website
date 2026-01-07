import {
  Navbar,
  Hero,
  Partners,
  Features,
  HowItWorks,
  Architecture,
  Products,
  X402Micropayment,
  UseCases,
  Archive,
  Ecosystem,
  FAQ,
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
        <HowItWorks />
        <Architecture />
        <Products />
        <X402Micropayment />
        <UseCases />
        <Archive />
        <Ecosystem />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
