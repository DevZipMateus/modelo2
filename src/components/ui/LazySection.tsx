
import { lazy, Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazySection = ({ children, fallback }: LazySectionProps) => {
  return (
    <Suspense fallback={fallback || <div className="h-screen flex items-center justify-center"><div className="animate-pulse text-white">Carregando...</div></div>}>
      {children}
    </Suspense>
  );
};

export default LazySection;
