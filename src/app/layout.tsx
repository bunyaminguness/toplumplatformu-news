import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toplumplatformu.com"),
  title: {
    default: "ToplumPlatformu Haber",
    template: "%s | ToplumPlatformu Haber",
  },
  description:
    "Toplumsal sorunlar, şehir yaşamı ve vatandaş geri bildirimleri için bağımsız içerik alanı.",
  openGraph: {
    title: "ToplumPlatformu Haber",
    description:
      "Toplumsal sorunlar, şehir yaşamı ve vatandaş geri bildirimleri için bağımsız içerik alanı.",
    url: "https://toplumplatformu.com",
    siteName: "ToplumPlatformu Haber",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToplumPlatformu Haber",
    description:
      "Toplumsal sorunlar, şehir yaşamı ve vatandaş geri bildirimleri için bağımsız içerik alanı.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
