'use client';

import { useEffect } from 'react';

/**
 * Magnetic Scatter Text - HOME PAGE ONLY
 * Letters in .essay-wide h1 repel from mouse cursor
 */
export function MagneticScatterText() {
  useEffect(() => {
    // Skip if reduced motion preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only run on home page
    const isHomePage = document.querySelector('.home-locked');
    if (!isHomePage) return;

    const heroText = document.querySelector('.essay-wide h1');
    if (!heroText) return;

    const originalText = heroText.textContent;
    if (!originalText) return;

    const mouse = { x: -1000, y: -1000 };

    // Split text into words and letters
    const words = originalText.split(' ');
    const html = words.map(word => {
      const letters = word.split('').map(char =>
        `<span class="hero-letter">${char}</span>`
      ).join('');
      return `<span class="hero-word">${letters}</span>`;
    }).join(' ');

    heroText.innerHTML = html;

    const letterElements = heroText.querySelectorAll('.hero-letter');

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .essay-wide h1 {
        line-height: 1.4;
      }
      .hero-word {
        display: inline-block;
        white-space: nowrap;
      }
      .hero-letter {
        display: inline-block;
        will-change: transform;
        cursor: default;
      }
    `;
    document.head.appendChild(style);

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
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        rotation: 0,
        targetRotation: 0
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

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
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
      style.remove();
      // Restore original text
      if (heroText && originalText) {
        heroText.textContent = originalText;
      }
    };
  }, []);

  return null;
}
