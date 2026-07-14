type BookingStatusProps = {
  status: string;
};

export default function BookingStatus({
  status,
}: BookingStatusProps) {
  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",

    Confirmed:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",

    Completed:
      "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",

    Cancelled:
      "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status as keyof typeof styles] ??
        "bg-zinc-100 text-zinc-700"
      }`}
    >
      {status}
    </span>
  );
}