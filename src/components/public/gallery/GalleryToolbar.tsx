"use client";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

type GalleryToolbarProps = {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Corporate",
  "Holud",
];

export default function GalleryToolbar({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: GalleryToolbarProps) {
  return (
    <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400" />

        <input
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Search gallery..."
          className="h-12 w-full rounded-2xl border border-zinc-200 bg-white pl-12 pr-4 outline-none focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() =>
              onCategoryChange(item)
            }
            className={`rounded-full px-5 py-2 text-sm transition ${
              category === item
                ? "bg-violet-600 text-white"
                : "border border-zinc-300 hover:border-violet-600 hover:text-violet-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}