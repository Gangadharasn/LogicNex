import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogicNex - End-to-End Technology Solutions",
  description: "LogicNex provides comprehensive software services including web development, desktop applications, data management solutions, billing systems, AI-based predictions, and custom software development.",
  keywords: "software development, web development, desktop applications, data management, billing systems, AI automation, custom software, LogicNex",
  authors: [{ name: "LogicNex" }],
  openGraph: {
    title: "LogicNex - End-to-End Technology Solutions",
    description: "Delivering high-quality digital products and innovative technology solutions for your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
