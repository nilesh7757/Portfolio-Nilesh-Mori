'use client';

import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
        <Button variant="default" asChild>
          <Link href="/" className="group">
            <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 