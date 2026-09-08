"use client";

import { useEffect, useRef } from "react";

const PageAtmosphere = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let running = true;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    const ring = { x: -9999, y: -9999 };

    const particles = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = reduce ? 18 : Math.min(72, Math.floor((width * height) / 18000));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.4,
        });
      }
    };

    const onMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const draw = () => {
      if (!running) return;
      frame = requestAnimationFrame(draw);

      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      ring.x += (mouse.tx - ring.x) * 0.08;
      ring.y += (mouse.ty - ring.y) * 0.08;

      if (finePointer && cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduce) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 180) {
            p.vx += (dx / dist) * 0.004;
            p.vy += (dy / dist) * 0.004;
          }
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.992;
          p.vy *= 0.992;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 197, 71, 0.55)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const d = Math.hypot(ddx, ddy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(201, 162, 39, ${0.16 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });

    const onVisibility = () => {
      running = !document.hidden;
      if (running) draw();
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (finePointer) {
      document.body.classList.add("has-custom-cursor");
    }

    const hoverables = "a, button, input, textarea, [role='button']";
    const onOver = (e) => {
      if (e.target.closest(hoverables)) document.body.classList.add("cursor-hot");
    };
    const onOut = (e) => {
      if (e.target.closest(hoverables)) document.body.classList.remove("cursor-hot");
    };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.body.classList.remove("has-custom-cursor", "cursor-hot");
    };
  }, []);

  return (
    <>
      <div className="page-atmosphere" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-shift" />
        <canvas ref={canvasRef} className="atmosphere-canvas" />
      </div>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={cursorRef} className="cursor-dot" />
    </>
  );
};

export default PageAtmosphere;
