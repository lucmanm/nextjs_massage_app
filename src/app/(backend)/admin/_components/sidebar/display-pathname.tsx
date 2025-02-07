"use client";
import { usePathname } from "next/navigation";

export default function DisplayPpathname() {
  const pathname = usePathname(); // Get the current pathname
  const endPathname = pathname.split("/").pop(); // Extract the last segment of the pathname

  // Remove dashes and capitalize the first letter of each word
  const formattedPathname = endPathname
    ?.replace(/-/g, " ") // Replace all dashes with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

  return <span className="capitalize font-semibold">{formattedPathname}</span>;
}
