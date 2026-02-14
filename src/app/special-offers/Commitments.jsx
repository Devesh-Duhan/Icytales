import { CommitmentCards } from '@/components/common/Helper';
import Image from 'next/image';
import React from 'react'

const Commitments = () => {
  return (
    <>
      <section className=" bg-[linear-gradient(301.26deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)] ">
        <div className="container pt-35.5 pb-37">
          {/* Heading */}
          <div className="text-center">
            <h2 className="heading text-darkbrown">
              Our <span className="text-pink">Commitments</span> to You
            </h2>
            <p className="text-lightbrown text-xl leading-6.5 pt-4.5 ">
              Exceeding expectations with every promise we make.
            </p>
          </div>

          {/* Main Layout */}
          <div className=" flex justify-between gap-7 items-center">
            {/* Left Cards */}
            <div className="flex flex-col gap-7">
              {CommitmentCards.slice(0, 2).map((card) => {
            
                return (
                  <div
                    key={card.id}
                    className="bg-white rounded-[20px] p-[31px_27px_35px_27px]  max-w-63.75 w-full text-center hover:shadow-lg transition"
                  >
                    <div
                      className="w-18.75  h-18.75  relative mx-auto flex items-center justify-center rounded-full text-white "
                    >
                    <Image
                    src={card.icon}
                    fill
                    alt={card.title}
                    />
                    </div>

                    <h3 className="font-bold leading-6 text-darkbrown text-xl pt-5">{card.title}</h3>
                    <p className="text-lightbrown leading-6 pt-2.75">{card.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Center Image */}
            <div className=" pt-14.5">
              <Image
                src="/images/commitmentMainIceCream.png"
                alt="icecream"
                width={389}
                height={644}
                className="object-contain"
              />
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-8">
              {CommitmentCards.slice(2, 4).map((card) => {
                
                return (
                  <div
                    key={card.id}
                    className="bg-white rounded-[20px] p-[31px_37px_35px_37px]  max-w-63.75 w-full text-center hover:shadow-lg transition"
                  >
                    <div className="w-18.75  h-18.75  relative mx-auto flex items-center justify-center rounded-full text-white ">
                      <Image src={card.icon} fill alt={card.title} />
                    </div>

                    <h3 className="font-bold leading-6 text-darkbrown text-xl pt-5">
                      {card.title}
                    </h3>
                    <p className="text-lightbrown leading-6 pt-2.75">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Commitments