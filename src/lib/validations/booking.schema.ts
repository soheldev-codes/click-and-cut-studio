import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name is required"),

  email: z
    .string()
    .email("Invalid email"),

  phone: z
    .string()
    .min(11, "Phone number is required"),

  eventType: z
    .string()
    .min(1, "Select an event type"),

  eventDate: z
    .string()
    .min(1, "Event date is required"),

  location: z
    .string()
    .min(3, "Location is required"),

  budget: z
    .string()
    .min(1, "Budget is required"),

  message: z
    .string()
    .min(10, "Please write a short message"),
});

export type BookingSchema = z.infer<
  typeof bookingSchema
>;