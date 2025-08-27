import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Global font

export const metadata: Metadata = {
  title: "Pricing Configurator",
  description:
    "Easily customize and compare pricing options tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
