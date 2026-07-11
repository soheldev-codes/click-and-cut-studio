import Container from "@/components/shared/Container";
import SectionTitle from "@/components/ui/section-title";
import Button from "@/components/ui/button";
import { PORTFOLIO } from "@/constants/portfolio";

import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <Container>
        <SectionTitle
          badge="Featured Portfolio"
          title="Moments We've Captured"
          description="A glimpse of our recent photography and videography projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PORTFOLIO.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button>View Full Portfolio</Button>
        </div>
      </Container>
    </section>
  );
}