"use client";

import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  InfoIcon,
  List,
  Mail,
  PlusSquare,
  ShieldPlusIcon,
  SquareTerminal,
  User2Icon,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import { Role } from "@prisma/client";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Touch Massage",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
      ],
    },
    {
      title: "Products",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Products List",
          url: "/admin/products",
        },
        {
          title: "Create Product",
          url: "/admin/products/create-product",
        },
      ],
    },

    {
      title: "Customers",
      url: "#",
      icon: User2Icon,
      items: [
        {
          title: "Customers List",
          url: "/admin/dashboard",
        },
        {
          title: "Create new User",
          url: "/admin/create-user",
        },
      ],
    },
  ],
  settings: [
    {
      name: "Roles",
      url: "/admin/users",
      subControl: [
        {
          title: "List",
          url: "/admin/users",
          icon: List,
        },
        {
          title: "Create",
          url: "/admin/create-user",
          icon: PlusSquare,
        },
      ],
      icon: ShieldPlusIcon,
      role: Role.ADMIN,
    },
    {
      name: "Message",
      url: "/admin/messages",
      icon: Mail,
      role: Role.ADMIN,
    },
    {
      name: "Store Information",
      url: "/admin/web-information",
      icon: InfoIcon,
      role: Role.ADMIN,
    },
    {
      name: "Web images",
      url: "/admin/web-images",
      icon: InfoIcon,
      role: Role.ADMIN,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="*:bg-slate-100">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects settings={data.settings} userRole={Role.ADMIN} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
