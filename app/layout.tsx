import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/globals.css'
import Navbar from "@/components/Navbar";
import WalletContextProvider from "../contexts/WalletContextProvider";
import TransitionContextProvider from "../contexts/TransactionContextProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolPay",
  description: "Send solana via SolPay!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fix the Google Font error */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletContextProvider>
          <Navbar />
          <ToastContainer />
          <TransitionContextProvider>{children}</TransitionContextProvider>
        </WalletContextProvider>
      </body>
    </html>
  );
}