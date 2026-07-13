import React from 'react'

const index = () => {
  return (
    <div id="mission" className="py-[52px]">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] max-w-[1280px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px] faustina-font">
          Our Mission
        </h2>
        <p className="font-[700] text-[25px] leading-[150%] tracking-[0] text-center mb-[30px] lato-font italic">
          &ldquo;The skin remembers what the body endures.&rdquo;
        </p>
        <p className="font-[400] text-[20px] leading-[150%] tracking-[0] text-center mb-[50px] lato-font">
          Oncology-safe skincare. Restored confidence. Renewed comfort. We help individuals affected
          by cancer feel comfortable in their skin again — through oncology-trained care, education,
          and a fund that puts treatment within reach.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          <div>
            <h3 className="font-[700] text-[20px] uppercase tracking-[1px] mb-[12px] lato-font">
              Our Story
            </h3>
            <p className="font-[400] text-[20px] leading-[150%] lato-font">
              Restored Radiance Foundation was founded by an oncology-trained, licensed esthetician
              who saw a quiet gap in cancer care: the skin. Treatment is hard on the body&apos;s
              largest organ — and the right touch, the right products, and the right knowledge can
              change how someone feels inside their own skin every day. We exist to make that care
              accessible — through education that empowers, treatments that soothe, and a fund that
              opens the door to anyone who needs it.
            </p>
          </div>
          <div>
            <h3 className="font-[700] text-[20px] uppercase tracking-[1px] mb-[12px] lato-font">
              Our Vision
            </h3>
            <p className="font-[400] text-[20px] leading-[150%] lato-font">
              To create a future where every cancer survivor has access to safe, restorative
              skincare resources and compassionate support, empowering them to heal, regain
              confidence, and thrive beyond cancer.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#CFC5B2]"></div>
    </div>
  )
}

export default index
