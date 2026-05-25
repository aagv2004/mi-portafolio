import { useEffect, useRef } from "react";

const particleCount = 52;
const maxConnectionDistance = 145;
const cursorRadius = 180;

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.28,
  vy: (Math.random() - 0.5) * 0.28,
  radius: Math.random() * 1.4 + 1.1,
});

export const AmbientNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };

    let animationFrame = 0;
    let particles = [];

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const nextCount = Math.max(
        32,
        Math.min(particleCount, Math.floor((width * height) / 17000)),
      );

      particles = Array.from({ length: nextCount }, () =>
        createParticle(width, height),
      );
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLight = document.documentElement.classList.contains("light");
      const nodeColor = isLight ? "79, 70, 229" : "129, 140, 248";
      const lineColor = isLight ? "14, 165, 233" : "56, 189, 248";

      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reducedMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance < cursorRadius && distance > 0.01) {
              const force = (1 - distance / cursorRadius) * 0.035;
              particle.vx += (dx / distance) * force;
              particle.vy += (dy / distance) * force;
            }
          }

          particle.vx *= 0.995;
          particle.vy *= 0.995;

          if (particle.x < -20) particle.x = width + 20;
          if (particle.x > width + 20) particle.x = -20;
          if (particle.y < -20) particle.y = height + 20;
          if (particle.y > height + 20) particle.y = -20;
        }
      }

      particles.forEach((particle, index) => {
        for (let i = index + 1; i < particles.length; i += 1) {
          const other = particles[i];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);

          if (distance < maxConnectionDistance) {
            const alpha = (1 - distance / maxConnectionDistance) * 0.2;
            context.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      for (const particle of particles) {
        const cursorDistance = Math.hypot(
          particle.x - pointer.x,
          particle.y - pointer.y,
        );
        const cursorGlow =
          pointer.active && cursorDistance < cursorRadius
            ? (1 - cursorDistance / cursorRadius) * 0.28
            : 0;

        context.fillStyle = `rgba(${nodeColor}, ${0.36 + cursorGlow})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ambient-network"
      aria-hidden="true"
    />
  );
};
