import React from 'react'
import GetInTouch from '../../components/contact/GetInTouch'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CommonHero from '@/components/common/CommonHero'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero
        title="Contact Us"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/about">
              <span>Contact Us</span>
            </Link>
          </> }
      />
        <GetInTouch/>
        <Footer/>
    </>
  )
}

export default page