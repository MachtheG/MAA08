import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Atkinson_Hyperlegible_Next, Prata } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SkipLink } from "@/components/SkipLink";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { fillCountdown } from "@/lib/election";

// Prata: an engraved high-contrast serif, the passport's printed voice.
// Atkinson Hyperlegible Next: built by the Braille Institute for low-vision
// readers, which also makes it the clearest face on a cheap phone in sun.
const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  // English, Kiswahili and Somali are all written in basic Latin.
  subsets: ["latin"],
  display: "swap",
  // next/font has no metrics for this face, so the size-matched fallback is
  // declared by hand in globals.css ("Atkinson Fallback") to avoid a shift
  // when the web font arrives on a slow connection.
  adjustFontFallback: false,
  fallback: ["Atkinson Fallback", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affey-wajir.example"),
  title: {
    default: "Mohamed Abdi Affey — for Governor of Wajir County",
    template: "%s · Mohamed Abdi Affey",
  },
  description:
    "Statesman, diplomat and son of Wajir. A record of service across Kenya and the Horn of Africa — now for home.",
  openGraph: {
    title: "Mohamed Abdi Affey — for Governor of Wajir County",
    description:
      "A record of service across Kenya and the Horn of Africa — now for home.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#063c2b", // --color-cover; metadata cannot read CSS tokens
  colorScheme: "light",
};

// Runs before first paint. Entrance motion is opt-in: without JavaScript, or
// with reduced motion requested, every element simply renders visible.
const motionFlag = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-motion','')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${atkinson.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <LanguageProvider>
          <SkipLink />
          <SiteHeader />
          <script dangerouslySetInnerHTML={{ __html: fillCountdown }} />
          <main id="main" className="flex-1">
            <ViewTransition default="page-turn">{children}</ViewTransition>
          </main>
          <script dangerouslySetInnerHTML={{ __html: fillCountdown }} />
          <SiteFooter />
          <RevealObserver />
        </LanguageProvider>
      </body>
    </html>
  );
}
