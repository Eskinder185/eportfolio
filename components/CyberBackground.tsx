import { useEffect, useRef } from 'react';

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    // Matrix rain characters
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const matrixDrops: Array<{
      x: number;
      y: number;
      char: string;
      speed: number;
    }> = [];

    // Create particles
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        size: Math.random() * 2 + 1
      };
    };

    // Create matrix drops
    const createMatrixDrop = () => {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        speed: Math.random() * 3 + 1
      };
    };

    // Initialize particles and matrix drops
    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    for (let i = 0; i < 30; i++) {
      matrixDrops.push(createMatrixDrop());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw matrix rain
      matrixDrops.forEach((drop, index) => {
        drop.y += drop.speed;
        
        // Draw matrix character
        ctx.fillStyle = `rgba(34, 211, 238, ${Math.max(0, 1 - drop.y / canvas.height)})`;
        ctx.font = '14px monospace';
        ctx.fillText(drop.char, drop.x, drop.y);

        // Reset drop if it's off screen
        if (drop.y > canvas.height) {
          matrixDrops[index] = createMatrixDrop();
        }
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Reset particle if it's dead or out of bounds
        if (particle.life >= particle.maxLife || 
            particle.x < 0 || particle.x > canvas.width ||
            particle.y < 0 || particle.y > canvas.height) {
          particles[index] = createParticle();
        }

        // Draw particle with glow effect
        const alpha = 1 - (particle.life / particle.maxLife);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha * 0.8})`);
        gradient.addColorStop(1, `rgba(34, 211, 238, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.3;
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${alpha * 0.7})`);
            gradient.addColorStop(1, `rgba(16, 185, 129, ${alpha * 0.5})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw cyber grid overlay
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* CSS-based background elements */}
      <div className="cyber-bg">
        <div className="cyber-grid" />
        <div className="scan-line" style={{ animationDelay: '2s' }} />
        <div className="scan-line" style={{ animationDelay: '6s' }} />
        
        {/* Floating data particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="data-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Data flow lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="data-flow"
            style={{
              top: `${20 + i * 10}%`,
              width: `${200 + Math.random() * 300}px`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>
      
      {/* Canvas-based animations */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
    </>
  );
}
