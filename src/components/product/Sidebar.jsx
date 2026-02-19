import Image from "next/image";
import { homeProducts } from "../common/Helper";
import { Search } from "../common/Icons";

const Sidebar = ({ 
 categories,
  category,
  setCategory,
  setPage,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  search,
  setSearch,
    closeSidebar   
}) => {

  const featured = homeProducts.slice(0, 4);

  return (
    <div className="px-6 w-full max-w-[280px]">

      {/*Search */}
      <div className="relative mb-[60px]">
        <input
  type="text"
  placeholder="Search"
  value={search}
 onChange={(e) => {
  setSearch(e.target.value);
  setPage(1);
  closeSidebar?.();
}}

  className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none"
/>
        <span className="absolute right-3  top-2.5 text-gray-400">
          <Search/>
        </span>
      </div>

      {/*  Categories */}
   <div className="space-y-4">
      <h3 className=" text-[22px] mb-5 leading-6 berkshire">
  Categories
</h3>
  {categories.map((cat) => (
    <div
      key={cat.name}
     onClick={() => {
  setCategory(cat.name);
  setPage(1);
  closeSidebar?.();  
}}

      className="flex items-center gap-3 cursor-pointer group"
    >
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center
          ${
            category === cat.name
              ? "border-pink-500"
              : "border-gray-300"
          }`}
      >
        {category === cat.name && (
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        )}
      </div>

      <p className="text-sm text-gray-600 group-hover:text-pink-500 transition">
        {cat.name}({cat.count})
      </p>
    </div>
  ))}
</div>



<hr className="mt-[31px] border-gray-300" />


      {/*  Filter by Price */}
    <h3 className=" text-[22px] mb-5 leading-6 my-[30px] berkshire">
  Filter By Price
</h3>

<p className="text-sm mt-[30px] text-[rgba(120,120,120,1)] leading-[14px]">
  Range:
  <span className="text-pink  ml-[3px] leading-[100%]  ">

    <input
      type="number"
      value={minPrice}
      onChange={(e) => {
  setMinPrice(e.target.value);
  setPage(1);
}}

      className="w-10 bg-transparent border-none outline-none appearance-none text-center
      [&::-webkit-inner-spin-button]:appearance-none
      [&::-webkit-outer-spin-button]:appearance-none"
    />
    $

    {" - "}

    <input
      type="number"
      value={maxPrice}
     onChange={(e) => {
  setMaxPrice(e.target.value);
  setPage(1);
}}
      className="w-10 bg-transparent border-none outline-none appearance-none text-center
      [&::-webkit-inner-spin-button]:appearance-none
      [&::-webkit-outer-spin-button]:appearance-none"
    />
    $

  </span>
</p>

<hr className="mt-6 border-gray-300" />
      {/*  Featured Products */}
       <h3 className=" text-[22px] mb-5 leading-6 mt-[30px] berkshire">
Featured Products
</h3>
      <div className="space-y-4">
        {featured.map((item) => (
          <div key={item.id} className="flex items-center gap-3">

            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Image
                src={item.image}
                alt={item.heading}
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-darkbrown">
                {item.heading}
              </p>
              <div className="flex gap-2 text-sm">
                <span className="line-through text-gray-400">
                  $8.80
                </span>
                <span className="text-pink-500 font-semibold">
                  ${item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
