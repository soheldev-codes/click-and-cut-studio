import axios from "axios";

export type CreateGalleryPayload = {
  title: string;
  clientName: string;
  clientEmail: string;
  eventType: string;
  eventDate: string;
  visibility: "private" | "public";
  description: string;
  coverImage: string;
  galleryImages: string[];
};

export async function createGallery(
  payload: CreateGalleryPayload
) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/gallery`,
    payload,
    {
      withCredentials: true,
    }
  );

  return data;
}