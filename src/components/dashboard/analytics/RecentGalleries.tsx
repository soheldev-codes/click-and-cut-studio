"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

import { getRecentDashboardData } from "@/services/dashboard.service";

type Gallery = {
  _id: string;
  title: string;
  eventType: string;
  coverImage: string;
  galleryImages: string[];
  createdAt: string;
};

export default function RecentGalleries() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getRecentDashboardData();
        setGalleries(data.recentGalleries);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-44 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-20 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-20 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-20 rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Recent Galleries
          </h2>

          <p className="text-sm text-zinc-500">
            Latest published galleries.
          </p>
        </div>

        <Link
          href="/dashboard/gallery"
          className="flex items-center gap-1 text-sm font-medium text-violet-600 hover:underline"
        >
          View All
          <HiOutlineArrowRight />
        </Link>
      </div>

      {galleries.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-zinc-500">
          No galleries found.
        </div>
      ) : (
        <div className="space-y-4">
          {galleries.map((gallery) => (
            <div
              key={gallery._id}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  src={gallery.coverImage}
                  alt={gallery.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="line-clamp-1 font-semibold">
                  {gallery.title}
                </h3>

                <p className="text-sm text-zinc-500">
                  {gallery.eventType}
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  {gallery.galleryImages.length} Photos
                </p>
              </div>

              <Link
                href={`/dashboard/gallery/${gallery._id}`}
                className="rounded-lg bg-violet-600 px-3 py-2 text-sm text-white transition hover:bg-violet-700"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}