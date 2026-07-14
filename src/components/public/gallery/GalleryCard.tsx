"use client";

import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineCalendarDays,
  HiOutlinePhoto,
  HiArrowRight,
} from "react-icons/hi2";

type GalleryCardProps = {
  id: string;
  title: string;
  clientName: string;
  category: string;
  totalImages: number;
  coverImage: string;
  eventDate: string;
  status: string;
};

export default function GalleryCard({
  id,
  title,
  clientName,
  category,
  totalImages,
  coverImage,
  eventDate,
}: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
      {/* Cover */}
      <Link href={`/gallery/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
              {category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="line-clamp-1 text-2xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Captured for{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {clientName}
            </span>
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <HiOutlinePhoto className="text-lg text-violet-600" />
            <span>{totalImages} Photos</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineCalendarDays className="text-lg text-violet-600" />
            <span>{eventDate}</span>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/gallery/${id}`}
          className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          View Gallery

          <HiArrowRight className="text-lg transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}