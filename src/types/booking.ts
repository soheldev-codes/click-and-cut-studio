export type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export interface Booking {
  _id?: string;

  userId: string;

  clientEmail: string;

  fullName: string;

  email: string;

  phone: string;

  eventType: string;

  eventDate: string;

  location: string;

  budget: string;

  message: string;

  status: BookingStatus;

  createdAt: Date;

  updatedAt: Date;
}

export type CreateBooking = Omit<
  Booking,
  | "_id"
  | "status"
  | "createdAt"
  | "updatedAt"
  | "userId"
  | "clientEmail"
>;

export type UpdateBooking = Partial<
  Pick<
    Booking,
    | "status"
    | "fullName"
    | "phone"
    | "eventDate"
    | "location"
    | "budget"
    | "message"
  >
>;