export const PUBLIC_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/explore" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CLIENT_NAV_LINKS = [
  { label: "My Gallery", href: "/client/gallery" },
  { label: "My Profile", href: "/client/profile" },
  { label: "Booking Now", href: "/booking" },
  { label: "My Bookings", href: "/client/bookings" },
] as const;

export const ADMIN_NAV_LINKS = [
  { label: "Dashboard", href: "/dashboard" },
] as const;

export const ADMIN_EMAILS = [
  "admin5@gmail.com",
  "admin12@gmail.com",
] as const;

/**
 * User dropdown menu
 */
export const ADMIN_MENU = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
  },
] as const;

export const CLIENT_MENU = [
  {
    label: "My Gallery",
    href: "/client/gallery",
    icon: "gallery",
  },
  {
    label: "My Bookings",
    href: "/client/bookings",
    icon: "booking",
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
  },
] as const;