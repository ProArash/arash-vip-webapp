import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "../components/AppProvider";
import MainSidebar from "./_components/Sidebar/MainSidebar";
import MobileSidebar from "./_components/Sidebar/MobileSidebar";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Arash Ghanbari | Software developer",
  description:
    "Design and development of various websites and web applications using modern and up-to-date frameworks.",
  keywords: [
    "Next.js developer",
    "NestJS backend",
    "TypeScript fullstack developer",
    "React frontend engineer",
    "Node.js expert",
    "personal website design",
    "fullstack programming",
    "web development services",
    "JavaScript developer portfolio",
    "Frontend and Backend",
    "modern web application",
    "Software engineer freelance",
    "Web developer Iran",
    "SEO friendly web design",
  ],
  authors: [{ name: "Arash Ghanbari", url: "https://arash.vip" }],
  creator: "Arash Ghanbari",
  publisher: "Arash Ghanbari",
  metadataBase: new URL("https://arash.vip"),
  alternates: {
    canonical: "https://arash.vip",
  },
  openGraph: {
    type: "website",
    url: "https://arash.vip",
    title: "Arash Ghanbari | Software developer",
    description:
      "Fullstack developer specializing in Next.js, NestJS, and TypeScript. Design and development of modern websites and applications.",
    siteName: "Arash Ghanbari Portfolio",
    images: [
      {
        url: "https://arash.vip/me.svg",
        width: 600,
        height: 600,
        alt: "Arash Ghanbari Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  category: "technology",
};

const poppinsFont = Poppins({
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${poppinsFont.className} antialiased`}>
        <AppProvider>
          <main className="flex md:flex-row flex-col justify-between md:gap-3 h-screen w-full md:p-5">
            <div className="md:flex hidden md:w-1/4 w-full">
              <MainSidebar />
            </div>
            <MobileSidebar />
            <div className="w-full mt-[60px] md:mt-0">{children}</div>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
