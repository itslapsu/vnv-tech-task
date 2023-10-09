import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import BriefSection from "../../components/BriefSection/BriefSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import LeadMagnet from "../../components/LeadMagnet/LeadMagnet";

const Home = ({ whyUsSectionRef }) => {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactSection />
      <BriefSection />
      <FAQSection />
      <LeadMagnet />
    </>
  );
};

export default Home;
