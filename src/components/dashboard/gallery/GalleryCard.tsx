import Image from "next/image";
import Button from "@/components/ui/button";

import {
  HiOutlineCalendarDays,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlinePhoto,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi2";

type GalleryCardProps = {
  title: string;
  clientName: string;
  category: string;
  totalImages: number;
  coverImage: string;
  eventDate: string;
  status: string;
};

export default function GalleryCard({
  title,
  clientName,
  category,
  totalImages,
  coverImage,
  eventDate,
  status,
}: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      {/* Cover Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            Client Gallery
          </p>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <HiOutlineUser />
            <span>{clientName}</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <HiOutlinePhoto />
            <span>{totalImages} Photos</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <HiOutlineCalendarDays />
            <span>{eventDate}</span>
          </div>

          <div>
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                status === "Published"
                  ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                  : "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <Button variant="outline" className="flex-1 gap-2">
            <HiOutlineEye />
            View
          </Button>

          <Button variant="ghost">
            <HiOutlinePencilSquare className="text-lg" />
          </Button>

          <Button
            variant="ghost"
            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <HiOutlineTrash className="text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
}