
import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const LazySection = ({ 
  children, 
  fallback, 
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldShow = entry.isIntersecting;
        
        if (shouldShow) {
          setIsVisible(true);
          setHasTriggered(true);
          
          // Disconnect observer if triggerOnce is true
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  const DefaultFallback = () => (
    <div className="lazy-loading">
      <div className="animate-pulse text-slate-400">Carregando...</div>
    </div>
  );

  return (
    <div 
      ref={ref} 
      className={`min-h-[50px] ${isVisible ? 'lazy-loaded' : ''}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}
    >
      {isVisible ? children : (fallback || <DefaultFallback />)}
    </div>
  );
};

export default LazySection;
