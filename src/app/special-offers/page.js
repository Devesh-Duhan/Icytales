import React from 'react'
import Hero from './Hero'
import Discount from './Discount'
import SummerSpecial from '@/components/home/SummerSpecial'
import Commitments from './Commitments'
import SignUp from '@/components/home/SignUp'

const page = () => {
  return (
    <div>
      <Hero/>
      <Discount/>
      <SummerSpecial/>
      <Commitments/>
      <SignUp/>
    </div>
  )
}

export default page