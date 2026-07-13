"use client";

import Image from "next/image";
import { HiOutlinePhoto, HiOutlineTrash } from "react-icons/hi2";

type MultipleUploaderProps = {
  files: File[];
  onChange: (files: File[]) => void;
};

export default function MultipleUploader({
  files,
  onChange,
}: MultipleUploaderProps) {
  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (!selectedFiles.length) return;

    onChange([...files, ...selectedFiles]);

    // একই Image আবার Select করতে পারবে
    event.target.value = "";
  }

  function removeImage(index: number) {
    const updatedFiles = files.filter((_, i) => i !== index);

    onChange(updatedFiles);
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">
        Gallery Images
      </label>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50 px-6 py-10 transition hover:border-violet-500 hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-950/20 dark:hover:bg-violet-950/40">
        <HiOutlinePhoto className="mb-3 text-5xl text-violet-500" />

        <p className="font-medium">
          Upload Gallery Images
        </p>

        <span className="mt-1 text-sm text-zinc-500">
          You can select multiple images
        </span>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {files.length > 0 && (
        <>
          <p className="text-sm text-zinc-500">
            {files.length} image{files.length > 1 ? "s" : ""} selected
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="relative aspect-square">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-2 top-2 rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                >
                  <HiOutlineTrash className="text-base" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}