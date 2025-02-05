import Footer from "@/components/footer";
import Header from "@/components/header";
import { BottomNav } from "@/components/mb-ui/bottom-navigation";
import type { Metadata } from "next";
import { Fragment } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Touch Massage",
  description: "Touch Massage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen max-sm:mb-14">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BottomNav />
      </div>
    </Fragment>
  );
}
