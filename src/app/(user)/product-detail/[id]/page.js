import CommonHero from "@/components/common/CommonHero";
import ProductDetail from "@/components/details-page/ProductDetails";
import RelatedProducts from "@/components/details-page/RelatedProducts";
import React, { use } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  return (
    <div>
      <CommonHero />
      <div id="product-info">
        <ProductDetail productId={id} />
      </div>
      <RelatedProducts productId={id}  />
    </div>
  );
};

export default page;
