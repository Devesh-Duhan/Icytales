import { teamData } from '@/components/common/Helper';
import { Facebookicon, Instaicon, Youtubeicon } from '@/components/common/Icons';
import Image from 'next/image';
import React from 'react'

const OurTeam = () => {
  return (
    <section className="container  pt-35.5 pb-20">
      <div className="flex justify-center flex-col items-center">
        <h2 className="heading text-darkbrown">
          Our <span className="text-pink">Team</span> Members
        </h2>

        {/* Subtitle */}
        <p className="pt-4.5 leading-6.5 text-xl text-lightbrown">
          Get to know the friendly faces behind your favorite flavors.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-18.75 px-3 pt-12.5 pb-18.75">
        {teamData.map((member) => ( 
          <div key={member.id}>
            <div className="flex flex-col items-center">
              {/* Image */}
              <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-[0px_12px_105px_12px_#00000008]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="pt-8 text-[22px] font-bold leading-5.5 text-darkbrown">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-lightbrown leading-6 pt-1.75">{member.role}</p>

              {/* Social */}
              <div className="flex gap-2.5 pt-5">
                <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                  <Facebookicon />
                </div>
                <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                  <Instaicon />
                </div>
                <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                  <Youtubeicon />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam