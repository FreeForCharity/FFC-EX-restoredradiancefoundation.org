import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportSection from '@/components/home-page/SupportFreeForCharity'
import OurPrograms from '@/components/home-page/Our-Programs'
import ApplyNow from '@/components/home-page/Apply-Now'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <OurPrograms />
      <ApplyNow />
      <SupportSection />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default index
