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

type InitialGalleryData = Partial<GallerySchema> & {
  coverImage?: string;
  galleryImages?: string[];
};


type GalleryFormProps = {
  mode?: "create" | "edit";
  galleryId?: string;
  initialData?: InitialGalleryData;
};

import Button from "@/components/ui/button";
import { uploadGallery } from "@/hooks/useUploadGallery";
import { updateGallery } from "@/services/gallery.service";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/imgbb";

export default function GalleryForm({
  mode = "create",
  galleryId,
  initialData,
}: GalleryFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<GallerySchema>({
    resolver: zodResolver(gallerySchema),
    defaultValues: {
      title: initialData?.title ?? "",
      clientName: initialData?.clientName ?? "",
      clientEmail: initialData?.clientEmail ?? "",
      eventType: initialData?.eventType ?? "",
      eventDate: initialData?.eventDate ?? "",
      visibility: initialData?.visibility ?? "private",
      description: initialData?.description ?? "",
    },
  });

  const [coverPreview, setCoverPreview] = useState(
    initialData?.coverImage ?? ""
  );


  const router = useRouter();

 

async function onSubmit(data: GallerySchema) {
  try {
    if (mode === "create") {
      if (!coverFile) { alert("Please select a cover image"); return; } 
      if (galleryFiles.length === 0) { alert("Please select gallery images"); return; } 
      await uploadGallery({...data, coverFile, galleryFiles, });
    } else {
      if (!galleryId) return;

      let coverImage = initialData?.coverImage as string;

      // user new image select করেছে
      if (coverFile) {
        coverImage = await uploadImage(coverFile);
      }

      await updateGallery(galleryId, {
        ...data,
        coverImage,
        galleryImages:
          (initialData?.galleryImages as string[]) ?? [],
      });
    }

    reset();
    router.push("/dashboard/gallery");
  } catch (error) {
    console.error(error);
  }
}

  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);


  const preview = coverFile
    ? URL.createObjectURL(coverFile)
    : coverPreview;

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
          existingImage={initialData?.coverImage}
          onChange={(file) => {
            setCoverFile(file);

            if (file) {
              setCoverPreview(URL.createObjectURL(file));
            } else {
              setCoverPreview("");
            }
          }}
        />

        <MultipleUploader
          files={galleryFiles}
          onChange={setGalleryFiles}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="submit">

          {mode === "create"
            ? "Create Gallery"
            : "Update Gallery"}
        </Button>
      </div>
    </form>
  );
}