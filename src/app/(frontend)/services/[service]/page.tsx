import React from "react";

export async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  return <div>{service}</div>;
}

export default Page;
