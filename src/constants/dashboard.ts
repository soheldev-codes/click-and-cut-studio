import {
  HiOutlineHome,
  HiOutlinePhoto,
  HiOutlineCalendarDays,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export const DASHBOARD_MENU = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    label: "My Gallery",
    href: "/dashboard/gallery",
    icon: HiOutlinePhoto,
  },
  {
    label: "My Bookings",
    href: "/dashboard/bookings",
    icon: HiOutlineCalendarDays,
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
];