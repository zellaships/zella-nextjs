'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="wordmark" href="/">
          <img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" />
        </Link>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="doors">
          <Link href="/" scroll={true}>Home</Link>
          <Link href="/artist" scroll={true}>Art</Link>
          <Link href="/designer" scroll={true}>Design</Link>
        </nav>
      </div>
    </header>
  );
}
