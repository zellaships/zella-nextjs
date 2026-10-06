'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  // Use useLayoutEffect to run before paint
  useLayoutEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Instant scroll to top (bypasses smooth scroll CSS)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Backup scroll after hydration
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
