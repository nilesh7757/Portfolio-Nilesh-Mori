'use client';

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCcw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Something went wrong!</h1>
        <p className="text-gray-600">Don't worry, we're on it. Try refreshing the page.</p>
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => window.location.reload()}
            className="group"
          >
            <RefreshCcw className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Refresh Page
          </Button>
          <Button 
            variant="outline"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
} 