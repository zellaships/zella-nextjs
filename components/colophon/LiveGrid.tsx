'use client';

import { useEffect, useState, useRef } from 'react';

export function LiveGrid() {
  const measureRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState({
    gutter: '—',
    header: '—',
    breakpoint: 'DESKTOP',
    width: 0,
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      // Create temp elements to measure actual computed values
      const measureEl = document.createElement('div');
      measureEl.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;';

      // Gutter measurement
      const gutterEl = document.createElement('div');
      gutterEl.style.width = 'var(--wrap-padding)';
      measureEl.appendChild(gutterEl);

      // Header measurement
      const headerEl = document.createElement('div');
      headerEl.style.height = 'var(--header-h)';
      measureEl.appendChild(headerEl);

      document.body.appendChild(measureEl);

      const gutterPx = Math.round(parseFloat(getComputedStyle(gutterEl).width));
      const headerPx = Math.round(parseFloat(getComputedStyle(headerEl).height));

      document.body.removeChild(measureEl);

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
