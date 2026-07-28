import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${content.studioName} — Photography studio, Lisbon`,
  description: content.home.intro,
  openGraph: {
    title: `${content.studioName} — Photography studio, Lisbon`,
    description: content.home.intro,
    type: "website",
  },
};

// Runs before paint. Enables JS-driven reveals + the page-wipe only when motion
// is allowed; no-JS and reduced-motion keep content visible and skip the wipe.
const boot = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        {children}
      </body>
    </html>
  );
}
