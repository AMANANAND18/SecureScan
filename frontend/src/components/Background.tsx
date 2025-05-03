import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const characters = matrix.split("");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    const draw = () => {
      context.fillStyle = "rgba(10, 10, 10, 0.1)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Create gradient for each character
        const gradient = context.createLinearGradient(
          i * fontSize,
          drops[i] * fontSize - fontSize,
          i * fontSize,
          drops[i] * fontSize
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)");
        
        context.fillStyle = gradient;
        context.font = `${fontSize}px monospace`;
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;

        if (Math.random() > 0.95) {
          const extraY = Math.max(0, drops[i] - Math.floor(Math.random() * 10));
          const extraChar = characters[Math.floor(Math.random() * characters.length)];
          context.fillStyle = "rgba(255, 255, 255, 0.3)";
          context.fillText(extraChar, i * fontSize, extraY * fontSize);
        }
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      for (let x = 0; x < newColumns; x++) {
        if (drops[x] === undefined) {
          drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 gradient-background" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  );
};

export default Background;