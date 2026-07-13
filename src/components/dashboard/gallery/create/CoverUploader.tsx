"use client";

import Image from "next/image";
import { HiOutlinePhoto, HiOutlineTrash } from "react-icons/hi2";

type CoverUploaderProps = {
  preview: string | null;
  onChange: (file: File | null) => void;
};

export default function CoverUploader({
  preview,
  onChange,
}: CoverUploaderProps) {
  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    onChange(file);
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        Cover Image
      </label>

      {preview ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="relative aspect-video">
            <Image
              src={preview}
              alt="Cover Preview"
              fill
              className="object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute right-3 top-3 rounded-xl bg-red-500 p-2 text-white transition hover:bg-red-600"
          >
            <HiOutlineTrash className="text-lg" />
          </button>
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