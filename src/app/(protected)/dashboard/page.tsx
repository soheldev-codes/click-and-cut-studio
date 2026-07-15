import StatsCards from "@/components/dashboard/analytics/StatsCards";
import BookingChart from "@/components/dashboard/analytics/BookingChart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-500">
          Welcome back to Click & Cut Studio.
        </p>
      </div>

      <StatsCards />

      <BookingChart />

    </div>
  );
}