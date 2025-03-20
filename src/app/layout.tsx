import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ロコオーダー | 店内飲食向けモバイルオーダーサービス",
  description:
    "QRコードスキャンから注文、キャッシュレス決済まで完結する飲食店向けモバイルオーダーシステム。人手不足解消と業務効率化を実現します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} dark:bg-[#050505] dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
