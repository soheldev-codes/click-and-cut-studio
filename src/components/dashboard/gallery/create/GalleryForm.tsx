"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import MultipleUploader from "./MultipleUploader";

import CoverUploader from "./CoverUploader";
import {
  gallerySchema,
  type GallerySchema,
} from "@/lib/validations/gallery.schema";

import Button from "@/components/ui/button";
import { uploadGallery } from "@/hooks/useUploadGallery";
import { useRouter } from "next/navigation";
export default function GalleryForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<GallerySchema>({
    resolver: zodResolver(gallerySchema),
    defaultValues: {
      visibility: "private",
    },
  });


  const router = useRouter();

  async function onSubmit(data: GallerySchema) {
    if (!coverFile) {
      alert("Please select a cover image");
      return;
    }

    if (galleryFiles.length === 0) {
      alert("Please select gallery images");
      return;
    }

    try {
      await uploadGallery({
        ...data,
        coverFile,
        galleryFiles,
      });

      reset();

      setCoverFile(null);
      setGalleryFiles([]);

      router.push("/dashboard/gallery");
    } catch (error) {
      console.error(error);
    }
  }

  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);


  const preview = coverFile
    ? URL.createObjectURL(coverFile)
    : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Gallery Title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Gallery Title
          </label>

          <input
            {...register("title")}
            placeholder="Rahim & Sumaiya Wedding"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Client Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Client Name
          </label>

          <input
            {...register("clientName")}
            placeholder="Rahim"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.clientName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.clientName.message}
            </p>
          )}
        </div>

        {/* Client Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Client Email
          </label>

          <input
            type="email"
            {...register("clientEmail")}
            placeholder="rahim@gmail.com"
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.clientEmail && (
            <p className="mt-2 text-sm text-red-500">
              {errors.clientEmail.message}
            </p>
          )}
        </div>

        {/* Event Type */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Event Type
          </label>

          <select
            {...register("eventType")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="">Select Event</option>
            <option value="Wedding">Wedding</option>
            <option value="Holud">Holud</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
          </select>

          {errors.eventType && (
            <p className="mt-2 text-sm text-red-500">
              {errors.eventType.message}
            </p>
          )}
        </div>

        {/* Event Date */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Event Date
          </label>

          <input
            type="date"
            {...register("eventDate")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.eventDate && (
            <p className="mt-2 text-sm text-red-500">
              {errors.eventDate.message}
            </p>
          )}
        </div>

        {/* Visibility */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Visibility
          </label>

          <select
            {...register("visibility")}
            className="h-11 w-full rounded-xl border border-zinc-200 px-4 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>

          {errors.visibility && (
            <p className="mt-2 text-sm text-red-500">
              {errors.visibility.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={5}
            {...register("description")}
            placeholder="Write something about this event..."
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <CoverUploader
          preview={preview}
          onChange={setCoverFile}
        />

        <MultipleUploader
          files={galleryFiles}
          onChange={setGalleryFiles}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          type="submit"
          disabled={!coverFile || galleryFiles.length === 0}
        >
          Continue
        </Button>
      </div>
    </form>
  );
}