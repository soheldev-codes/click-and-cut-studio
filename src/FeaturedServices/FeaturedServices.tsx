import Container from "@/components/shared/Container";
import { SERVICES } from "@/constants/services";

import ServiceCard from "./ServiceCard";
import SectionTitle from "@/components/ui/section-title";
export default function FeaturedServices() {
    return (
        <section className="py-24">
            <Container>
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    {/* <p className="font-semibold uppercase tracking-[0.3em] text-violet-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Photography & Videography Services
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400">
            We provide premium photography, videography and editing services
            for weddings, corporate events and special moments.
          </p> */}


                    <SectionTitle
                        badge="Our Services"
                        title="Photography & Videography Services"
                        description="We provide premium photography, videography and editing services for weddings, corporate events and special moments."
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </Container>
        </section>
    );
}