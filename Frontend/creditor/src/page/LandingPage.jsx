import React from 'react';
import AboutSection from "../components/AboutSection";
import '../App.css'; // Or create a separate CSS file for the landing page
import MasterclassBanner from '../components/MasterclassBanner';
import CoursesSection from '../components/CoursesSection';
import StatsSection from '../components/StatsSection';

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* About Section */}
      <AboutSection />
      <MasterclassBanner />
      <CoursesSection />
      <StatsSection />

    </div>
  );
};

export default LandingPage;