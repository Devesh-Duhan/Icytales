import Image from 'next/image'
import React from 'react'
import Button from '../common/Button';

const Explore = () => {
  return (
    <section className="outer-container">
      <div className="container">
        <div className="bg-[url(/images/exploreContainerBg.png)] bg-cover bg-center bg-no-repeat">
          <div className="flex items-center gap-21">
            <article>
              <Image
                src="/images/girlwithIceCrem.png"
                height={624}
                width={500}
              />
            </article>
            <aside className="max-w-128.25 w-full flex flex-col gap-8">
              <h2 className="heading">
                Relive the Sweet Memories of Classic
                <span className="text-pink"> Ice Creams</span>
              </h2>
              <p className="text-xl  text-lightbrown leading-7.5">
                From rich chocolate fudge to creamy vanilla sundaes, discover
                our menu of classic ice cream creations.
              </p>
              <Button
                theme="primary"
                content="Explore Our Menu"
                icons="<RightArrowIcon  />"
                height="h-[62px] mt-1"
                width="w-[238px]"
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore