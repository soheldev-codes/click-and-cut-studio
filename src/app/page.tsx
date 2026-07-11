import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Navbar from "@/components/shared/Navbar";
import FeaturedServices from "@/FeaturedServices";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <Portfolio />
      <WhyChooseUs />
    </main>
  );
}
