import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
  alternate?: boolean;
};

export default function Section({
  children,
  className,
  alternate = false,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-24 transition-colors duration-300",
        alternate
          ? "bg-zinc-50 dark:bg-zinc-900"
          : "bg-white dark:bg-zinc-950",
        className
      )}
    >
      {children}
    </section>
  );
}