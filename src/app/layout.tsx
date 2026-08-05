import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
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
    "Software engineer based in Sao Paulo, Brazil. Backend-focused, with experience in payroll infrastructure, fintech, and high-traffic services.",
  openGraph: {
    title: "Marcos Nikel - Software Engineer",
    description:
      "Software engineer based in Sao Paulo, Brazil. Backend-focused, with experience in payroll infrastructure, fintech, and high-traffic services.",
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
      "Software engineer based in Sao Paulo, Brazil. Backend-focused, with experience in payroll infrastructure, fintech, and high-traffic services.",
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
      className={`${body.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning className="noise">
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
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
