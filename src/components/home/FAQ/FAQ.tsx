import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/ui/section-title";

import {
    Accordion,
} from "@/components/ui/accordion";

import { FAQS } from "@/constants/faq";
import FAQItem from "./FAQItem";

export default function FAQ() {
    return (
        <Section>
            <Container>
                <SectionTitle
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    description="Everything you need to know before booking a photography or videography session."
                />

                <div className="mx-auto max-w-4xl">
                    <Accordion>
                        {FAQS.map((item) => (
                            <FAQItem key={item.id} {...item} />
                        ))}
                    </Accordion>
                </div>
            </Container>
        </Section>
    );
}