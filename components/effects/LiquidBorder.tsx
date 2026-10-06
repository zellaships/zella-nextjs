'use client';

import { useEffect, useRef } from 'react';

/**
 * Liquid Border Effect - HOME PAGE ONLY
 * Bouncy, buttery membrane at top of footer
 */
export function LiquidBorder() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on home page
    const isHomePage = document.querySelector('.home-locked');
    if (!isHomePage) return;

    const footer = document.querySelector('.site-footer') as HTMLElement;
    if (!footer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Capture non-null references for use in nested functions
    const canvasEl = canvas;
    const context = ctx;

    // Position canvas
    footer.style.position = 'relative';
    footer.style.overflow = 'visible';

    const config = {
      pointCount: 80,
      lineY: 30,
      tension: 0.04,
      damping: 0.82,
      spread: 0.35,
      mouseRadius: 100,
      maxDisplacement: 18
    };

    interface Point {
      x: number;
      y: number;
      vy: number;
    }

    let points: Point[] = [];
    const mouse = { x: 0, y: 0, py: 0 };

    function createPoints() {
      points = [];
      const width = footer.offsetWidth;
      const spacing = width / (config.pointCount - 1);
      for (let i = 0; i < config.pointCount; i++) {
        points.push({ x: i * spacing, y: 0, vy: 0 });
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = footer.offsetWidth;
      canvasEl.width = width * dpr;
      canvasEl.height = 60 * dpr;
      context.scale(dpr, dpr);
      canvasEl.style.width = width + 'px';
      const spacing = width / (config.pointCount - 1);
      points.forEach((p, i) => { p.x = i * spacing; });
    }

    function update() {
      const rect = canvasEl.getBoundingClientRect();
      const mx = mouse.x - rect.left;
      const vy = mouse.y - mouse.py;
      const mouseNearFooter = mouse.y > rect.top - 80;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dx = mx - p.x;
        const dist = Math.abs(dx);

        if (mouseNearFooter && dist < config.mouseRadius) {
          const falloff = Math.exp(-(dist * dist) / (config.mouseRadius * config.mouseRadius * 0.4));
          const lineWorldY = rect.top + config.lineY + p.y;

          if (mouse.y > lineWorldY - 30 && mouse.y < lineWorldY + 50) {
            const penetration = (mouse.y - lineWorldY) / 30;
            p.vy += falloff * penetration * 1.2;
          }
          p.vy += vy * falloff * 0.2;
        }

        p.vy -= p.y * config.tension;
        p.vy *= config.damping;
        p.y += p.vy;

        if (p.y > config.maxDisplacement) {
          p.y = config.maxDisplacement;
          p.vy *= -0.5;
        }
        if (p.y < -config.maxDisplacement * 0.5) {
          p.y = -config.maxDisplacement * 0.5;
          p.vy *= -0.4;
        }
      }

      for (let i = 1; i < points.length - 1; i++) {
        const avg = (points[i - 1].y + points[i + 1].y) / 2;
        points[i].vy += (avg - points[i].y) * config.spread;
      }
    }

    function render() {
      const width = footer.offsetWidth;
      const height = 60;
      context.clearRect(0, 0, width, height);

      const buildCurve = () => {
        context.beginPath();
        context.moveTo(0, config.lineY + points[0].y);
        for (let i = 1; i < points.length; i++) {
          const p = points[i];
          const prev = points[i - 1];
          const cpx = (prev.x + p.x) / 2;
          const cpy = config.lineY + (prev.y + p.y) / 2;
          context.quadraticCurveTo(prev.x, config.lineY + prev.y, cpx, cpy);
        }
        const last = points[points.length - 1];
        context.lineTo(width, config.lineY + last.y);
      };

      // Fill above with page background
      buildCurve();
      context.lineTo(width, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fillStyle = '#fefefe';
      context.fill();

      // Fill below with footer color
      buildCurve();
      context.lineTo(width, height);
      context.lineTo(0, height);
      context.closePath();
      context.fillStyle = '#10B981';
      context.fill();
    }

    function animate() {
      update();
      render();
      animationRef.current = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.py = mouse.y;
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
    };

    createPoints();
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '-30px',
        left: 0,
        width: '100%',
        height: '60px',
        pointerEvents: 'none',
        zIndex: 10
      }}
    />
  );
}
