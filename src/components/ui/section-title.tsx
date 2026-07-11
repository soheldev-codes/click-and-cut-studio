type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <span className="font-semibold uppercase tracking-[0.3em] text-violet-600">
        {badge}
      </span>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}