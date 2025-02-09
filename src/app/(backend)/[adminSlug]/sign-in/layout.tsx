import "../../../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen max-sm:mb-14">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
