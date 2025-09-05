import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import "antd/dist/reset.css";
import "@/app/globals.css";
import { AppContent, AppFooter, AppHeader } from "./components";

const { Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing Configurator",
  description:
    "Easily customize and compare pricing options tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout className="min-h-screen">
          <AppHeader />
          <AppContent >{children}</AppContent>
          <AppFooter />
        </Layout>
      </body>
    </html>
  );
}
