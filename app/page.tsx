import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ValueProps from "@/components/ValueProps";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <ValueProps />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
