import Image from "next/image";
import Header from "@/components/header";
import ProductDisplay from "@/components/productsDisplay";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import Footer from "@/components/footer";
import WatchesSection from "@/components/newarrives";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection /> 
      <WatchesSection />
      <ProductDisplay />
      <ContactSection />
      <Footer />
    </main>
  );
}
