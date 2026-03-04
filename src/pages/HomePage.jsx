import Ecosystem from "../components/Ecosystem";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurWork from "../components/OurWork";
import Partners from "../components/Partners";
import Projects from "../components/Projects";
import Questions from "../components/Questions";
import Technology from "../components/Technology";
import WhyChoose3D from "../components/WhyChoose3D";
import WhyTvasta from "../components/WhyTvasta";
import BuildBetterTogether from "../components/BuildBetterTogether";
import { PageTransition } from "../utils/animations.jsx";
import PrivacyConsent from "../components/PrivacyConsent.jsx";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <PageTransition className="relative w-full bg-white">
        <Navbar />
        <Hero />
        <div className="flex flex-col justify-center items-center gap-[120px] w-full py-[60px]">
          <PrivacyConsent/>
          <Partners />
          <OurWork />
          <WhyChoose3D />
          <WhyTvasta />
          <Technology />
          <Ecosystem />
          <Projects />
          <Questions />
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default HomePage;
