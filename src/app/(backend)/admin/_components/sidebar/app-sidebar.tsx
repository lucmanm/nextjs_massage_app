"use client";

import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  List,
  Map,
  PlusSquare,
  ShieldPlusIcon,
  SquareTerminal,
  User2Icon,
} from "lucide-react";
import * as React from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
          url: "/admin/create-product",
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
      url: "/admin/dashboard",
      subControl: [
        {
          title: "Create",
          url: "/admin/create-user",
          icon: PlusSquare,
        },
        {
          title: "List",
          url: "/admin/dashboard",
          icon: List,
        },
      ],

      icon: ShieldPlusIcon,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: Map,
      subControl: [
        {
          title: "Create",
          url: "/admin/create-user",
          icon: PlusSquare,
        },
        {
          title: "List",
          url: "/admin/dashboard",
          icon: List,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects settings={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
