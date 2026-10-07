'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeNav = useCallback(() => {
    setIsNavOpen(false);
    document.body.style.overflow = '';
    document.body.classList.remove('nav-open');
  }, []);

  const toggleNav = useCallback(() => {
    setIsNavOpen(prev => {
      const newState = !prev;
      if (newState) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('nav-open');
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('nav-open');
      }
      return newState;
    });
  }, []);

  // Manual click handler as backup
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Manual click handler fired!');
      setIsNavOpen(prev => {
        const newState = !prev;
        if (newState) {
          document.body.style.overflow = 'hidden';
          document.body.classList.add('nav-open');
        } else {
          document.body.style.overflow = '';
          document.body.classList.remove('nav-open');
        }
        return newState;
      });
    };

    btn.addEventListener('click', handleClick, { capture: true });
    btn.addEventListener('touchend', handleClick, { capture: true });

    return () => {
      btn.removeEventListener('click', handleClick, { capture: true });
      btn.removeEventListener('touchend', handleClick, { capture: true });
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isNavOpen) {
        closeNav();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isNavOpen, closeNav]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/" onClick={closeNav}>
            <img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" />
          </Link>
          <nav
            className={`doors${isNavOpen ? ' open' : ''}`}
            style={{
              zIndex: isNavOpen ? 2147483646 : undefined,
            }}
          >
            <Link href="/" scroll={true} onClick={closeNav}>Home</Link>
            <Link href="/artist" scroll={true} onClick={closeNav}>Art</Link>
            <Link href="/designer" scroll={true} onClick={closeNav}>Design</Link>
          </nav>
        </div>
      </header>
      {/* Mobile hamburger - outside header to avoid stacking issues */}
      <button
        ref={buttonRef}
        type="button"
        className={`nav-toggle${isNavOpen ? ' active' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 2147483647,
          pointerEvents: 'auto',
          isolation: 'isolate',
          background: 'rgba(255, 0, 0, 0.3)',
          width: '48px',
          height: '48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid red',
          cursor: 'pointer',
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Mobile nav overlay */}
      <div
        className={`nav-overlay${isNavOpen ? ' open' : ''}`}
        aria-hidden="true"
        onClick={closeNav}
        style={{
          zIndex: isNavOpen ? 2147483645 : -1,
        }}
      />
    </>
  );
}
