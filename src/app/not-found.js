import Button from '@/components/common/Button'
import { ButtonLeftArrow } from '@/components/common/Icons'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(120deg,#EFD7EF,#F5F9FC,#F8EAE1,#EAF8F9)] px-4">
            <div className='text-center'>
                <h2 className='text-[140px] text-[#0F0200] berkshire '>404</h2>
                <p className='text-[36px] text-[#0F0200] font-medium '>Sorry! The Page Not Found ;(</p>
                <p className='text-[20px] text-lightbrown max-w-185 w-full text-center pt-5.75'>Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                 <Link href="/">
                 <div className='flex items-center justify-center'>
                    <Button theme="primary" height="h-[58px]" width="w-[200.2px]" iconposition="flex-row-reverse gap-[23.68px]" icons={<ButtonLeftArrow/>} className='mt-7.5'>Back to Home</Button>
                 </div></Link>
            </div>
        </div>
    )
}
