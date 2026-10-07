'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scrolls to top on route change - aggressive approach
 */
export function ScrollToTop() {
  const pathname = usePathname();

  // Force scroll to top on every route change
  useLayoutEffect(() => {
    // Multiple methods to ensure scroll works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also try after a tiny delay for any async rendering
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}
