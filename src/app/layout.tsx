import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matis Gaudin - Frontend Developer",
  description: "I build accessible, pixel-perfect digital experiences for the web.",
  keywords: ["frontend", "developer", "react", "nextjs", "typescript", "accessibility"],
  authors: [{ name: "Matis Gaudin" }],
  creator: "Matis Gaudin",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Matis Gaudin - Frontend Developer",
    description: "I build accessible, pixel-perfect digital experiences for the web.",
    siteName: "Matis Gaudin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matis Gaudin - Frontend Developer",
    description: "I build accessible, pixel-perfect digital experiences for the web.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="theme-color" content="#22232a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">{children}
      </body>
    </html>
  );
}
