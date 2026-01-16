import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  opacity: number;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Warm, floral colors
    const colors = ['#FFB7B2', '#FFDAC1', '#FF9AA2', '#E2F0CB'];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initPetals();
    };

    const initPetals = () => {
      petals = [];
      const count = 40; // Less clutter, more elegance
      for (let i = 0; i < count; i++) {
        petals.push(createPetal());
      }
    };

    const createPetal = (): Petal => ({
      x: Math.random() * width,
      y: Math.random() * height - height, // Start above
      vx: Math.random() * 1 - 0.5,
      vy: Math.random() * 1 + 0.5, // Gentle fall
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      size: Math.random() * 5 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.3
    });

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      
      // Draw a simple petal shape (ellipse-like)
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach(p => {
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.5; // Slight swaying wind effect
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > height) {
          // Reset to top
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #FDFBF7, #FFF0F0)' }}
    />
  );
};

export default InteractiveBackground;