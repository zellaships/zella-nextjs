'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HietsyUnlockPage() {
  const router = useRouter();

  useEffect(() => {
    // Generate session token (same logic as main designer page)
    const generateSessionToken = () => {
      const hashString = (s: string) => {
        let h = 0;
        for (let i = 0; i < s.length; i++) {
          const c = s.charCodeAt(i);
          h = ((h << 5) - h) + c;
          h = h & h;
        }
        return h.toString(36);
      };

      const d = new Date().toDateString();
      return hashString(d + navigator.userAgent.slice(0, 20));
    };

    // Auto-unlock and redirect
    const sessionToken = generateSessionToken();
    localStorage.setItem('zv_ax', JSON.stringify({ v: 1, t: sessionToken }));
    router.replace('/designer');
  }, [router]);

  return null;
}
