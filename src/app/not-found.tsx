import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          This page took a wrong turn
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to somewhere useful.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">
              Back to home
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
