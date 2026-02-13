import { teamData } from '@/components/common/Helper';
import Image from 'next/image';
import React from 'react'

const Team = () => {
  return (
    <div>
      {" "}
      <section
        className="w-full py-35.5 bg-[linear-gradient(299.54deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)]
"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="heading">
            Our <span className="text-pink">Team</span> Members
          </h2>

          {/* Subtitle */}
          <p className="pt-4.5 text-lightbrown">
            Get to know the friendly faces behind your favorite flavors.
          </p>

          {/* Team Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
            {teamData.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                {/* Circle Image */}
                <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-6 text-xl font-semibold text-darkbrown">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                  <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white cursor-pointer">
                    {/* <Facebook size={16} /> */}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white cursor-pointer">
                    {/* <Instagram size={16} /> */}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white cursor-pointer">
                    {/* <Twitter size={16} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team