import { IconType } from "react-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-zinc-200
      bg-white
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-violet-600
      hover:shadow-2xl
      dark:border-zinc-800
      dark:bg-zinc-900
    "
    >
      <div
        className="
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-violet-100
        text-3xl
        text-violet-600
        transition-all
        duration-300
        group-hover:bg-violet-600
        group-hover:text-white
      "
      >
        <Icon />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">{title}</h3>

      <p className="leading-8 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <button
  className="
    mt-8
    flex
    items-center
    gap-2
    font-semibold
    text-violet-600
    transition-all
    group-hover:gap-3
  "
>
  Learn More →
</button>
    </div>
  );
}