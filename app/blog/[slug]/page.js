import React from 'react';
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import PostPageClient from './PostPageClient';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPageClient post={post} />;
}
