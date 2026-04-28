import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Naminator - AI Name Combination Generator",
  description:
    "Enter two names and let AI generate creative combinations with quality scores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
