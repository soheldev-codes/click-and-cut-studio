import { z } from "zod";

export const gallerySchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Gallery title must be at least 5 characters"),

  clientName: z
    .string()
    .trim()
    .min(2, "Client name is required"),

 clientEmail: z
  .string()
  .trim()
  .email("Please enter a valid email"),
  
  eventType: z
    .string()
    .min(1, "Please select an event type"),

  eventDate: z
    .string()
    .min(1, "Event date is required"),

  visibility: z.enum(["private", "public"]),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters"),
});

export type GallerySchema = z.infer<typeof gallerySchema>;