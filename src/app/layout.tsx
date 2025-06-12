import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.scss";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "سیستم احراز هویت",
  description: "سیستم احراز هویت با Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
