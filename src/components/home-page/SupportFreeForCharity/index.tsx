import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const Index = () => {
  return (
    <div id="donate">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] px-[20px] max-w-[1280px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[60px] faustina-font">
          Support Restored Radiance Foundation
        </h2>

        <div className="flex items-center flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          {/* Left side: Description and pointing hands image */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <p className="mb-[20px] font-[400] text-[25px] leading-[150%] tracking-[0] text-center lg:text-left lato-font">
              Your gift helps us provide skincare education, restorative care, and oncology-approved
              products to survivors during and after cancer treatment.
            </p>
            {/* Pointing hands image - flipped horizontally to point toward the form on the right */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] aspect-[578/386]">
                <Image
                  src={assetPath('/Images/support-free-for-charity.webp')}
                  alt="Support Restored Radiance Foundation"
                  fill
                  className="object-contain scale-x-[-1]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right side: Donation placeholder */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <div
              className="relative w-full max-w-[500px] h-[600px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center text-center px-[20px]"
              role="region"
              aria-label="Donation form"
            >
              <p className="font-[500] text-[25px] leading-[150%] tracking-[0] lato-font mb-[12px]">
                Online donations are coming soon.
              </p>
              <p className="font-[400] text-[18px] leading-[150%] tracking-[0] lato-font">
                Check back shortly to support our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
