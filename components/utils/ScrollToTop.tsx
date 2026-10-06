'use client';

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Also scroll to top after everything loads
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
}
