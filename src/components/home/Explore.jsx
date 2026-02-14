import Image from 'next/image'
import React from 'react'
import Button from '../common/Button';
import { RightArrow } from '../common/Icons';

const Explore = () => {
  return (
    <section className="outer-container relative">
      <div className="absolute right-63.25 top-75.5">
                <Image
                  src="/images/doubleTriangledecorative.png"
                  height={55}
                  width={52}
                  alt="trianglre"
                />
              </div>
              <div className="absolute bottom-51 left-61.75">
                <Image
                  src="/images/doubleCircledecorative.png"
                  height={62}
                  width={64}
                  alt="triangle"
                />
              </div>
              <div className="absolute top-27.5 left-210.75">
                <Image
                  src="/images/dottedDecorative.png"
                  height={23}
                  width={84}
                  alt="triangle"
                />
              </div>
              <div className="absolute bottom-0 right-8">
                <Image
                  src="/images/dShapeDecorative.png"
                  height={92}
                  width={224}
                  alt="triangle"
                />
              </div>
      <div className="container ">
        <div className="flex items-center justify-between gap-3">
          <article>
            <Image src="/images/girlwithIceCrem.png" height={624} width={500} />
          </article>
          <aside className="max-w-128.25 w-full flex flex-col gap-8">
            <h2 className="heading">
              Relive the Sweet Memories of Classic
              <span className="text-pink"> Ice Creams</span>
            </h2>
            <p className="text-xl  text-lightbrown leading-7.5">
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </p>
            <Button
              theme="primary"
              height="h-15.5"
              width="w-[238px]"
              icons={<RightArrow />}
              type="button"
            >
              Explore Our Menu
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Explore