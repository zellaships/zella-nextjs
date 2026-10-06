'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push(href);
    // Force scroll again after navigation starts
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="wordmark" href="/" onClick={(e) => handleNavClick(e, '/')}>
          <img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" />
        </Link>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="doors">
          <Link href="/" onClick={(e) => handleNavClick(e, '/')}>Home</Link>
          <Link href="/artist" onClick={(e) => handleNavClick(e, '/artist')}>Art</Link>
          <Link href="/designer" onClick={(e) => handleNavClick(e, '/designer')}>Design</Link>
        </nav>
      </div>
    </header>
  );
}
