import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'; // Import the library
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BricketX Pakistan | Operational Backbone",
  description: "The technological infrastructure and backend support powering the global BricketX ecosystem.",

  verification: {
    google: "xZ8u-Ac33ASn11Qd4OL_eCzHAKWvupm-PMyWiYzbONc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MBFL3ZLP" />
      <body className={`${inter.className} bg-white text-bricket-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}