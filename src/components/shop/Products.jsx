"use client"
import { homeProducts } from "../common/Helper";

import { useState } from "react";
import ProductDetailsCard from "../common/ProductDetailsCard";
import Sidebar from "./Sidebar";
import { GridIcon, ListIcon, Star } from "../common/Icons";

const Products = () => {
  const [search, setSearch] = useState("");

    const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");

    const [view, setView] = useState("grid");

 const [category, setCategory] = useState("all");
const [sort, setSort] = useState("default");
const [page, setPage] = useState(1);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const perPage = 6;
  // Unique categories
const uniqueCategories = [
  ...new Set(homeProducts.map((item) => item.category)),
];

// Add count
const categoriesWithCount = [
  {
    name: "all",
    count: homeProducts.length,
  },
  ...uniqueCategories.map((cat) => ({
    name: cat,
    count: homeProducts.filter(
      (item) => item.category === cat
    ).length,
  })),
];

  // Category Filter
 let filtered = [...homeProducts];

// PRICE FILTER
filtered = filtered.filter((item) => {
  const min = minPrice !== "" ? parseFloat(minPrice) : 0;
  const max = maxPrice !== "" ? parseFloat(maxPrice) : Infinity;

  return item.price >= min && item.price <= max;
});

// SEARCH FILTER
if (search.trim() !== "") {
  filtered = filtered.filter((item) =>
    item.heading.toLowerCase().includes(search.toLowerCase())
  );
}


// CATEGORY FILTER
if (category !== "all") {
  filtered = filtered.filter(
    (item) => item.category === category
  );
}
// Sorting
if (sort === "low") {
  filtered = [...filtered].sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filtered = [...filtered].sort((a, b) => b.price - a.price);
}


  // Pagination
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

 return (
  <div className="min-h-screen flex relative py-20">



    <div className="flex max-w-[1164px] w-full px-3 mx-auto flex-col lg:flex-row gap-8">
        {/* 🔥 STEP 4 — YAHAN OVERLAY ADD KARNA HAI */}
    <div
      className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 xl:hidden ${
        isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsSidebarOpen(false)}
    ></div>


    {/* 🔥 STEP 5 — Mobile Sidebar Drawer */}
   {/* 🔥 Mobile Sidebar Drawer */}
<div
  className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 xl:hidden ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="p-4 flex justify-between items-center mb-1 border-b  border-[rgba(227,228,229,1)] ">
    <h3 className="font-semibold ">Filters</h3>
    <button onClick={() => setIsSidebarOpen(false)}>✕</button>
  </div>

  <Sidebar
    categories={categoriesWithCount}
    category={category}
    setCategory={(value) => {
      setCategory(value);
      setPage(1);
      setIsSidebarOpen(false); // mobile close
    }}
    minPrice={minPrice}
    maxPrice={maxPrice}
    setMinPrice={setMinPrice}
    setMaxPrice={setMaxPrice}
    search={search}
    setSearch={setSearch}
    setPage={setPage}
  />
</div>
{/* Desktop Sidebar */}
<div className="hidden xl:block w-[260px]">
  <Sidebar
    categories={categoriesWithCount}
    category={category}
    setCategory={(value) => {
      setCategory(value);
      setPage(1);
    }}
    minPrice={minPrice}
    maxPrice={maxPrice}
    setMinPrice={setMinPrice}
    setMaxPrice={setMaxPrice}
    search={search}
    setSearch={setSearch}
    setPage={setPage}
  />
</div>




      {/* Right Side */}
      <div className="flex-1">
        <button
        onClick={() => setIsSidebarOpen(true)}
        className="xl:hidden mb-4 bg-pink text-white px-5 py-2 rounded-full"
      >
        Filters
      </button>

        {/* Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 max-w-[855px] w-full px-4 ">

  {/* Left Side */}
  <div className="flex items-center gap-4">

    {/* Grid View Button */}
   <button
  onClick={() => setView("grid")}
  className={`w-10 h-10 rounded-md flex items-center justify-center ${
    view === "grid"
      ? "bg-pink text-white"
      : "bg-gray-100 text-gray-500"
  }`}
>
  <GridIcon className="w-5 h-5" />
</button>


    {/* List View Button */}
    <button
      onClick={() => setView("list")}
      className={`w-10 h-10 rounded-md flex items-center justify-center ${
        view === "list"
          ? "bg-pink text-white"
          : "bg-[rgba(241,249,249,1)] text-gray-500"
      }`}
    >
   <ListIcon className="w-5 h-5" />

    </button>

    {/* Showing Results Text */}
    <p className="text-sm text-[rgba(120,120,120,1)] leading-[14px]">
      Showing {(page - 1) * perPage + 1}–
      {Math.min(page * perPage, filtered.length)} of {filtered.length} results
    </p>

  </div>

  {/* Right Side Sorting */}
 <select
  value={sort}
  onChange={(e) => {
    setSort(e.target.value);
    setPage(1); // important
  }}
  className="border border-[rgba(227,228,229,1)] bg-transparent text-[rgba(15,2,0,1)] rounded-full  px-5 py-2 text-sm "
>

  <option value="default">Default Sorting</option>
  <option value="low">Price Low to High</option>
  <option value="high">Price High to Low</option>
</select>
</div>
        {/* Grid */}
       <div
  className={`${
    view === "grid"
      ? "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6"
      : "flex flex-col gap-6"
  } h-[calc(100vh-40px)] overflow-y-auto`}
>

  {paginated.map((item) =>
    view === "grid" ? (
      <ProductDetailsCard key={item.id} {...item} />
    ) : (
      <div
        key={item.id}
        className="flex gap-6 bg-white p-4 rounded-lg shadow-[0_2px_73px_2px_rgba(0,0,0,0.05)]"
      >
        {/* Left Image */}
        <div className="w-40 flex-shrink-0">
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-40 object-contain"
          />
        </div>

        {/* Right Side Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="font-semibold text-lg">
            {item.heading}
          </h3>

          <p className="text-gray-500">
            {item.title}
          </p>

          <p className="text-pink-500 font-bold mt-2">
            ${item.price}
          </p>

          <p className="flex items-center gap-1">
          <Star/> {item.ratings}
          </p>
        </div>
      </div>
    )
  )}
</div>

        {/* Pagination */}
        <div className="flex justify-center mt-11 gap-3">
          {[...Array(totalPages)].map((_, index)=>(
            <button
              key={index}
              onClick={()=> setPage(index+1)}
              className={`w-8 h-8 rounded-full ${
                page === index+1
                ? "bg-pink text-white"
                : "bg-white shadow"
              }`}
            >
              {index+1}
            </button>
          ))}
        </div>

      </div>
    </div>
  </div>
);

};

export default Products;
