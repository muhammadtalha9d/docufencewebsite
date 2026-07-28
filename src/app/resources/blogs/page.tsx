import type { Metadata } from "next";
import { BlogDirectory } from "@/components/blog/blog-directory";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical writing on moving documents without losing control of them, for HR, finance, operations, security, and legal.",
};

export default function BlogIndexPage() {
  return <BlogDirectory posts={BLOG_POSTS} />;
}
