import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import FeaturedServices from "@/FeaturedServices";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <Portfolio />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA/>
    </main>
  );
}
