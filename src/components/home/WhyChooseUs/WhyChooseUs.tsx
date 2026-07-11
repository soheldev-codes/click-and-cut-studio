import Image from "next/image";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/ui/section-title";
import Button from "@/components/ui/button";
import { WHY_CHOOSE_US } from "@/constants/whyChooseUs";

import FeatureItem from "./FeatureItem";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          badge="Why Choose Us"
          title="Why Clients Trust Click & Cut Studio"
          description="We combine creativity, technology and experience to capture your most valuable memories."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative h-[550px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80"
              alt="Studio"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {WHY_CHOOSE_US.map((item) => (
              <FeatureItem key={item.id} {...item} />
            ))}

            <Button className="mt-6">
              Book a Session
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}