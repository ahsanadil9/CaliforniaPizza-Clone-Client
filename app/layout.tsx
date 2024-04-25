import { OrderProvider } from "@/src/components/Navbar/cartContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "California Pizza Clone | Cheesiest Pizza in Town | Order Now",
  description: "Deliver Pizza at doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
