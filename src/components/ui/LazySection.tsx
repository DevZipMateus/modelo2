
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
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className="min-h-[50px]">
      {isVisible ? (
        <Suspense fallback={fallback || <div className="h-32 flex items-center justify-center"><div className="animate-pulse text-slate-400">Carregando...</div></div>}>
          {children}
        </Suspense>
      ) : (
        fallback || <div className="h-32 flex items-center justify-center"><div className="animate-pulse text-slate-400">Carregando...</div></div>
      )}
    </div>
  );
};

export default LazySection;
