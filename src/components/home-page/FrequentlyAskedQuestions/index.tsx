import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'
import { faqs } from '@/data/faqs'

// Both the visible accordion and the SEO JSON-LD FaqSchema render from the same
// src/data/faqs.ts source, so the UI and structured data can't drift apart.
const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px] faustina-font">
          Frequently Asked Questions
        </h2>
        <div>
          {faqs.map((faq) => (
            <FrequentlyAskedQuestions key={faq.question} title={faq.question}>
              <p>{faq.answer}</p>
            </FrequentlyAskedQuestions>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
