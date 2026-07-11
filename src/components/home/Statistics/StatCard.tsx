import { IconType } from "react-icons";

type StatCardProps = {
  value: string;
  label: string;
  icon: IconType;
};

export default function StatCard({
  value,
  label,
  icon: Icon,
}: StatCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      text-center
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:bg-white/10
    "
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500 text-3xl text-white">
        <Icon />
      </div>

      <h3 className="text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-3 text-zinc-300">
        {label}
      </p>
    </div>
  );
}