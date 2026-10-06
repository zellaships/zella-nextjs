'use client';

import Link from 'next/link';

export function Header() {
  const handleNavClick = () => {
    // Force scroll to top immediately on navigation
    window.scrollTo(0, 0);
  };

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="wordmark" href="/" onClick={handleNavClick}>
          <img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" />
        </Link>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="doors">
          <Link href="/" onClick={handleNavClick}>Home</Link>
          <Link href="/artist" onClick={handleNavClick}>Art</Link>
          <Link href="/designer" onClick={handleNavClick}>Design</Link>
        </nav>
      </div>
    </header>
  );
}
