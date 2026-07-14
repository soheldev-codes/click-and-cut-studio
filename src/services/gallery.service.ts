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
    `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`,
    payload,
    {
      withCredentials: true,
    }
  );

  return data;
}


export async function getGalleries() {
  const response = await fetch("/api/gallery", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch galleries");
  }

  const result = await response.json();

  return result.data;
}


export async function getGallery(id: string) {
  const response = await fetch(`/api/gallery/${id}`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  const result = await response.json();

  return result.data;
}


export async function deleteGallery(id: string) {
  const response = await fetch(`/api/gallery/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to delete gallery");
  }

  return response.json();
}





export async function updateGallery(
  id: string,
  payload: CreateGalleryPayload
) {
  const { data } = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/gallery/${id}`,
    payload,
    {
      withCredentials: true,
    }
  );

  return data;
}


export async function getPublicGalleries() {
  const response = await fetch("/api/gallery/public", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch public galleries");
  }

  const result = await response.json();

  return result.data;
}



export async function getPublicGallery(id: string) {
  const response = await fetch(
    `/api/gallery/public/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  const result = await response.json();

  return result.data;
}