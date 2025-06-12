
import { useState, useEffect } from 'react';

interface PerformanceSettings {
  reduceAnimations: boolean;
  enableLazyLoading: boolean;
  prefersReducedMotion: boolean;
}

export const usePerformance = () => {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    enableLazyLoading: true,
    prefersReducedMotion: false
  });

  useEffect(() => {
    // Check for user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({
      ...prev,
      prefersReducedMotion: mediaQuery.matches,
      reduceAnimations: mediaQuery.matches
    }));

    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
        reduceAnimations: e.matches
      }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for slow connection
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
        setSettings(prev => ({
          ...prev,
          reduceAnimations: true,
          enableLazyLoading: true
        }));
      }
    }
  }, []);

  return settings;
};
