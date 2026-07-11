import Container from "@/components/shared/Container";
import SectionTitle from "@/components/ui/section-title";
import { STATISTICS } from "@/constants/statistics";

import StatCard from "./StatCard";

export default function Statistics() {
    return (
        <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950  py-24">
            <Container>
                <SectionTitle
                    light
                    badge="Our Achievements"
                    title="Trusted by Hundreds of Happy Clients"
                    description="Every number represents our dedication..."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {STATISTICS.map((item) => (
                        <StatCard key={item.id} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}