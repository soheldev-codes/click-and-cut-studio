type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <span
  className={`
inline-block
rounded-full
px-4
py-2
text-xs
font-semibold
uppercase
tracking-[0.3em]

${
  light
    ? "bg-violet-500/20 text-violet-300"
    : "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
}
`}
>
        {badge}
      </span>

      <h2 
  className={`mt-5 font-heading text-4xl font-bold md:text-5xl ${
    light ? "text-white" : "text-zinc-900 dark:text-white"
  }`}
>
        {title}
      </h2>

      {description && (
        <p 
  className={`mt-5 leading-8 ${
    light
      ? "text-zinc-300"
      : "text-zinc-600 dark:text-zinc-400"
  }`}
>
          {description}
        </p>
      )}
    </div>
  );
}