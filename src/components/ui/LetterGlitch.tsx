
import { useEffect, useRef, useState } from 'react';

interface LetterGlitchProps {
  glitchSpeed?: number;
  glitchColors?: string[];
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  className?: string;
}

const LetterGlitch = ({
  glitchSpeed = 50,
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  className = ''
}: LetterGlitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        
        ctx.fillStyle = color;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Add vignette effects
      if (centerVignette || outerVignette) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
        );

        if (centerVignette) {
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.2)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        if (outerVignette) {
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
          gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const interval = setInterval(animate, glitchSpeed);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, glitchSpeed, glitchColors, centerVignette, outerVignette]);

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
