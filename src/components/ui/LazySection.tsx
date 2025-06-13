
import { lazy, Suspense, useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

const LazySection = ({ children, fallback, threshold = 0.1 }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect immediately after first intersection
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Load content slightly before it becomes visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={fallback || <div className="h-32 animate-pulse bg-slate-200 rounded" />}>
          {children}
        </Suspense>
      ) : (
        fallback || <div className="h-32 animate-pulse bg-slate-200 rounded" />
      )}
    </div>
  );
};

export default LazySection;
