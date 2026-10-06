'use client';

import { useEffect } from 'react';

export function Navigation() {
  useEffect(() => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav.doors');

    // Create overlay if it doesn't exist
    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay && nav) {
      navOverlay = document.createElement('div');
      navOverlay.className = 'nav-overlay';
      navOverlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(navOverlay);
    }

    function closeNav() {
      nav?.classList.remove('open');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
      navOverlay?.classList.remove('open');
    }

    function openNav() {
      nav?.classList.add('open');
      navToggle?.classList.add('active');
      navToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('nav-open');
      navOverlay?.classList.add('open');
    }

    if (navToggle && nav) {
      const handleToggleClick = () => {
        if (nav.classList.contains('open')) {
          closeNav();
        } else {
          openNav();
        }
      };

      const handleOverlayClick = () => closeNav();

      const handleLinkClick = () => closeNav();

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
          closeNav();
        }
      };

      navToggle.addEventListener('click', handleToggleClick);

      // Close nav when clicking overlay
      if (navOverlay) {
        navOverlay.addEventListener('click', handleOverlayClick);
      }

      // Close nav when clicking a link
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleLinkClick);
      });

      // Close on escape key
      document.addEventListener('keydown', handleEscape);

      // Cleanup
      return () => {
        navToggle.removeEventListener('click', handleToggleClick);
        if (navOverlay) {
          navOverlay.removeEventListener('click', handleOverlayClick);
        }
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, []);

  return null;
}
