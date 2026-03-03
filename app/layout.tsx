import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BricketX Pakistan | Operational Backbone",
  description: "The technological infrastructure and backend support powering the global BricketX ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-bricket-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}