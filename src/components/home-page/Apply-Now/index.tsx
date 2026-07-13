import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { siteConfig } from '@/lib/site.config'

const index = () => {
  return (
    <div id="apply" className="bg-[#5D4859] py-[40px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="mt-[2px] mb-[42px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center text-white faustina-font">
          Apply Now
        </h2>
        <p className="mb-[13px] w-[85%] mx-auto font-[500] text-[20px] leading-[30px] text-center text-white lato-font">
          If you&apos;re navigating skin changes during or after cancer treatment, we&apos;d love to
          help. Apply now to see if our programs are right for you.
        </p>
        {siteConfig.integrations.applicationFormUrl ? (
          <a
            href={siteConfig.integrations.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[216px] h-[62px] rounded-[27px]
             flex items-center justify-center px-[32px] py-[18px] gap-[10px]
             text-[#5D4859] mx-auto mt-[30px] bg-white text-[20px] font-[400] font-sans text-center lato-font"
          >
            Apply Now
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="w-[280px] h-[62px] rounded-[27px] flex items-center justify-center px-[32px] py-[18px] gap-[10px] text-[#5D4859] mx-auto mt-[30px] bg-white/80 text-[20px] font-[400] font-sans text-center cursor-default lato-font"
          >
            Applications — coming soon
          </button>
        )}

        <Image
          src={assetPath('/Images/Apply-Now.webp')}
          alt="Apply Now"
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
