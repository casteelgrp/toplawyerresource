import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://toplawyerresource.com"),
  title: {
    default: "Top Lawyer Resource | Free Legal Help & Attorney Connections",
    template: "%s | Top Lawyer Resource",
  },
  description:
    "Get free answers to your legal questions and connect with experienced attorneys in your area. Top Lawyer Resource helps injury victims understand their rights.",
  keywords: ["legal help", "find a lawyer", "personal injury attorney", "free case evaluation"],
  authors: [{ name: "Top Lawyer Resource" }],
  openGraph: {
    type: "website",
    siteName: "Top Lawyer Resource",
    url: "https://toplawyerresource.com",
    images: [
      {
        url: "/logo-whitebg.webp",
        width: 1200,
        height: 630,
        alt: "Top Lawyer Resource",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TopLawyerRes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-94Z2GN3XS8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94Z2GN3XS8');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
