import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zella — Designer',
  description: 'Product design, strategy, and leadership work by Zella. Case studies from Chan Zuckerberg Initiative, Black Veterans Project, and more.',
  openGraph: {
    title: 'Zella — Designer',
    description: 'Product design, strategy, and leadership work. Case studies from CZI, Black Veterans Project, and more.',
    type: 'website',
    url: 'https://zella.design/designer.html',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zella — Designer',
    description: 'Product design, strategy, and leadership work. Case studies from CZI, Black Veterans Project, and more.',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
};

export default function DesignerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
