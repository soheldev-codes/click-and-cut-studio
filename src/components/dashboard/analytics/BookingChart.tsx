"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { getBookingChart } from "@/services/dashboard.service";

type ChartData = {
  month: string;
  bookings: number;
};

export default function BookingChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChart() {
      try {
        const result = await getBookingChart();

        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadChart();
  }, []);

  if (loading) {
    return (
      <div className="h-[420px] animate-pulse rounded-3xl bg-zinc-200 dark:bg-zinc-800" />
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Monthly Bookings
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Overview of bookings created this year.
        </p>
      </div>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.15}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "rgba(139,92,246,.08)",
              }}
            />

            <Bar
              dataKey="bookings"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}