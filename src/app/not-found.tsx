"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-bold tracking-tight text-primary">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Oops, the page you were looking for could not be found.</p>
        <p className="mt-2 text-lg text-muted-foreground">Redirecting in {countdown} seconds...</p>
        <div className="mt-6">
          <Button
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => router.back()}
          >
            Go to Back
          </Button>
        </div>
      </div>
    </div>
  );
}
