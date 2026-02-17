import React from 'react'
import Discount from '../../../components/special-offers/Discount'
import SummerSpecial from '@/components/home/SummerSpecial'
import Commitments from '../../../components/special-offers/Commitments'
import SignUp from '@/components/home/SignUp'
import CommonHero from '@/components/common/CommonHero'

const page = () => {
  return (
    <div>
      <CommonHero/>
      <Discount/>
      <SummerSpecial/>
      <Commitments/>
      <SignUp/>
    </div>
  )
}

export default page