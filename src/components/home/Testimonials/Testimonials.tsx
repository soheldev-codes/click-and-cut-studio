import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/ui/section-title";

import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <Section alternate>
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="Loved by Our Happy Clients"
          description="Real experiences from people who trusted Click & Cut Studio."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}