
export type GalleryVisibility = "private" | "public";

export type GalleryStatus =
  | "draft"
  | "published"
  | "archived";

export interface Gallery {
  _id?: string;

  title: string;

  clientName: string;

  clientEmail: string;

  eventType: string;

  eventDate: string;

  description: string;

  visibility: GalleryVisibility;

  status: GalleryStatus;

  coverImage: string;

  galleryImages: string[];

  createdBy: string;

  createdAt: Date;

  updatedAt: Date;
}

export type CreateGallery = {
  title: string;
  clientName: string;
  clientEmail: string;
  eventType: string;
  eventDate: string;
  description: string;
  visibility: GalleryVisibility;
  coverImage: string;
  galleryImages: string[];
};

export type UpdateGallery = Partial<CreateGallery>;