import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { siteConfig } from '@/lib/site.config'

const index = () => {
  return (
    <div id="volunteer" className="bg-[#2A6682] py-[40px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="mt-[2px] mb-[42px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center text-white faustina-font">
          Volunteer with Us
        </h2>
        <p className="mb-[13px] w-[85%] mx-auto font-[500] text-[20px] leading-[30px] text-center text-white lato-font">
          Your time and skills can create a lasting impact. Whether you&apos;re helping with
          outreach, education, or supporting survivors, your contributions further our mission.
        </p>
        {siteConfig.integrations.idealistUrl ? (
          <a
            href={siteConfig.integrations.idealistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[216px] h-[62px] top-[261px] left-[611px] rounded-[27px]
             flex items-center justify-center px-[32px] py-[18px] gap-[10px]
             text-[#113563] mx-auto mt-[30px] bg-white text-[20px] font-[400] font-sans text-center lato-font"
          >
            Volunteer
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="w-[280px] h-[62px] rounded-[27px] flex items-center justify-center px-[32px] py-[18px] gap-[10px] text-[#113563] mx-auto mt-[30px] bg-white/80 text-[20px] font-[400] font-sans text-center cursor-default lato-font"
          >
            Volunteering — coming soon
          </button>
        )}

        <Image
          src={assetPath('/Images/Volunteer-with-Us.webp')}
          alt="Volunteer-with-Us"
          width={1083}
          height={607}
          className="mx-auto mt-[40px]"
          loading="lazy"
        ></Image>
      </div>
    </div>
  )
}

export default index
