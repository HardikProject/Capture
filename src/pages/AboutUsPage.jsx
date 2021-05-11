import React from 'react';
import AboutSection from '../Components/AboutPage/AboutSection';
import FaqSection from '../Components/AboutPage/FaqSection';
import ServiceSection from '../Components/AboutPage/ServiceSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

function AboutUsPage() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="close"
      animate="open"
      exit="close"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUsPage;
