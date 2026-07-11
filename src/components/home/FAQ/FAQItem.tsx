import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItemProps = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQItem({
  id,
  question,
  answer,
}: FAQItemProps) {
  return (
    <AccordionItem
      value={id}
      className="
      rounded-2xl
      border
      border-zinc-200
      bg-white
      px-6

      dark:border-zinc-800
      dark:bg-zinc-900

      mb-4
    "
    >
      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
        {question}
      </AccordionTrigger>

      <AccordionContent className="pb-5 text-zinc-600 dark:text-zinc-400 leading-7">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}