import React, { use } from 'react'
import Discount from '../../../components/special-offers/Discount'
import SummerSpecial from '@/components/home/SummerSpecial'
import Commitments from '../../../components/special-offers/Commitments'
import SignUp from '@/components/home/SignUp'
import CommonHero from '@/components/common/CommonHero'


const page = ({params}) => {
  console.log(params)
  const {slug} = use(params)
  return (
    <div>
      <CommonHero />
      <Discount productId={slug} />
      <SummerSpecial />
      <Commitments />
      <SignUp />
    </div>
  );
}

export default page