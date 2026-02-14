import React from 'react'

import Hero from './Hero'
import Journey from './Journey'
import Misson from './Misson'
import Statics from './Statics'
import Team from './Team'
import SignUp from '@/components/home/SignUp'

const page = () => {
  return (
    <div>
        <Hero/>
        <Journey/>
        <Misson/>
        <Statics/>
        <Team/>
        <SignUp/>
    </div>
  )
}

export default page