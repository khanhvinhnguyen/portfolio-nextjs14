import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinh Nguyen Khanh | Frontend Software Engineer",
  description:
    "Frontend-focused Software Engineer with 4+ years of experience building configuration-driven platforms, Runtime UI Systems, SDUI, and scalable React/Next.js architectures.",
  openGraph: {
    title: "Vinh Nguyen Khanh | Frontend Software Engineer",
    description:
      "Frontend-focused Software Engineer with 4+ years of experience building configuration-driven platforms, Runtime UI Systems, SDUI, and scalable React/Next.js architectures.",
    url: "https://khanhvinhnguyen.id.vn/",
    siteName: "Khanh Vinh Nguyen | Web Developer",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/portfolio-35084.appspot.com/o/Screenshot%202024-07-24%20at%205.40.54%E2%80%AFPM.png?alt=media&token=1517995d-627d-43ab-b369-7c8b8de2a0c1",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
