"use client";

import Image from "next/image";
import { HiOutlinePhoto, HiOutlineTrash } from "react-icons/hi2";

type CoverUploaderProps = {
  preview: string | null;
  existingImage?: string;
  onChange: (file: File | null) => void;
};

export default function CoverUploader({
  preview,
  existingImage,
  onChange,
}: CoverUploaderProps) {
  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    onChange(file);
  }

  const imageSrc = preview || existingImage;

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        Cover Image
      </label>

      {imageSrc ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="relative aspect-video">
            <Image
              src={imageSrc}
              alt="Cover Preview"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/0 transition hover:bg-black/10" />

          <div className="absolute right-3 top-3 flex gap-2">
            <label className="cursor-pointer rounded-xl bg-violet-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-700">
              Change

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <button
              type="button"
              onClick={() => onChange(null)}
              className="rounded-xl bg-red-500 p-2 text-white transition hover:bg-red-600"
            >
              <HiOutlineTrash className="text-lg" />
            </button>
          </div>
        </div>
      ) : (
        <label className="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50 transition hover:border-violet-500 hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-950/20 dark:hover:bg-violet-950/40">
          <HiOutlinePhoto className="mb-3 text-5xl text-violet-500" />

          <p className="font-medium">
            Upload Cover Image
          </p>

          <span className="mt-1 text-sm text-zinc-500">
            PNG, JPG, WEBP
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}