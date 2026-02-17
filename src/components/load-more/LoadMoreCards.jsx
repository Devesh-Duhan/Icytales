import React from 'react'
import { MoreProducts } from '../common/Helper';
import { AdminIcon, CalenderIcon, VirtualAssistantIcon } from '../common/Icons';
import Button from '../common/Button';
import Image from 'next/image';

const LoadMoreCards = () => {
  return (
    <div className="max-w-285 w-full mx-auto px-3 pt-32.5 pb-25 max-lg:py-22 max-md:py-14 max-sm:py-8">
      <div className="grid grid-cols-3 gap-7.5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {MoreProducts.map((items) => (
          <div
            key={items.id}
            className="max-w-87.5 max-sm:max-w-110 w-full max-lg:mx-auto rounded-[20px] shadow-[0px_6px_41px_6px_rgba(0,0,0,0.05)]"
          >
            <div className="max-sm:flex max-sm:justify-center max-sm:pt-4">
              <Image
                src={items.productimage}
                height={247}
                width={350}
                alt="product image"
              />
            </div>
            <div className="border-b border-[rgba(0,0,0,0.15)]">
              <div className="p-[20px_24px_0px_20px]">
                <div className="flex items-center justify-between max-md:gap-4 gap-6">
                  <div className="flex  items-center gap-1">
                    <span>
                      <AdminIcon />
                    </span>
                    <span className="text-lightbrown leading-5 tex-sm">
                      By : Admin
                    </span>
                  </div>
                  <div className="flex  items-center gap-1">
                    <span>
                      <VirtualAssistantIcon />
                    </span>
                    <span className="text-lightbrown leading-5 tex-sm">
                      Virtual Assistant
                    </span>
                  </div>
                </div>
                <p className="text-darkbrown  font-medium text-xl leading-7.5 pt-4.75 pb-6 ">
                  Why You Need Virtual Assistant for Your Company
                </p>
              </div>
            </div>
            <div className="px-5 py-4.5 flex justify-between gap-1">
              <div className="flex items-center gap-2">
                <span>
                  <CalenderIcon />
                </span>
                <span className="text-lightbrown text-sm leading-5">
                  Dec 20,2022
                </span>
              </div>
              <div>
                <Button
                  theme="primary"
                  height="h-[39px] max-md:h-[32px]"
                  width="w-[114px] max-md:w-[95px]"
                  className="uppercase text-xs leading-6.5"
                  type="button"
                  disabled={false}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center pt-6'>
        <Button
          theme="primary"
          height="h-[41px]"
          width="w-[127px]"
          className="uppercase "
          type="button"
          disabled={false}
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default LoadMoreCards