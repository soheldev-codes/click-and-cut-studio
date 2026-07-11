import Link from "next/link";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <Section className="bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-600">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            Book Your Session Today
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            Ready to Capture Your Special Moments?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Let Click & Cut Studio preserve your memories with
            professional photography and cinematic videography.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/booking">
              <Button
                className="
                  bg-white
                  text-violet-700
                  hover:bg-zinc-100
                "
              >
                Book a Session
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="
                  border-white
                  bg-transparent
                  text-white
                  hover:bg-white
                  hover:text-violet-700
                "
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}