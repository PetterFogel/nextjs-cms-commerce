import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "@/components/providers/Providers";
import CartMenu from "@/components/cart-menu/CartMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Many Saints",
    template: `%s | The Many Saints`
  },
  description:
    "Explore stylish, high-quality garments designed for enduring grace and seamless style."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <CartMenu />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
