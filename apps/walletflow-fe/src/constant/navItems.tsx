// navItems.js or navItems.ts
import {
  FileTextIcon,
  LayoutDashboard,
  RepeatIcon,
  SendIcon,
  SettingsIcon,
  Users,
  UsersIcon,
  Wallet
} from "lucide-react";

export const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="size-5"/>,
    path: "/",
  },
   {
    label: "Wallet",
    icon: <Wallet  className="size-5"/>,
    path: "/wallet",
  },
  {
    label: "Beneficiaries",
    icon: <Users  className="size-5"/>,
    path: "/beneficiaries",
  },
  
  {
    label: "Exchange",
    icon: <RepeatIcon className="size-5"/>,
    path: "/exchange",
  },
  {
    label: "Recipient",
    icon: <UsersIcon  className="size-5"/>,
    path: "/recipient",
  },
  {
    label: "Transactions",
    icon: <SendIcon className="size-5" />,
    path: "/transactions",
  },
  {
    label: "Reports",
    icon: <FileTextIcon  className="size-5"/>,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: <SettingsIcon className="size-5"/>,
    path: "/settings",
  },
];
