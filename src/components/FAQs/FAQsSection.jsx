import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggeredList } from "../../utils/animations.jsx";

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className="flex flex-col gap-[40px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.45 }}
    >
      <div className="flex flex-col gap-[38px] w-full">
        {/* Question */}
        <button
          onClick={onToggle}
          className="text-left w-full text-description-mobile md:text-description font-normal leading-[40px] text-[#101010] font-['Outfit'] hover:text-[#E63946] transition-colors duration-300 focus:outline-none"
        >
          {question}
        </button>

        {/* Answer with Expand/Collapse Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-row items-start gap-[28px] w-full">
                {/* Arrow Icon */}
                <div className="flex flex-col items-start p-[10px_1px_4px] gap-[10px] w-6 min-w-6 h-[29.98px]">
                  <svg
                    className="w-[22px] h-[15.98px] text-[#E63946] transform rotate-90"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>

                {/* Answer text */}
                <div className="flex-1 text-description-mobile md:text-description font-normal leading-[160%] text-[#101010] font-['Outfit'] whitespace-pre-line">
                  {answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Separator Line */}
      <div className="w-full h-[2px] bg-[#101010]"></div>
    </motion.div>
  );
};

const FAQsSection = () => {
  const itemsPerPage = 8;
  const sectionRef = useRef(null);

  // Organized FAQ data by sections
  const faqSections = [
    {
      title: "Regulatory - Conventional & New Technologies",
      faqs: [
        {
          question:
            "What is the approval process for construction of conventional buildings (B2B)?",
          answer: `For Standard building construction, the following drawings require sign off from consultants and Budget approvals with BOQ line items:
• Architecture design (by Design Architect)
• Interiors
• MEP drawings
• Structural drawings (by Structural Consultant)`,
        },
        {
          question:
            "What is the approval process for construction of conventional buildings with Government affiliated Institutions (or) organizations?",
          answer:
            "Along with approvals for standing building construction, layout approval from local municipal authority along with budget approval from the govt. POC",
        },
        {
          question:
            "What are the types of drawings that are required for conventional construction activity?",
          answer: `Good For Construction Drawings:
• Architectural - Building Drawings (+Elevation)
• Structural Drawings
• MEP Drawings
• Lighting, Interiors and Finishes`,
        },
        {
          question:
            "What are the standard reports required for generating structural drawings for construction projects?",
          answer: `• Soil Report
• Site Contour Drawings (with tree markings if any)
• Structural Analysis based on 3D Design (for unique projects)`,
        },
        {
          question:
            "Is Structural Approval Mandatory for all conventional construction buildings?",
          answer: `• All Structural drawings have to follow IS codes for construction.
• Structural drawings have to be attested by a certified structural engineer
• Concrete Strength data has to be shared to Structural engineer for quality approvals`,
        },
      ],
    },
    {
      title: "Concrete 3D Printing - Regulatory",
      faqs: [
        {
          question:
            "What steps/approvals are required for 3D Printed Building from conventional building?",
          answer: `• PACS certification is sufficient for promoting 3D Printing building approvals
• Without PACS certification, building design has to be verified by:
  ○ Structural Engineer who is part of a Govt. affiliated Institute
  ○ Material QC data has to be validated to ensure strength criteria is met`,
        },
        {
          question:
            "What is PACS Certification? How are new technologies construction activities promoted in India by the Ministry of Housing and Urban Affairs MoHUA?",
          answer: "https://bmtpc.org/topics.aspx",
        },
        {
          question:
            "How many technologies have been granted PACS certification in the last 10 years? How has their adoption rate scaled over the years?",
          answer: `• Since 1990, 84 methodologies have been granted PACS Certification
• PACS Certified technologies have seen commendable growth moving from Demonstration projects to Commercial Projects (for eg, uPVC Windows, GFRG Panels)`,
        },
        {
          question:
            "How does PACS certification help with Demonstration Housing Projects (DHP) across states in India?",
          answer:
            "PACS Certification enables demonstration of technology across different states in the country, promoting use and sharing information about the technology which aids with improving construction methodology",
        },
        {
          question:
            "How does Tvasta plan to promote more concrete 3D Printed Buildings in different regions?",
          answer: `Tvasta aims to introduce automation in the construction industry, via Concrete 3D Printing. In Construction Industry, Tvasta plans to capture the market using the following methods:
• Execution of pilot projects across different markets and promoting unique design features using 3D Printing
• Introduction of New Infrastructure elements through State Civic bodies
• Supporting with Structural and material testing aiding with development of Codes for 3D Printing (Further Submission to Bureau of Indian Standards - providing platform for entrance into the larger construction market via any individual contractor)`,
        },
        {
          question:
            "What approvals are required for 3D Printed buildings in the USA and MENA?",
          answer: `Dubai has updated the building codes in the region to support with Construction 3D Printing process:
https://www.dm.gov.ae/wp-content/uploads/2024/07/Dubai-Municipality-3DCP-Guideline-1st-Edition-Jun24.pdf`,
        },
        {
          question:
            "How does Tvasta plan on executing 3D Printing projects in USA and MENA?",
          answer: `Tvasta has shipped its 3D Printers to the Middle East and USA which will serve as the primary contributor for Construction 3D Printing projects. Service options will also be available for clients/contractors purchasing the machine which will lead to increased 3D Printing footfall in the US & Middle East construction market by Tvasta`,
        },
      ],
    },
    {
      title: "3D Printing Material & Carbon Emissions",
      faqs: [
        {
          question: "What Material composition is Tvasta's 3D Printed Mix?",
          answer: `Tvasta has created a proprietary mix for 3D Printing which meets the strength requirements for project execution. The mix contains the following materials:
• Cement / Binder
• Sand
• Admixtures in specific proportions (Designed and tested by Tvasta)`,
        },
        {
          question:
            "How is Concrete Material Classified for Structural Requirements? What is the process for monitoring QC for Concrete based material?",
          answer: `Concrete materials are classified according to the strength that the designed mix will achieve on curing completion. The material grade is selected by the structural engineer who is evaluating the design based on the received soil report for the specific region. The range is as follows:
• M25 Grade
• M30 Grade
• M35 Grade`,
        },
        {
          question:
            "Are there any additional steps required for Structural and QC maintenance of 3D Printing Material?",
          answer: `No differences in the quality process against conventional construction as IS codes are always followed for construction projects in India. Cube Moulds are casted during daily production. Strength data from cubes are verified to ensure quality is maintained.`,
        },
        {
          question:
            "How much Concrete Material is required for a standard 2 bedroom Conventional building? What is the material savings involved when executing the same building?",
          answer: `For a standard 2 bedroom apartment of 1500 sqft, approximately 50m³ of material is required for the 3D Printing process. Material savings is observed for the overall building since the walls are not solid - hollow pockets present in the wall support with material saving which is not observed when executing in conventional method`,
        },
      ],
    },
    {
      title: "3D Printers - Types & Applications",
      faqs: [
        {
          question:
            "What are the different types of Concrete 3D Printers available?",
          answer: `The different types of printers include:
(i) Gantry Based Concrete 3D Printer
(ii) Robotic Arm Based Concrete 3D Printer`,
        },
        {
          question: "What is a Gantry based 3D Printer?",
          answer:
            "A Gantry-Based 3D Printer is a fixed-frame robotic system where the print head moves along predefined axes (X, Y, Z) using a rigid gantry structure to deposit material layer by layer.",
        },
        {
          question: "What is a Robotic Arm based 3D Printer?",
          answer:
            "A Robotic Arm-Based 3D Printer is a multi-axis robotic system that uses an articulated robotic arm to deposit material layer by layer, enabling greater flexibility and complex geometries compared to traditional gantry-based systems.",
        },
        {
          question:
            "What type of printer is more suitable for building large structures?",
          answer: "Polar Based Concrete 3D Printer.",
        },
        {
          question:
            "What are the key parameters influencing the print quality?",
          answer: `Material Properties - Rheology (Flow & Workability), Thixotropy, Bonding Between Layers, Setting Time & Curing.

Printing Process Parameters - Extrusion Speed & Pressure, Layer Height & Print Path, Nozzle Design & Size, Print Head Motion & Speed.

Environmental Factors - Temperature & Humidity, Wind & Airflow, Vibration & Stability.

Reinforcement & Structural Integrity - Fiber Reinforcement, Embedded Reinforcement`,
        },
        {
          question:
            "What technologies (AI, BIM) does your firm incorporate from planning to implementation?",
          answer: `• AI & Machine Learning in 3D Printing integration
• BIM (Building Information Modeling) for Seamless Workflow
• IoT & Sensor-Based Monitoring
• Sustainable & Smart Construction Practices`,
        },
        {
          question:
            "What are the maintenance costs associated with concrete 3D printers compared to traditional equipment?",
          answer: `• Print Head & Nozzle Wear
• Pump & Hose Cleaning
• Sensor & Calibration Checks
• Software & Firmware Updates
• Structural Frame & Gantry Maintenance`,
        },
        {
          question:
            "What are the certifications Tvasta has in terms of Concrete-3D printers?",
          answer: "ISO Certification and PAC Certification (for company).",
        },
        {
          question:
            "Take a case of G-Floor structure: which printer is the best suitable for printing the structure?",
          answer: "Gantry based concrete 3D Printer.",
        },
      ],
    },
    {
      title: "Mechanical & Assembly",
      faqs: [
        {
          question:
            "What is the typical height range for concrete 3D printers?",
          answer: `• Gantry based concrete 3D Printer - (10-12 m)
• Robotic arm based concrete 3D Printer - (2.8 - 3m)`,
        },
        {
          question:
            "What factors influence the height reach of a 3D concrete printer?",
          answer: `• Printer Type & Structural Design
• Mechanical Stability & Precision
• Material Properties & Extrusion Control
• Structural Support & Load Distribution
• Scalability & On-Site Considerations`,
        },
        {
          question: "How can height reach be extended in 3D concrete printing?",
          answer: `Hardware-Based Methods: Modular Gantry Extensions, Telescopic or Lift-Assisted Systems, Multi-Gantry Systems, Track-Mounted Printers.

Material & Extrusion Modifications: High-Strength, Fast-Curing Mix, Lightweight Concrete Formulations, Optimized Layer Bonding, Reinforcement Integration.

Process-Based Approaches: Multi-Stage Printing, Adjustable Print Start Points, Segmental Printing & Assembly.

On-Site Structural Support Strategies: Temporary Bracing & Formwork, Optimized Load Distribution, Environmental Control Measures.`,
        },
        {
          question:
            "How does nozzle diameter affect print quality and height reach?",
          answer: `Determines print resolution, structural integrity, and maximum achievable height in 3D concrete printing.
Smaller nozzles: Better layer adhesion, allowing taller structures with proper curing.
Larger nozzles: Thicker layers, which may limit height due to weaker bonding.`,
        },
        {
          question:
            "How does extrusion pressure impact height reach and layer stability?",
          answer: `Extrusion pressure directly influences print consistency, layer bonding, and maximum achievable height.
Low Pressure: Better layer control, can print taller.
High Pressure: Fast deposition, but weaker bonding.`,
        },
        {
          question:
            "How does the variable accelerator dosing system enhance layer adhesion and curing?",
          answer:
            "A Variable Accelerator Dosing System (VADS) dynamically adjusts the dosage of setting accelerators in real time to optimize layer bonding and curing speed, ensuring structural stability and precision.",
        },
        {
          question:
            "What are the nozzle specifications and how do they impact print quality?",
          answer: `Tvasta has three shape of nozzle:
Circular - 10mm, 20mm, 30mm, 40mm, 50mm
Square - 20mm x 20mm, 30mm x 30mm
Rectangular - 10mm x 20mm, 15mm x 20mm`,
        },
        {
          question:
            "What is the primary use of an accelerator dosing pump in a concrete 3D Printer?",
          answer:
            "An accelerator dosing pump precisely injects setting accelerators into the concrete mix in real time, controlling curing speed and layer adhesion.",
        },
        {
          question:
            "What are the different types of gantry based 3D printers available under the umbrella of Tvasta?",
          answer: `• NIRMAAN RD (Lab-Scale Printer)
• NIRMAAN PD (Offsite Production Printer)
• NIRMAAN ZT (Onsite Production Printer)`,
        },
        {
          question:
            "What are the different types of robotic arm based 3D printers available under the umbrella of Tvasta?",
          answer: `• SIRA RP (Robotic arm on Pedestal)
• SIRA RC (Robotic arm on Crawler)
• SIRA RT (Robotic arm on Rail)`,
        },
        {
          question:
            "How does scalability affect the cost-effectiveness of 3D concrete printing?",
          answer: `Scalability directly influences the cost-effectiveness of 3D concrete printing by optimizing material usage, labor, machine efficiency, and overall project timelines.
• Reduced Per-Unit Costs with Larger Projects
• Labor & Time Efficiency
• Machine Utilization & ROI
• Material & Design Optimization

Greater scalability = Higher efficiency, lower per-unit cost, and faster ROI, making 3D concrete printing more viable for mass housing, infrastructure, and commercial projects.`,
        },
        {
          question:
            "How are the accessories coming up with the printers configured to the requirements?",
          answer:
            "Accessories include Pan-Mixer, Mortar Pump, Batching Plant and Dosing Pump.",
        },
        {
          question:
            "What are the maximum movement speeds of a Concrete 3D Printer?",
          answer: `Gantry-based concrete 3d printer: Maximum movement speed - 500 mm/s
Robotic arm-based concrete 3d printer: Maximum movement speed - 400 mm/s`,
        },
        {
          question:
            "What are the maximum printing speeds of a Concrete 3D Printer?",
          answer: `Maximum speed:
Gantry based onsite printer - 300 mm/s
Gantry based (NIRMAAN RD (lab-scale printer) & NIRMAAN PD (off-site printer) - 200 mm/s
Robotic arm based - 150 mm/s to 200 mm/s`,
        },
      ],
    },
    {
      title: "Electrical & Automation",
      faqs: [
        {
          question:
            "Is Tvasta looking at end-to-end automation in construction in the following years?",
          answer:
            "Tvasta aims to automate construction with maximum improvement in the critical construction phases - Foundation, Superstructure, Roofing and finishing.",
        },
        {
          question:
            "What slicing and path planning capabilities are offered by Tvasta's Digital Construction OS?",
          answer: `• Automated Layer Slicing
• Optimized Print Sequences
• Dynamic Speed Adjustment
• Live Print Simulation`,
        },
        {
          question: "How is layer transition managed for complex geometries?",
          answer:
            "Layer transitions in complex geometries are carefully managed to ensure structural integrity, surface quality, and print efficiency using adaptive slicing, toolpath optimization, and real-time monitoring.",
        },
        {
          question:
            "What innovations are used to prevent nozzle clogging and material segregation?",
          answer: `• Continuous Material Agitation
• Active Mixing at the Nozzle
• Viscosity-Optimized Additives`,
        },
        {
          question:
            "What is the output rate of a 3D Printer? How is the output rate related to the printing speed of a 3D Printer?",
          answer: `Output rate differs from 0.1 m³/hr to 0.5 m³/hr

Factors affecting:
• Nozzle Diameter
• Layer Height & Width
• Extrusion Pressure
• Material Rheology
• Print Path Complexity`,
        },
      ],
    },
    {
      title: "Design for Additive Manufacturing (DfAM)",
      faqs: [
        {
          question: "What is DfAM? How is it related to 3D Printing?",
          answer: `DfAM (Design for Additive Manufacturing) refers to a set of design principles and strategies specifically optimized for 3D printing technologies. It focuses on leveraging the unique capabilities of additive manufacturing to improve efficiency, performance, and material usage while reducing costs and waste.

In context to 3D Printing:
• Functionally Graded Structures
• Multi-Material Integration
• Support-Free Printing
• Complex Geometries
• Topology Optimization`,
        },
        {
          question: "How is DfAM related to Construction 3D Printing?",
          answer: `DfAM is essential in Construction 3D Printing as it optimizes structural design for efficiency, strength, and sustainability, leveraging the unique advantages of layer-by-layer fabrication.

Other key aspects includes:
• Elimination of Formwork
• Topology Optimization
• Complex Geometries & Customization
• Functionally Graded Structures
• Integrated Utility Channels
• Multi-Material Printing`,
        },
        {
          question:
            "What is BIM technology? How is DfAM and BIM technology related in Construction 3D Printing?",
          answer: `BIM (Building Information Modeling) is a digital process that creates and manages intelligent 3D models of buildings and infrastructure. It integrates geometry, spatial relationships, materials, and real-time data to enhance design, construction, and lifecycle management.

Relation Between DfAM & BIM in Construction 3D Printing:
• Seamless Digital Workflow
• Material & Structural Optimization
• Automated Design-to-Print Process
• Clash Detection & Quality Control
• Integrated MEP (Mechanical, Electrical, Plumbing) Systems
• Lifecycle Management`,
        },
        {
          question:
            "What are the advantages of drawings generated via Construction 3D Printing compared to drawings given for Conventional (or) Pre-cast Construction?",
          answer: `Construction 3D printing uses digitally generated print files that are directly executed by machines, ensuring higher precision and minimal human error.

Key Advantages:
• Elimination of Human Interpretation Errors
• Automated Consistency & Repeatability
• Real-Time Design Adjustments & Optimization
• Integrated Structural & Utility Planning
• Reduced Site Errors & Material Waste
• Seamless Digital-to-Physical Workflow`,
        },
      ],
    },
    {
      title: "Production Environment",
      faqs: [
        {
          question:
            "What types of activities does Tvasta perform in the Production Facility?",
          answer: `• Machine Fabrication & Assembly
• Material Research & Testing
• Prototype & Component Manufacturing
• Calibration & Quality Control
• Customer Demonstrations & Training
• Process Automation & Optimization`,
        },
        {
          question:
            "What Green measures have been adopted and what is the total carbon footprint reduction?",
          answer: `Green Measures:
• Uses low-carbon cement blends (e.g., fly ash, GGBS, and geopolymeric materials) to reduce Portland cement usage
• Elimination of Formwork
• Automated processes minimize unnecessary energy consumption compared to conventional construction
• On-site printing eliminates excessive transport of precast components, reducing fuel emissions

Total Carbon Footprint:
• Reduced cement use (~20-30% CO₂ savings)
• Minimizing waste & formwork (~10-15% savings)
• Lower transportation emissions (~5-10% savings)`,
        },
        {
          question:
            "What are the material considerations for high-reach printing?",
          answer: `The key points include:
• High Early Strength & Rapid Setting
• Optimized Rheology & Thixotropy
• Bonding Strength Between Layers
• Lightweight & High-Strength Mixes
• Pumpability & Extrudability
• Shrinkage & Curing Control (Internal Curing Agent - SAPs – Super Absorbent Polymers)`,
        },
        {
          question:
            "How is structural stability ensured during and after printing?",
          answer: `During Printing:
• Material Engineering
• Print Path Optimization
• Real-Time Monitoring & Adjustments

After Printing:
• Load-Bearing Verification
• Reinforcement Integration
• Foundation & Anchoring`,
        },
        {
          question:
            "What mechanisms prevent deformation or collapse during printing?",
          answer: `• Material Optimization - Thixotropic Behavior, High Early Strength, Fiber Reinforcement
• Print Path & Layering Strategies
• Real-Time Monitoring & Feedback
• Hybrid Support & Reinforcement`,
        },
        {
          question:
            "Is the bonding there between the layers in the case of Concrete 3D Printing?",
          answer: "Yes, but not very strong (cohesive in nature)",
        },
        {
          question:
            "During Concrete 3D Printing what are the suitable thermal insulation values of the structure?",
          answer:
            "The thermal insulation of a 3D-printed concrete structure depends on material composition, wall thickness, and design features.",
        },
        {
          question:
            "How are mix designs optimized for both thermal resistance and structural integrity in 3D-printed walls?",
          answer: `• Optimized Binder Composition
• Lightweight Aggregates for Insulation
• Fibers & Reinforcements for Structural Integrity
• Admixtures & Additives for Workability & Durability - Superplasticizers, Thixotropic Agents, Phase Change Materials (PCMs)`,
        },
        {
          question:
            "What are the main cost components in conventional concrete construction compared to 3D printing?",
          answer: (
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-description-mobile md:text-description">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Cost Component
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Conventional Construction
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Concrete 3D Printing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Labor
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      High (formwork, rebar, manual work)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Low (automated printing, minimal labor)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Formwork
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      High (materials, labor-intensive setup/removal)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Eliminated (direct layer-by-layer printing)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Material Waste
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      High (cutting, overuse, rework)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Low (precise material deposition)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Time & Project Duration
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Longer (manual processes, curing delays)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Shorter (continuous printing, faster curing)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Equipment & Machinery
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Moderate (mixers, pumps, cranes)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      High initial cost (3D printer), lower recurring
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Customization Costs
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Expensive (complex shapes require extra work)
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Minimal (digital design flexibility)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Energy Consumption
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Lower per unit operation
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Higher per operation, but overall savings from speed
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Maintenance & Training
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Lower for traditional equipment
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      Higher for printer maintenance and skilled operation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          question:
            "What are the operational cost differences between conventional and 3D concrete printing?",
          answer:
            "Operational costs in concrete 3D printing are generally lower than conventional construction (by around 25-28%) due to reduced labor, minimal material waste, and faster build times, but may include higher energy consumption, specialized material costs, and maintenance expenses.",
        },
        {
          question:
            "How does the initial investment in a concrete 3D printer compare to traditional equipment costs?",
          answer:
            "The initial investment in a concrete 3D printer is typically higher than traditional construction equipment costs, but it offers long-term savings by eliminating formwork, reducing labor, minimizing material waste, and enabling faster build times, leading to a lower overall cost per project in high-volume use.",
        },
        {
          question:
            "How do cost savings in formwork impact the overall budget in 3D printing?",
          answer:
            "Cost savings in formwork significantly reduce the overall budget in concrete 3D printing by eliminating labor-intensive mold construction, minimizing material waste, and enabling complex designs without additional costs, leading to faster project completion and lower total expenses.",
        },
        {
          question:
            "How is differential thermal expansion managed between layers to prevent delamination or cracking?",
          answer:
            "Differential thermal expansion in concrete 3D printing is managed through optimized material formulations, controlled layer deposition timing, active cooling, and graded material transitions to prevent cracking or delamination.",
        },
      ],
    },
    {
      title: "3D Printing Projects - Overview",
      faqs: [
        {
          question:
            "How is 3D Printing Done? What material does Tvasta use in 3D Printing?",
          answer:
            "Layer by layer deposition of material along the design path of a component/part leads to final part creation. This method falls under additive manufacturing process and is also referred to as 3D Printing. Tvasta promotes Construction 3D Printing, where the selected material for Additive manufacturing is material with concrete",
        },
        {
          question:
            "What are the ways in which Concrete 3D Printing can add value in existing construction activity?",
          answer: `3D Printing adds value to construction activity in the following ways:

Design Phase:
• File generation for 3D Printing is done post confirmation of Structural, MEP layouts which reduces the time taken for site execution

Site Execution:
• Lesser no. of critical path deviations during project execution since all of the layouts are approved before project execution reducing no.of changes post approval

Skilled Labour dependency:
• Automating processes reduces the need for skilled labour required to finish specific part of the activities thereby reducing delays involved in project execution

Integrated Finishing with minimal plastering:
• 3D Printed Surface finish reduces the need for final surface finishing, thereby reducing the material and time required for finishing activities
• Pre-planned MEP positions and conduits, reducing integration time post 3D Printing activity completion`,
        },
        {
          question:
            "What are the ways in which Concrete 3D Printing can replace processes or entire steps in existing construction schedules?",
          answer: `Construction activity has the following phases:
• Site Clearance and Excavation
• Foundation
• Superstructure buildup
• Walls construction
• Plastering
• MEP cutting and laying
• Re-plastering and Final finishing

The above activities can be coupled with introduction of concrete 3D Printing, thereby reducing the no. of individual contractors involved in a project for completion and encouraging activity completion in parallel during Superstructure build up works`,
        },
        {
          question: "What are the disadvantages of Concrete 3D Printing?",
          answer:
            "Current Disadvantages of Concrete 3D Printing requires knowledge transfer to existing conventional contractors leading to delays in large scale adoption. Tvasta is currently support with Codes development for 3D Printing, which will bridge the gap for approvals needed for construction of a 3D Printed building",
        },
        {
          question:
            "Is concrete 3d printing sustainable and what is the lifetime of the building?",
          answer:
            "Concrete 3D Printing uses sustainable material mix for execution, where embodied carbon emissions are lesser than that used in conventional buildings. The lifetime of concrete 3D Printed buildings is at least 50 years. Additionally, the Design process with 3D Printing incorporates Net Zero Design feasibility with ease, bridging the gap required for general construction buildings to consider this aspect.",
        },
        {
          question: "Can 3D Printed buildings tolerate all weather conditions?",
          answer:
            "Material Design is important when factoring in design for harsh weather conditions - primarily cold weather conditions. 3D Printing has the additional benefit of providing provisions for insulation material in the hollow cavities thereby reducing the need for separate insulation panels in cold weather conditions.",
        },
        {
          question:
            "What is the maximum height you can reach using 3D printers?",
          answer:
            "Tvasta's Onsite Gantry 3D Printers have a maximum printing height of 12 m.",
        },
      ],
    },
    {
      title: "Concrete 3D Printing with Other Construction Technologies",
      faqs: [
        {
          question:
            "What parts of Construction Activity can 3D Printing replace currently in construction?",
          answer:
            "3D Printing primarily is able to combine Superstructure, Walls, MEP phases of a construction project into a parallel execution process. Intervention in the foundation and roofing aspect of a building construction using 3D Printing is feasible which will be focused by Tvasta in the upcoming year.",
        },
        {
          question:
            "How much of % increase can 3D Printing contribute in the next 5 years in construction?",
          answer:
            "Based on the PMAY report which aims to address housing needs of urban and rural populations, the current demand for houses stands at 1.12 Crore units. 3D Printing can help reduce the time taken for construction",
        },
        {
          question:
            "What is the current % of 3D Printing in an overall project? How does it vary for construction projects vs products?",
          answer:
            "3D Printing currently adds to 40% of the overall project (Superstructure, walls, MEP and design part). Site Clearance, Excavation, Foundation, Roofing, Finishing are currently done in conventional methods",
        },
        {
          question:
            "Columns and Beams - How are they integrated with Concrete 3D Printing?",
          answer:
            "Hollow walls/pockets in 3D Printed buildings are used to place columns which reduce the requirement of formwork and promote quicker execution of the superstructure portion. Roofing is done either in the form of pre-cast slabs or cast-insitu method based on the site location and nature of available resources for execution",
        },
        {
          question:
            "Foundation & Roofing - How is this part currently being done for 3D Printed Projects?",
          answer:
            "Both the critical activities are currently done conventionally, integrated into the project execution process with 3D Printing. Tvasta has plans to intervene in the roofing part of the building in the upcoming year to reduce the overall requirement of skilled labour and machinery needed to execute this activity.",
        },
        {
          question:
            "How different is 3D Printing when compared to Pre-Cast in terms of execution and type of material used?",
          answer:
            "Pre-Cast materials and 3D Printing materials have different proportions of the similar material used in the construction industry. This ratio difference is primarily due to time needed for the concrete to achieve strength",
        },
        {
          question:
            "How different is 3D Printing when compared to LGSF in terms of execution and type of material used?",
          answer:
            "Light Gauge Steel Forming (LGSF) requires a formwork in a fixed shaped into which the concrete material is poured using a concrete mixer. 3D Printing process uses a 3D Printer which lays concrete in a layer by layer fashion - where design can be varied based on the client design requirement",
        },
        {
          question:
            "What are the disadvantages of Concrete 3D Printing compared to other technologies?",
          answer:
            "Current Disadvantages of Concrete 3D Printing requires knowledge transfer to existing conventional contractors leading to delays in large scale adoption. Tvasta is currently support with Codes development for 3D Printing, which will bridge the gap for approvals needed for construction of a 3D Printed building",
        },
        {
          question: "What is Tvasta's role in Concrete 3D Printing Projects?",
          answer:
            "Tvasta currently supports end to end project execution for design phase to finishing for Onsite Projects (G/G+1 buildings). For Infrastructure projects (pod units, bus shelters), Tvasta ships the 3D Printed modules to site and supports the assembly work. Site Preparation, foundation work is taken care of by the client.",
        },
        {
          question: "How is MEP integrated in the 3D printed walls?",
          answer:
            "Hollow cavities in 3D Printed walls act as provisions for running MEP conduits and connecting through the building.",
        },
        {
          question:
            "What is the average wall thickness of a 3D Printed building?",
          answer:
            "Average thickness of 3D Printed walls vary between 150mm - 230mm for interiors and exterior walls",
        },
        {
          question: "Are 3D Printed buildings completely hollow on the inside?",
          answer: "3D Printed walls are 40% hollow in nature",
        },
        {
          question: "How is reinforcement integrated in the 3D printed walls?",
          answer:
            "Reinforcement cages are lapped during construction in 3D Printing projects, where cages are raised from foundation - and are lapped as building height of increases",
        },
        {
          question: "How much load could 3D printed walls bear?",
          answer:
            "Currently (according to IS Codes) 3D Printed walls are currently not designed as load bearing walls. Testing is in progress to have these walls to be considered as load bearing walls, leading to savings in structural steel used in the project.",
        },
      ],
    },
    {
      title: "Concrete 3D Printing and Timelines",
      faqs: [
        {
          question: "How is 3D Printing influencing project timelines?",
          answer:
            "With reduction in no.of critical paths during project execution, 3D Printing projects are atleast 50% quicker than conventional projects.",
        },
        {
          question:
            "What is the influence of timeline for 3D Printed projects and products?",
          answer:
            "Higher production rate from 3D Printers enables quick completion of the walls section of the project. Timeline increase currently is attributed towards the conventional works associated with 3D Printed Projects",
        },
      ],
    },
  ];

  // Flatten all FAQs with section info
  const allFaqs = faqSections.flatMap((section) =>
    section.faqs.map((faq) => ({
      ...faq,
      section: section.title,
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allFaqs.length / itemsPerPage);
  const [openItems, setOpenItems] = useState({});

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentFaqs = allFaqs.slice(startIdx, startIdx + itemsPerPage);

  // Group current FAQs by section
  const groupedCurrentFaqs = currentFaqs.reduce((acc, faq, idx) => {
    const globalIndex = startIdx + idx;
    if (!acc[faq.section]) {
      acc[faq.section] = [];
    }
    acc[faq.section].push({ ...faq, globalIndex });
    return acc;
  }, {});

  const toggleItem = (globalIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [globalIndex]: !prev[globalIndex],
    }));
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setOpenItems({});

    // Scroll to section start with smooth animation
    if (sectionRef.current) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center gap-[120px] w-full py-0 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center gap-[120px] w-full max-w-[1200px]">
        {/* FAQ Items grouped by section */}
        {Object.entries(groupedCurrentFaqs).map(([sectionTitle, faqs]) => (
          <div key={sectionTitle} className="flex flex-col gap-8 w-full">
            <h3 className="text-description-mobile md:text-description font-semibold text-[#E63946] font-['Outfit']">
              {sectionTitle}
            </h3>
            <div className="flex flex-col gap-[40px] w-full ">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.globalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems[faq.globalIndex] || false}
                  onToggle={() => toggleItem(faq.globalIndex)}
                  index={faq.globalIndex}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex gap-4 items-center justify-center mt-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#1D3357] text-white rounded-[20px] hover:bg-[#5A5A5A] hover:rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-description-mobile md:text-description font-['Outfit']">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#1D3357] text-white rounded-[20px] hover:bg-[#5A5A5A] hover:rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
