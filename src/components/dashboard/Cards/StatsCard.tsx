import { IconType } from "react-icons";

type StatsCardProps = {
  title: string;
  value: number | string;
  icon: IconType;
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-600 dark:bg-violet-500/10">
          <Icon />
        </div>
      </div>
    </div>
  );
}