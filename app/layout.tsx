import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mistral AI | Frontier AI in your hands",
  description: "The most powerful AI platform for enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#F7F5F0] dark:bg-[#0F0F0F] text-mistral-dark dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
