import QueryProvider from "@/components/QueryProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gaet",
  description: "Gaet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <ReduxProvider>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
