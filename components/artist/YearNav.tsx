'use client';

import { useEffect, useState } from 'react';

const years = ['2026', '2025', '2024', '2023', '2022', '2021'];

export function YearNav() {
  const [activeYear, setActiveYear] = useState('2026');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-year-section]');
    const artScroll = document.querySelector('.art-scroll');

    const handleScroll = () => {
      // Only show nav when art-scroll (images area) is in view
      if (artScroll) {
        const rect = artScroll.getBoundingClientRect();
        // Show when the top of art-scroll is above the middle of the viewport
        setIsVisible(rect.top < window.innerHeight * 0.3);
      }

      const scrollY = window.scrollY + 200;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollY >= top && scrollY < bottom) {
          const id = section.getAttribute('id');
          if (id) {
            setActiveYear(id.replace('y', ''));
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToYear = (year: string) => {
    const section = document.getElementById(`y${year}`);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`art-years ${isVisible ? 'is-visible' : ''}`} data-year-nav>
      {years.map((year) => (
        <button
          key={year}
          className={`yr-link ${activeYear === year ? 'active' : ''}`}
          data-goto={`y${year}`}
          onClick={() => scrollToYear(year)}
        >
          {year}
        </button>
      ))}
    </nav>
  );
}
