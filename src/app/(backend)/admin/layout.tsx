import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "../../globals.css";
import { AppSidebar } from "./_components/sidebar/app-sidebar";

import { auth } from "@/auth";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import DisplayPpathname from "./_components/sidebar/display-pathname";

export default async function BackendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <Fragment>
      <div className="flex flex-col min-h-screen max-sm:mb-14">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b ">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {/* Breadcrumb Data */}
                        <DisplayPpathname />
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <main className="flex-grow  flex bg-slate-100">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </Fragment>
  );
}
