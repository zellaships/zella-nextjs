import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-left">
          <Link href="/colophon" className="footer-link">
            Colophon
          </Link>
        </div>
        <div className="footer-right">
          <a href="mailto:zellavanie@gmail.com?subject=Hi%20Zella!" className="footer-link">
            Email me
          </a>
          <a
            href="https://www.instagram.com/zellanealehurston/"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Instagram
          </a>
          <a
            href="https://x.com/zella_vanie"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
