import CommonHero from '@/components/common/CommonHero'
import ProductDetail from '@/components/details-page/ProductDetails'
import ProductTabs from '@/components/details-page/ProductTabs'
import RelatedProducts from '@/components/details-page/RelatedProducts'
import React from 'react'

const page = () => {
  return (
    <div>
        <CommonHero/>
        < ProductDetail/>
        <ProductTabs/>
        <RelatedProducts/>


    </div>
  )
}

export default page