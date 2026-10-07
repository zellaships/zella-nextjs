'use client';

import { useEffect, useRef } from 'react';

interface ScatterHeadingProps {
  children: string;
  className?: string;
}

export function ScatterHeading({ children, className = '' }: ScatterHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const text = children;
    const mouse = { x: -1000, y: -1000 };

    // Split into letters
    const html = text.split('').map(char =>
      char === ' ' ? ' ' : `<span class="scatter-letter">${char}</span>`
    ).join('');

    container.innerHTML = html;

    const letterElements = container.querySelectorAll('.scatter-letter');

    interface Letter {
      el: HTMLElement;
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      rotation: number;
      targetRotation: number;
    }

    const letters: Letter[] = [];
    letterElements.forEach((el) => {
      letters.push({
        el: el as HTMLElement,
        x: 0, y: 0,
        targetX: 0, targetY: 0,
        rotation: 0, targetRotation: 0
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const radius = 60;
    const strength = 80;
    let animationId: number;

    function animate() {
      letters.forEach((letter) => {
        const rect = letter.el.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2 - letter.x;
        const letterY = rect.top + rect.height / 2 - letter.y;

        const deltaX = mouse.x - letterX;
        const deltaY = mouse.y - letterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < radius && distance > 0) {
          const force = Math.pow((radius - distance) / radius, 2);
          const angle = Math.atan2(deltaY, deltaX);

          letter.targetX = -Math.cos(angle) * force * strength;
          letter.targetY = -Math.sin(angle) * force * strength;
          letter.targetRotation = (Math.random() - 0.5) * force * 30;
        } else {
          letter.targetX = 0;
          letter.targetY = 0;
          letter.targetRotation = 0;
        }

        letter.x += (letter.targetX - letter.x) * 0.08;
        letter.y += (letter.targetY - letter.y) * 0.08;
        letter.rotation += (letter.targetRotation - letter.rotation) * 0.08;

        letter.el.style.transform = `translate(${letter.x}px, ${letter.y}px) rotate(${letter.rotation}deg)`;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (container) container.textContent = text;
    };
  }, [children]);

  return (
    <h2 ref={containerRef} className={`${className} scatter-container`}>
      {children}
    </h2>
  );
}
