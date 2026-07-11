import { IconType } from "react-icons";

type FeatureItemProps = {
  title: string;
  description: string;
  icon: IconType;
};

export default function FeatureItem({
  title,
  description,
  icon: Icon,
}: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-600 dark:bg-violet-500/10">
        <Icon />
      </div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}