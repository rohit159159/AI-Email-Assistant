
import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import EmailGenerator from '@/components/EmailGenerator';
import ExtensionSetup from '@/components/ExtensionSetup';
import PageLoader from '@/components/AILoader.jsx';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data or initializing AI)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />; // show loader while loading
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EmailGenerator />
      <ExtensionSetup />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
