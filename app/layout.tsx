import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import FooterComponent from "@/components/FooterComponent";

import "./globals.css";

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Lucky Tea & Coffee",
  description: "Lucky Tea & Coffee drinks menu",
  icons: {
    icon: [
      {
        url: '/icon-dark.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/icon-light.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main>
          {children}
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
