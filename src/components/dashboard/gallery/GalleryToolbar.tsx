"use client";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function GalleryToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
      
      {/* Search */}
      <div className="relative w-full md:max-w-sm">
        <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />

        <input
          type="text"
          placeholder="Search by client or gallery..."
          className="h-11 w-full rounded-xl border border-zinc-200 bg-transparent pl-10 pr-4 text-sm outline-none transition focus:border-violet-500 dark:border-zinc-700"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <select className="h-11 rounded-xl border border-zinc-200 bg-transparent px-4 text-sm outline-none dark:border-zinc-700">
          <option>All Events</option>
          <option>Wedding</option>
          <option>Holud</option>
          <option>Reception</option>
          <option>Birthday</option>
          <option>Corporate</option>
        </select>

        <select className="h-11 rounded-xl border border-zinc-200 bg-transparent px-4 text-sm outline-none dark:border-zinc-700">
          <option>All Status</option>
          <option>Private</option>
          <option>Public</option>
        </select>
      </div>
    </div>
  );
}