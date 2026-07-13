import WelcomeCard from "@/components/dashboard/cards/WelcomeCard";
import StatsCard from "@/components/dashboard/cards/StatsCard";

import {
  HiOutlinePhoto,
  HiOutlineVideoCamera,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";

const stats = [
  {
    title: "Total Photos",
    value: 1248,
    icon: HiOutlinePhoto,
  },
  {
    title: "Videos",
    value: 86,
    icon: HiOutlineVideoCamera,
  },
  {
    title: "Bookings",
    value: 32,
    icon: HiOutlineCalendarDays,
  },
  {
    title: "Clients",
    value: 48,
    icon: HiOutlineUsers,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeCard />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </section>
    </div>
  );
}