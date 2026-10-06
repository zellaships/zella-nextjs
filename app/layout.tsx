import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DirectionalHover } from "@/components/effects/DirectionalHover";

const abcAreal = localFont({
  src: "../public/assets/fonts/ABCArealSuperfamilyVariable.woff2",
  variable: "--font-abc-areal",
  weight: "400 700",
  display: "block",
});

export const metadata: Metadata = {
  title: "Zella — Artist, Designer, Cultural Organizer",
  description: "Zella is an artist, cultural organizer, and designer whose work spans performance, painting, zines, and portal-making.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={abcAreal.variable}>
      <body>
        <DirectionalHover />
        {children}
      </body>
    </html>
  );
}
