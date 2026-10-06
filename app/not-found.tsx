import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navigation } from '@/components/layout/Navigation';

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />
      <Navigation />

      <main className="wrap" id="main-content">
        <section className="not-found-section">
          <h1>Oop, that page doesn't exist</h1>
          <p>But try these below</p>

          <nav className="doors-list">
            <Link href="/">Home</Link>
            <Link href="/designer">Design</Link>
            <Link href="/artist">Art</Link>
          </nav>
        </section>
      </main>

      <Footer />
    </>
  );
}
