
import React, { useRef, useState, useCallback } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const glowColorMap = {
  blue: { base: 215, spread: 180 },   // Brand Blue (Light Mode) / Neon Blue (Dark Mode)
  purple: { base: 255, spread: 260 }, 
  green: { base: 140, spread: 160 },
  red: { base: 0, spread: 180 },
  orange: { base: 32, spread: 160 }
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  glowColor = 'blue' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const { base } = glowColorMap[glowColor];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{
        // Define CSS variables for the glow effect
        // Light mode uses a softer blue, dark mode uses a vibrant neon
        '--glow-x': `${position.x}px`,
        '--glow-y': `${position.y}px`,
        '--glow-opacity': opacity,
        '--glow-color': `hsl(${base} 80% 60%)`,
        '--backdrop': 'hsl(220 14% 96% / 0.7)',
      } as React.CSSProperties}
    >
      {/* The Glow Layer */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity: 'var(--glow-opacity)',
          background: `radial-gradient(600px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 40%)`,
        }}
      />
      
      {/* The Content Layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
