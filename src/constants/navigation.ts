export const PUBLIC_NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/explore",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const CLIENT_NAV_LINKS = [
  {
    label: "My Gallery",
    href: "/client/gallery",
  },
  {
    label: "My Bookings",
    href: "/client/bookings",
  },
] as const;

export const ADMIN_NAV_LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
] as const;

/**
 * Temporary
 * পরে Role System হলে এটা Delete হবে।
 */
export const ADMIN_EMAILS = [
  "admin5@gmail.com",
  "admin12@gmail.com",
] as const;