'use client';

import { useEffect, useState } from 'react';

export function LiveGrid() {
  const [values, setValues] = useState({
    gutter: '—',
    header: '—',
    breakpoint: 'DESKTOP',
    width: 0,
  });

  useEffect(() => {
    const update = () => {
      const styles = getComputedStyle(document.documentElement);
      const width = window.innerWidth;

      // Get computed values
      const gutter = styles.getPropertyValue('--wrap-padding').trim();
      const header = styles.getPropertyValue('--header-h').trim();

      // Parse to pixels for display
      const gutterPx = Math.round(parseFloat(gutter) * (gutter.includes('rem') ? 16 : 1));
      const headerPx = Math.round(parseFloat(header));

      // Determine breakpoint
      let breakpoint = 'DESKTOP';
      if (width <= 480) breakpoint = 'MOBILE';
      else if (width <= 768) breakpoint = 'TABLET';

      setValues({
        gutter: `${gutterPx}px`,
        header: `${headerPx}px`,
        breakpoint,
        width,
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="grid-specs-live">
      <div className="grid-breakpoint">
        <span className={`breakpoint-pill ${values.breakpoint.toLowerCase()}`}>
          {values.breakpoint}
        </span>
        <span className="breakpoint-width">{values.width}px</span>
      </div>
      <div className="grid-specs">
        <div className="grid-spec-card">
          <span className="grid-label">Max Width</span>
          <span className="grid-value">1180px</span>
        </div>
        <div className="grid-spec-card">
          <span className="grid-label">Gutter</span>
          <span className="grid-value grid-value-live">{values.gutter}</span>
        </div>
        <div className="grid-spec-card">
          <span className="grid-label">Header</span>
          <span className="grid-value grid-value-live">{values.header}</span>
        </div>
      </div>
    </div>
  );
}
