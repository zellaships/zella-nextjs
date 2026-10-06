'use client';

import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    // Viewport-triggered scroll animations - only animate when user arrives at element
    const showcaseScrolls = document.querySelectorAll('.cs-showcase-scroll');
    const browserViewports = document.querySelectorAll('.browser-viewport');

    // Filter browser viewports to only those with scroll-img-drag
    const scrollViewports = Array.from(browserViewports).filter(el =>
      el.querySelector('.scroll-img-drag')
    );
    const scrollAnimElements = [...Array.from(showcaseScrolls), ...scrollViewports];

    if (scrollAnimElements.length > 0) {
      const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      }, {
        rootMargin: '0px',
        threshold: 0.1
      });

      scrollAnimElements.forEach(el => animObserver.observe(el));

      // Cleanup
      return () => {
        animObserver.disconnect();
      };
    }
  }, []);

  return null;
}
