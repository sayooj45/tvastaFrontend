import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WhoAreWePage from "./pages/WhoAreWePage";
import OurTechnologyPage from "./pages/OurTechnologyPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProductsPage from "./pages/ProductsPage";
import TvastaStoriesPage from "./pages/TvastaStoriesPage";
import FAQsPage from "./pages/FAQsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CareersPage from "./pages/CareersPage";
import PrintersPage from "./pages/PrintersPage";
import GantryPrinters from "./pages/GantryPrinters";
import RoboticPrinters from "./pages/RoboticPrinters";
import TvastaSoftware from "./pages/TvastaSoftware";
import Materials from "./pages/Materials";
import AccessoriesandTurnkey from "./pages/AccessoriesandTurnkey";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import First3DPrinted from "./pages/First3DPrinted";
import GuestHousepage from "./pages/GuestHousepage";
import WallTNCA from "./pages/WallTNCA";
export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        duration: 1.2,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoAreWePage />} />
          <Route path="/our-technology" element={<OurTechnologyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/tvasta-stories" element={<TvastaStoriesPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/our-technology/printers" element={<PrintersPage />} />
          <Route
            path="/our-technology/printers/gantry-based"
            element={<GantryPrinters />}
          />
          <Route
            path="/our-technology/printers/robotic-arm-based"
            element={<RoboticPrinters />}
          />
          <Route path="/our-technology/software" element={<TvastaSoftware />} />
          <Route path="/our-technology/materials" element={<Materials />} />
          <Route
            path="/our-technology/accessories"
            element={<AccessoriesandTurnkey />}
          />
          <Route path="/projects/casestudy" element={<ProjectCaseStudy />} />
          <Route path="/privacy-Policy" element={<PrivacyPolicyPage/>}/>
          <Route path="/projects/casestudy/firs3DPrintedHouse" element={<First3DPrinted/>}/>
          <Route path="/projects/casestudy/guest-House" element={<GuestHousepage/>}/>
          <Route path="/projects/casestudy/wall-of-TNCA" element={<WallTNCA/>}/>
        </Routes>
      </Router>
    </ReactLenis>
  );
}
