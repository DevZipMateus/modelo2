
import LetterGlitch from '@/components/ui/LetterGlitch';
import SmartHeader from '@/components/layout/SmartHeader';
import SmartFooter from '@/components/layout/SmartFooter';
import HomeHero from '@/components/sections/HomeHero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import HomeServices from '@/components/sections/HomeServices';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import FinalContact from '@/components/sections/FinalContact';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

const SmartHome = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Glitch Effect */}
      <LetterGlitch 
        glitchSpeed={50}
        glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        centerVignette={false}
        outerVignette={true}
        smooth={true}
      />
      
      {/* Header */}
      <SmartHeader />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <HomeHero />
        </div>
        
        <ProblemSolution />
        
        <div id="services">
          <HomeServices />
        </div>
        
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <WhyChooseUs />
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="contact">
          <FinalContact />
        </div>
      </main>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
      
      {/* Footer */}
      <SmartFooter />
    </div>
  );
};

export default SmartHome;
