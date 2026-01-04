'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '../../Components/Navbar';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PostPageClient({ post }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2 pl-0 hover:pl-2 transition-all">
                <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
                </Link>
            </Button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground text-sm">Published on {post.date}</p>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
