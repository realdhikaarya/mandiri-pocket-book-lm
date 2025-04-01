import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bank Mandiri Livin Merchant Pocket Book",
  description: "A comprehensive pocket book for Bank Mandiri sales team to assist with Livin Merchant and EDC onboarding",
  icons: {
    icon: "/images/icon.svg",
  },
  metadataBase: new URL('https://mandiri-pocket-book.netlify.app'),
  alternates: {
    canonical: '/',
  },
  other: {
    "google-site-verification": "C974f2pQ1KRHq1HSAmA_E4FpyHJo1ySeO3q3DANCpdw",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
