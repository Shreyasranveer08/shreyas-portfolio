import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AIFounderBackground.css';

const AIFounderBackground = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();

  // Create different scrolling speeds for parallax effect
  const y1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -800]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Matrix characters - more subtle and tech-oriented
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678901'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    // Tech grid dots
    const dots = [];
    for(let i=0; i<50; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedY: Math.random() * 0.2 - 0.1,
            opacity: Math.random() * 0.3 + 0.1
        });
    }

    const draw = () => {
      // Create trailing effect by drawing semi-transparent black
      ctx.fillStyle = 'rgba(3, 3, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      dots.forEach(dot => {
          ctx.fillStyle = `rgba(0, 240, 255, ${dot.opacity})`;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fill();
          dot.y += dot.speedY;
          if (dot.y > canvas.height) dot.y = 0;
          if (dot.y < 0) dot.y = canvas.height;
      });

      // Draw subtle matrix rain in Neon Rose
      ctx.fillStyle = 'rgba(255, 42, 122, 0.15)'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ai-background">
      {/* Dynamic Gradient Mesh Layers with Parallax */}
      <motion.div className="mesh-gradient mesh-1" style={{ y: y1 }}></motion.div>
      <motion.div className="mesh-gradient mesh-2" style={{ y: y2 }}></motion.div>
      <motion.div className="mesh-gradient mesh-3" style={{ y: y3 }}></motion.div>
      
      {/* Overlay Canvas for Matrix/Tech Particles (moves slightly for depth) */}
      <motion.canvas ref={canvasRef} className="ai-canvas" style={{ y: y3 }} />
      
      {/* Vignette for depth */}
      <div className="vignette"></div>
    </div>
  );
};

export default AIFounderBackground;
