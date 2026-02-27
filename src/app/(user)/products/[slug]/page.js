import CommonHero from "@/components/common/CommonHero";
import ProductDetail from "@/components/details-page/ProductDetails";
import RelatedProducts from "@/components/details-page/RelatedProducts";
import React, { use } from "react";

const page = ({ params }) => {
  console.log(params,"params")
  const { slug } = use(params);
  return (
    <div>
      <CommonHero />
      <div id={slug}>
        <ProductDetail productId={slug} />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default page;
