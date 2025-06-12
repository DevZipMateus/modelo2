
import { lazy, Suspense } from 'react';
import SmartHeader from '@/components/layout/SmartHeader';
import SmartFooter from '@/components/layout/SmartFooter';
import HomeHero from '@/components/sections/HomeHero';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

// Lazy load das seções não críticas
const ProblemSolution = lazy(() => import('@/components/sections/ProblemSolution'));
const HomeServices = lazy(() => import('@/components/sections/HomeServices'));
const HowItWorks = lazy(() => import('@/components/sections/HowItWorks'));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'));
const Gallery = lazy(() => import('@/components/sections/Gallery'));
const FinalContact = lazy(() => import('@/components/sections/FinalContact'));

const LoadingFallback = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="animate-pulse text-slate-400">Carregando...</div>
  </div>
);

const SmartHome = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <SmartHeader />
      
      {/* Main Content */}
      <main className="relative">
        <div id="home">
          <HomeHero />
        </div>
        
        <Suspense fallback={<LoadingFallback />}>
          <ProblemSolution />
        </Suspense>
        
        <div id="services">
          <Suspense fallback={<LoadingFallback />}>
            <HomeServices />
          </Suspense>
        </div>
        
        <div id="how-it-works">
          <Suspense fallback={<LoadingFallback />}>
            <HowItWorks />
          </Suspense>
        </div>
        
        <Suspense fallback={<LoadingFallback />}>
          <WhyChooseUs />
        </Suspense>
        
        <div id="gallery">
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
          </Suspense>
        </div>
        
        <div id="contact">
          <Suspense fallback={<LoadingFallback />}>
            <FinalContact />
          </Suspense>
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
