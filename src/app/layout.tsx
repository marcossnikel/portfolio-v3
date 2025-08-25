import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marcos Nikel - Portfolio",
  description:
    "Personal portfolio of Marcos Nikel showcasing articles, career, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-white dark:bg-black">
            <Navigation />
            <div className="flex min-h-screen">
              {/* Left lateral space */}
              <div className="w-16 bg-white dark:bg-black"></div>
              
              {/* Main content area */}
              <main className="flex-1 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
              
              {/* Right lateral space */}
              <div className="w-16 bg-white dark:bg-black"></div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
