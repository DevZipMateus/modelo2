
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
import LetterGlitch from '@/components/ui/LetterGlitch';

const SmartHome = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Glitch Effect for entire site */}
      <LetterGlitch 
        glitchSpeed={50}
        glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        centerVignette={false}
        outerVignette={true}
        smooth={true}
        className="fixed inset-0 z-0"
      />
      
      {/* All content with higher z-index */}
      <div className="relative z-10">
        {/* Header */}
        <SmartHeader />
        
        {/* Main Content */}
        <main className="relative">
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
        
        {/* Footer */}
        <SmartFooter />
      </div>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default SmartHome;
