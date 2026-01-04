'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-8xl font-black text-primary/10 select-none">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-muted-foreground max-w-[500px] mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or doesn&apos;t exist.
          </p>
        </div>
        <div className="pt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}