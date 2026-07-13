import Image from "next/image";
import Button from "@/components/ui/button";

import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

type GalleryCardProps = {
  title: string;
  clientName: string;
  category: string;
  totalImages: number;
  coverImage: string;
};

export default function GalleryCard({
  title,
  clientName,
  category,
  totalImages,
  coverImage,
}: GalleryCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[4/3]">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="truncate text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {clientName}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>{category}</span>

          <span>{totalImages} Photos</span>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 gap-2">
            <HiOutlineEye />
            View
          </Button>

          <Button variant="ghost">
            <HiOutlinePencilSquare />
          </Button>

          <Button variant="ghost">
            <HiOutlineTrash />
          </Button>
        </div>
      </div>
    </div>
  );
}