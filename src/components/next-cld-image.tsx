"use client";
import { CldImage, CldImageProps } from "next-cloudinary";

export default function NextCldImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
