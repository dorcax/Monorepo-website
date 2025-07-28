// navItems.js or navItems.ts
import {
  LayoutDashboard,
  LocateIcon,
  RepeatIcon,
  UsersIcon,
  FileTextIcon,
  SettingsIcon,
  SendIcon,
  Wallet,
} from "lucide-react";

export const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard/>,
    path: "/dashboard",
  },
  {
    label: "Track",
    icon: <LocateIcon/>,
    path: "/track",
  },
   {
    label: "Wallet",
    icon: <Wallet />,
    path: "/track",
  },
  {
    label: "Exchange",
    icon: <RepeatIcon/>,
    path: "/exchange",
  },
  {
    label: "Recipient",
    icon: <UsersIcon />,
    path: "/recipient",
  },
  {
    label: "Transaction",
    icon: <SendIcon />,
    path: "/transaction",
  },
  {
    label: "Reports",
    icon: <FileTextIcon />,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: <SettingsIcon/>,
    path: "/settings",
  },
];
