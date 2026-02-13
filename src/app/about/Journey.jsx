import Button from "@/components/common/Button";
import { RightArrow } from "@/components/common/Icons";
import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <section className="max-w-480 w-full mx-auto relative">
      <div className="absolute right-0 top-58">
        <Image src="/images/floatingIceCream.png" height={369} width={222} alt="icecream"/>
      </div>
      <div className="max-w-7xl w-full mx-auto px-3 ">
        <div className="flex justify-between gap-3 py-37">
          <article>
            <Image
              src="/images/joueneyCouple.png"
              height={590}
              width={590}
              alt="couple"
            />
          </article>
          <aside className="max-w-138.25 w-full pt-8.75 pb-12.25">
            <div className="flex flex-col gap-10.5">
              <h2 className="heading">
                Our <span className="text-pink"> Journey</span> Began With a
                Simple Dream
              </h2>
              <div className="flex flex-col gap-7">
                <p className="text-lightbrown text-xl leading-8">
                  Our goal is to make the best ice cream using only the finest,
                  natural ingredients. From rich, creamy classics to adventurous
                  new creations, every flavor is meticulously crafted in-house
                  to ensure the highest quality and freshness.
                </p>
                <p className="text-lightbrown text-xl leading-8">
                  We take pride in offering a diverse range of options,
                  including dairy-free, vegan, and gluten-free choices, so
                  everyone can find their perfect scoop.
                </p>
              </div>
              <Button
                theme="primary"
                height="h-15.5"
                width="w-48"
                leading="leading-5"
                icons={<RightArrow />}
                className="uppercase tracking-wide"
                type="button"
              >
                Read More
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Journey;
