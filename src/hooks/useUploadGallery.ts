"use client";

import toast from "react-hot-toast";

import { uploadImage } from "@/lib/imgbb";
import { CreateGallery } from "@/types/gallery";

type UploadGalleryInput = Omit<
  CreateGallery,
  "coverImage" | "galleryImages"
> & {
  coverFile: File;
  galleryFiles: File[];
};

export async function uploadGallery(
  data: UploadGalleryInput
) {
  try {
    toast.loading("Uploading images...", {
      id: "gallery-upload",
    });

    // Cover Image
    const coverImage = await uploadImage(data.coverFile);

    // Gallery Images
    const galleryImages = await Promise.all(
      data.galleryFiles.map(uploadImage)
    );

    toast.loading("Saving gallery...", {
      id: "gallery-upload",
    });

    const response = await fetch("/api/gallery", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: data.title,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        eventType: data.eventType,
        eventDate: data.eventDate,
        visibility: data.visibility,
        description: data.description,

        coverImage,
        galleryImages,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create gallery");
    }

    toast.success("Gallery created successfully!", {
      id: "gallery-upload",
    });

    return await response.json();
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong", {
      id: "gallery-upload",
    });

    throw error;
  }
}