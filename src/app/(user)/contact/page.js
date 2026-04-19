import React from 'react'
import GetInTouch from '../../../components/contact/GetInTouch'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CommonHero from '@/components/common/CommonHero'
import Link from 'next/link'
import Map from '@/components/contact/Map'

const page = () => {
  return (
    <>
        <CommonHero/>
        <GetInTouch/>
        <Map/>
    </>
  )
}

export default page