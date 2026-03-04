import React from 'react'
import { PageTransition } from '../../utils/animations'
import Navbar from '../Navbar'
import Hero from './Hero'
import PrivacyContent from './PrivacyContent'
import MoreQuestion from './MoreQuestion'
import Footer from '../Footer'



const PrivacyPolicyPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar/>
        
        {/* main content  */}
        <div className="flex flex-col w-full">
            <Hero/>
            <div className="flex flex-col gap-[60px] md:gap-[80px] lg:gap-[120px] w-full py-0 mt-[26px] px-20">
                <PrivacyContent/>
                <MoreQuestion/>
            </div>
            <Footer/>
        </div>
    </PageTransition>
  )
}

export default PrivacyPolicyPage