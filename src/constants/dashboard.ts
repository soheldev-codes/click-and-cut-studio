import {
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlinePhoto,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

export const ADMIN_DASHBOARD_MENU = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: HiOutlineCalendarDays,
  },
  {
    label: "Gallery",
    href: "/dashboard/gallery",
    icon: HiOutlinePhoto,
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: HiOutlineUsers,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: HiOutlineChartBar,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: HiOutlineUser,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: HiOutlineCog6Tooth,
  },
] as const;

export const CLIENT_DASHBOARD_MENU = [
  {
    label: "My Gallery",
    href: "/client/gallery",
    icon: HiOutlinePhoto,
  },
  {
    label: "My Bookings",
    href: "/client/bookings",
    icon: HiOutlineCalendarDays,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: HiOutlineUser,
  },
] as const;