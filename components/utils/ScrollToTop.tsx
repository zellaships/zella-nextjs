'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Immediate scroll to top
    window.scrollTo(0, 0);

    // Also scroll after a brief delay to catch any late-loading content
    const timeout1 = setTimeout(() => window.scrollTo(0, 0), 50);
    const timeout2 = setTimeout(() => window.scrollTo(0, 0), 150);
    const timeout3 = setTimeout(() => window.scrollTo(0, 0), 300);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [pathname]);

  return null;
}
