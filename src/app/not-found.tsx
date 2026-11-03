import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="dark flex flex-1 items-center bg-background py-24 text-foreground md:py-32">
      <div className="frame">
        <h1 className="text-display">This page took a wrong turn</h1>
        <p className="mt-6 max-w-[52ch]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to somewhere useful.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button asChild size="lg">
            <Link href="/">
              Back to home
              <ArrowUpRight />
            </Link>
          </Button>
          <Link href="/contact" className="link-quiet font-medium">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
