import { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
};

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-2xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-900/30">
          {icon}
        </div>
      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        {title}
      </p>
    </div>
  );
}