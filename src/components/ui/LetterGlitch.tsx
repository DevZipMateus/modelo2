
import { useEffect, useRef, useState, useCallback } from 'react';

interface LetterGlitchProps {
  glitchSpeed?: number;
  glitchColors?: string[];
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  className?: string;
  performanceMode?: 'low' | 'medium' | 'high';
}

const LetterGlitch = ({
  glitchSpeed = 150, // Increased from 50 for better performance
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  className = '',
  performanceMode = 'medium'
}: LetterGlitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const resizeTimeoutRef = useRef<NodeJS.Timeout>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';

  // Performance settings based on mode
  const performanceSettings = {
    low: { fontSize: 20, density: 0.3, updateInterval: 200 },
    medium: { fontSize: 16, density: 0.5, updateInterval: 150 },
    high: { fontSize: 14, density: 0.7, updateInterval: 100 }
  };

  const settings = performanceSettings[performanceMode];

  // Throttled resize handler
  const throttledResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 100);
  }, []);

  // Check device performance
  useEffect(() => {
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      
      setIsLowPerformance(isMobile || hasLowMemory || !gl);
    };

    checkPerformance();
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', throttledResize);
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [throttledResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isLowPerformance) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    ctx.scale(dpr, dpr);

    const fontSize = settings.fontSize;
    const columns = Math.floor(dimensions.width / fontSize);
    const drops: number[] = new Array(Math.floor(columns * settings.density)).fill(1);

    // Pre-calculate vignette gradient
    let vignetteGradient: CanvasGradient | null = null;
    if (centerVignette || outerVignette) {
      vignetteGradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, 0,
        dimensions.width / 2, dimensions.height / 2, Math.max(dimensions.width, dimensions.height) / 2
      );

      if (centerVignette) {
        vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        vignetteGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.2)');
        vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      if (outerVignette) {
        vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignetteGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
        vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
      }
    }

    const animate = (currentTime: number) => {
      // Throttle animation updates
      if (currentTime - lastUpdateRef.current < settings.updateInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = currentTime;

      // Clear with less opacity for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      ctx.font = `${fontSize}px monospace`;

      // Reduce number of characters drawn
      const activeDrops = Math.floor(drops.length * 0.7);
      
      for (let i = 0; i < activeDrops; i++) {
        if (drops[i] === undefined) continue;
        
        const text = letters[Math.floor(Math.random() * letters.length)];
        const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        const x = (i * fontSize * columns / drops.length);
        
        ctx.fillStyle = color;
        ctx.fillText(text, x, drops[i] * fontSize);

        // Reset drops less frequently
        if (drops[i] * fontSize > dimensions.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += Math.random() > 0.95 ? 1 : 0;
      }

      // Apply vignette effect
      if (vignetteGradient) {
        ctx.fillStyle = vignetteGradient;
        ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, glitchColors, centerVignette, outerVignette, settings, isLowPerformance]);

  // CSS fallback for low-performance devices
  if (isLowPerformance) {
    return (
      <div
        className={`fixed inset-0 z-0 ${className}`}
        style={{
          background: `
            linear-gradient(135deg, #000000 0%, #1a1a1a 100%),
            radial-gradient(circle at 20% 50%, ${glitchColors[0]}15 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${glitchColors[1]}15 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${glitchColors[2]}15 0%, transparent 50%)
          `,
          filter: smooth ? 'blur(0.5px)' : 'none',
          animation: 'pulse 4s ease-in-out infinite alternate'
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        filter: smooth ? 'blur(0.5px)' : 'none'
      }}
    />
  );
};

export default LetterGlitch;
