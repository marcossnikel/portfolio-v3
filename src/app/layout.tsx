import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PaceLine } from "@/components/PaceLine";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcosnikel.com"),
  title: {
    default: "Marcos Nikel - Software Engineer",
    template: "%s | Marcos Nikel",
  },
  description:
    "Software engineer from Sao Paulo building backends where correctness is money: payroll and tax-filing infrastructure, and services at 500K requests per minute. Also training for a first marathon.",
  openGraph: {
    title: "Marcos Nikel - Software Engineer",
    description:
      "Backends where correctness is money: payroll, tax filings, half a million requests per minute.",
    url: "https://marcosnikel.com",
    siteName: "Marcos Nikel",
    images: [{ url: "/me.jpeg", width: 768, height: 1024 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Marcos Nikel - Software Engineer",
    description:
      "Backends where correctness is money: payroll, tax filings, half a million requests per minute.",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning className="grain">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex min-h-dvh flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <PaceLine />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
