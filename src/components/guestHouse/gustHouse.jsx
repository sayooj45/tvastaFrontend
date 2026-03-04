import React from 'react'
import { PageTransition } from '../../utils/animations'
import Navbar from '../Navbar'
import Hero from './Hero'
import ProjectOverview from './ProjectOverview'
import ChallengeAndApproach from './ChallengeAndApproch'
import Outcome from './Outcome'
import Footer from '../Footer'

const GuestHousePage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar/>
        <div className="flex flex-col w-full">
            <Hero/>
            <ProjectOverview/>
            <ChallengeAndApproach/>
            <Outcome/>
        </div>
        <Footer/>
    </PageTransition>
  )
}

export default GuestHousePage