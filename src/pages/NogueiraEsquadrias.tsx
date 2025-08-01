
import { Suspense, lazy } from 'react';
import Header from '@/components/layout/NogueiraHeader';
import Hero from '@/components/sections/NogueiraHero';
import WhatsAppFloat from '@/components/ui/NogueiraWhatsAppFloat';
import LazySection from '@/components/ui/LazySection';

// Lazy load components for better performance
const About = lazy(() => import('@/components/sections/NogueiraAbout'));
const Services = lazy(() => import('@/components/sections/NogueiraServices'));
const Location = lazy(() => import('@/components/sections/NogueiraLocation'));
const Contact = lazy(() => import('@/components/sections/NogueiraContact'));
const Footer = lazy(() => import('@/components/layout/NogueiraFooter'));

const NogueiraEsquadrias = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded" />}>
            <About />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded" />}>
            <Services />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded" />}>
            <Location />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded" />}>
            <Contact />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-32 animate-pulse bg-muted rounded" />}>
            <Footer />
          </Suspense>
        </LazySection>
      </main>
      
      <WhatsAppFloat />
    </>
  );
};

export default NogueiraEsquadrias;
