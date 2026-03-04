import { PageTransition } from '../../utils/animations.jsx';
import Footer from '../Footer';
import Navbar from '../Navbar';
import BuildingTomorrow from './BuildingTomorrow';
import Certifications from './Certifications';
import FoundersTeam from './FoundersTeam';
import KeyCollaborations from './KeyCollaborations';
import OurMission from './OurMission';
import OurStory from './OurStory';
import PageHeader from './PageHeader';
import WhatWeDo from './WhatWeDo';

const WhoAreWe = () => {
  return (
    <div className='overflow-x-hidden'>
    <PageTransition className="relative w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <PageHeader />
        
        <div className="flex flex-col items-center gap-[120px] w-full py-0">
          <OurStory />
          <OurMission />
          <WhatWeDo />
          <FoundersTeam />
          <Certifications />
          <KeyCollaborations />
          <BuildingTomorrow />
        </div>
        
        {/* Spacing before footer */}
        <div className="w-full h-[120px]"></div>
      </div>
      
      <Footer />
    </PageTransition>
    </div>
  );
};

export default WhoAreWe;
