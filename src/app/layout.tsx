import type { Metadata } from "next";
import { inter, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Philip Uguru – Product-minded developer building high-converting web platforms and real-world digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased dark ${inter.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
