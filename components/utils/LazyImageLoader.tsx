'use client';

import { useEffect } from 'react';

export function LazyImageLoader() {
  useEffect(() => {
    // Fast image loading - start early, load direct
    const lazyImages = document.querySelectorAll('img[data-src]');

    if (lazyImages.length > 0) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;

            if (src) {
              // Set src directly and mark loaded on load
              img.src = src;
              img.onload = () => {
                img.classList.add('loaded');
              };
              // If already cached, add loaded immediately
              if (img.complete) {
                img.classList.add('loaded');
              }
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '800px 0px', // Start loading well ahead for instant feel
        threshold: 0
      });

      lazyImages.forEach(img => imageObserver.observe(img));

      // Cleanup
      return () => {
        imageObserver.disconnect();
      };
    }
  }, []);

  return null;
}
