/** @format */

import BlogData from "@/components/blog/BlogData";
import BlogNav from "@/components/blog/BlogNav";
import BlogPaginations from "@/components/blog/BlogPaginations";

export default function Home() {
  return (
    <>
      <BlogNav />
      <BlogData />
      <BlogPaginations />
    </>
  );
}
