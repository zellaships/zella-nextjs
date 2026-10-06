'use client';

import { useEffect } from 'react';

/**
 * Text Glow Effect - NON-HOME PAGES ONLY
 * Blurple gradient that follows mouse and clips to h1/h2/h3 text
 */
export function TextGlowEffect() {
  useEffect(() => {
    // Skip if reduced motion preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Skip on home page
    const isHomePage = document.querySelector('.home-locked');
    if (isHomePage) return;

    // Get all headings in main, exclude ones in explore section
    const allHeadings = document.querySelectorAll('main h1, main h2, main h3');
    const textElements = Array.from(allHeadings).filter(el => {
      return !el.closest('.cs-explore--brutalist');
    });

    if (!textElements.length) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let currentHue = 250; // blurple

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleWheel = (e: WheelEvent) => {
      currentHue += e.deltaY * 0.1;
      if (currentHue > 280) currentHue = 220;
      if (currentHue < 220) currentHue = 280;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('wheel', handleWheel);

    let animationId: number;

    function animateTextGlow() {
      textElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const relX = mouseX - rect.left;
        const relY = mouseY - rect.top;

        const gradient = `radial-gradient(circle 120px at ${relX}px ${relY}px, hsl(${currentHue}, 85%, 55%) 0%, hsl(${currentHue}, 70%, 40%) 50%, #000 80%)`;
        (el as HTMLElement).style.cssText = `
          background: ${gradient} !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        `;
      });
      animationId = requestAnimationFrame(animateTextGlow);
    }
    animateTextGlow();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationId);
      // Reset text styles
      textElements.forEach(el => {
        (el as HTMLElement).style.cssText = '';
      });
    };
  }, []);

  return null;
}
