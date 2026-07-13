"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { deleteGallery } from "@/services/gallery.service";

import {
  HiOutlineCalendarDays,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlinePhoto,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi2";

type GalleryCardProps = {
  id: string;
  title: string;
  clientName: string;
  category: string;
  totalImages: number;
  coverImage: string;
  eventDate: string;
  status: "private" | "public";
  onDelete?: (id: string) => void;
};

export default function GalleryCard({
  id,
  title,
  clientName,
  category,
  totalImages,
  coverImage,
  eventDate,
  status,
  onDelete,
}: GalleryCardProps) {
  const router = useRouter();

  const [openDeleteModal, setOpenDeleteModal] =
    useState(false);

  const [isDeleting, setIsDeleting] =
    useState(false);

  async function handleDelete() {
    try {
      setIsDeleting(true);

      toast.loading("Deleting gallery...", {
        id: "delete-gallery",
      });

      await deleteGallery(id);

      toast.success(
        "Gallery deleted successfully!",
        {
          id: "delete-gallery",
        }
      );

      setOpenDeleteModal(false);

      onDelete?.(id);
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete gallery", {
        id: "delete-gallery",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
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
              <span>
                {totalImages} Photos
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <HiOutlineCalendarDays />
              <span>{eventDate}</span>
            </div>

            <div>
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  status === "public"
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
            <Link
              href={`/dashboard/gallery/${id}`}
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full gap-2"
              >
                <HiOutlineEye />
                View
              </Button>
            </Link>

            <Button variant="ghost">
              <HiOutlinePencilSquare className="text-lg" />
            </Button>

            <Button
              variant="ghost"
              onClick={() =>
                setOpenDeleteModal(true)
              }
              className="text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
            >
              <HiOutlineTrash className="text-lg" />
            </Button>
          </div>
        </div>
      </div>

      <ConfirmModal
        open={openDeleteModal}
        loading={isDeleting}
        title="Delete Gallery?"
        description={`Are you sure you want to delete "${title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onCancel={() =>
          setOpenDeleteModal(false)
        }
        onConfirm={handleDelete}
      />
    </>
  );
}