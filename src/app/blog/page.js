/** @format */

"use client";

/** @format */

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogData from "@/components/blog/BlogData";
import BlogNav from "@/components/blog/BlogNav";
import BlogPaginations from "@/components/blog/BlogPaginations";
import { BlogCards, BlogPaginationData } from "@/components/common/Helper";

const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const category = searchParams.get("category") || "All";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = isNaN(pageParam) ? 1 : pageParam;

  const pageSize = 6;

  const filtered = BlogCards.filter(
    (card) => category === "All" || card.category === category,
  );

  
  const totalPages = BlogPaginationData.length;

  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;
  const pagedCards = filtered.slice(start, start + pageSize);

  const handlePageChange = (newPage) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", newPage);
      router.push(`/blog?${params.toString()}`);
    });
  };

  return (
    <>
      <BlogNav />
      {isPending && <p className="text-center py-4">Loading...</p>}
      <BlogData cards={pagedCards} />
      <BlogPaginations
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default page;
