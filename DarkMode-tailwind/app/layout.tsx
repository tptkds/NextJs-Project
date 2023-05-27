import "./globals.css";
import { useState } from "react";

export const metadata = {
  title: "Dark Mode",
  description: "Next.js에서 tailwind를 이용해 다크모드를 구현합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
