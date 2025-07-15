import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "VidTube",
  description: "Upload, manage, and share your videos with ease using VidTube.",
  openGraph: {
    title: "VidTube",
    description: "Upload, manage, and share your videos easily.",
    url: "https://yourdomain.com",
    siteName: "VidTube",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VidTube",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
