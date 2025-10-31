'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import BlogHeader from "../../Components/BlogHeader";

export default function PostPageClient({ post }) {
  return (
    <>
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">{post.title}</CardTitle>
            <p className="text-gray-500 text-sm">Published on {post.date}</p>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </>
  );
}
