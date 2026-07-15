"use client";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/button";

import {
  HiOutlineCalendarDays,
  HiOutlineEye,
  HiOutlinePhoto,
} from "react-icons/hi2";

type ClientGalleryCardProps = {
  id: string;
  title: string;
  clientName: string;
  category: string;
  totalImages: number;
  coverImage: string;
  eventDate: string;
  status: "private" | "public";
};

export default function ClientGalleryCard({
  id,
  title,
  clientName,
  category,
  totalImages,
  coverImage,
  eventDate,
  status
}: ClientGalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {clientName}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-zinc-500">
            <HiOutlinePhoto />
            {totalImages} Photos
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <HiOutlineCalendarDays />
            {eventDate}
          </div>
        </div>

        <Link href={`/client/gallery/${id}`}>
          <Button className="w-full gap-2">
            <HiOutlineEye />
            Open Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}