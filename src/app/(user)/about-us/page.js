import React from 'react'

import CommonHero from '@/components/common/CommonHero'
import Journey from './Journey'
import Misson from './Misson'
import Statics from './Statics'

const page = () => {
  return (
    <div>
        <CommonHero/>
        <Journey/>
        <Misson/>
        <Statics/>
       
        {/* <SignUp/> */}
    </div>
  )
}

export default page