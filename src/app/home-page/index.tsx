import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportSection from '@/components/home-page/SupportFreeForCharity'
import OurPrograms from '@/components/home-page/Our-Programs'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <OurPrograms />
      <VolunteerwithUs />
      <SupportSection />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default index
