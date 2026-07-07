import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px] faustina-font">
          Frequently Asked Questions
        </h2>
        <div>
          <FrequentlyAskedQuestions title="What does Restored Radiance Foundation do?">
            <p>
              We empower oncology survivors with safe, science-backed skincare education,
              restorative facial services, and access to oncology-approved products that support
              healing during and after cancer treatment.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="Who do you serve?">
            <p>
              People navigating skin changes during and after cancer treatment — oncology survivors
              seeking gentle, informed skincare and support.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="Are donations tax-deductible?">
            <p>
              Yes. Restored Radiance Foundation is a recognized 501(c)(3) nonprofit organization
              (EIN 42-2751966), and donations are tax-deductible to the extent allowed by law.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="How can I get involved?">
            <p>
              We welcome volunteers and partners. Use the Volunteer section to reach out and share
              how you&apos;d like to help.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="The site is still being built out — what's next?">
            <p>
              We&apos;re actively developing our programs and resources. Please check back soon for
              more ways to participate and receive support.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
