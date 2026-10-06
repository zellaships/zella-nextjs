'use client';

import { useEffect } from 'react';

/**
 * Directional Hover Effect
 * Underline appears from the direction the mouse enters the link
 */
export function DirectionalHover() {
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const link = e.currentTarget as HTMLElement;
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      link.style.setProperty('--underline-origin', `${percent}% 50%`);
    };

    // Select nav links and footer links
    const underlineLinks = document.querySelectorAll('nav.doors a, .footer-link');

    underlineLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter as EventListener);
    });

    return () => {
      underlineLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      });
    };
  }, []);

  return null;
}
