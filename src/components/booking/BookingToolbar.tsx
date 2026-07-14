"use client";

type BookingToolbarProps = {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
};

export default function BookingToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: BookingToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search by name, email or phone..."
        className="h-11 w-full rounded-xl border border-zinc-300 px-4 outline-none focus:border-violet-500 md:max-w-md dark:border-zinc-700 dark:bg-zinc-900"
      />

      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
        }
        className="h-11 rounded-xl border border-zinc-300 px-4 outline-none focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

    </div>
  );
}
