import type { Metadata } from "next";
import localFont from "next/font/local";
import "../public/globals.css";

const geistSans = localFont({
  src: "../public/fonts/Tw Cen MT.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/Tw Cen MT.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "City Foods",
  description: "Built",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
