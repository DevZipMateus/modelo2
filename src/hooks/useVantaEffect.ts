
import { useEffect, useRef, useState } from 'react';
import { scriptLoader } from '@/utils/scriptLoader';
import { usePerformance } from './usePerformance';

interface VantaOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
}

export const useVantaEffect = (options: Omit<VantaOptions, 'el'>) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);
  const { reduceAnimations, prefersReducedMotion } = usePerformance();

  useEffect(() => {
    // Skip loading if animations are disabled
    if (reduceAnimations || prefersReducedMotion) {
      return;
    }

    let mounted = true;

    const loadVanta = async () => {
      try {
        // Load dependencies
        await Promise.all([
          scriptLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js', 'three'),
          scriptLoader.loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js', 'vanta')
        ]);

        // Check if component is still mounted and dependencies are available
        if (mounted && vantaRef.current && (window as any).VANTA?.NET) {
          vantaEffect.current = (window as any).VANTA.NET({
            el: vantaRef.current,
            ...options
          });
          setIsLoaded(true);
        }
      } catch (error) {
        console.warn('Failed to load Vanta effect:', error);
      }
    };

    // Use intersection observer to load only when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          loadVanta();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (vantaRef.current) {
      observer.observe(vantaRef.current);
    }

    return () => {
      mounted = false;
      observer.disconnect();
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
      }
    };
  }, [reduceAnimations, prefersReducedMotion, isLoaded]);

  return { vantaRef, isLoaded };
};
