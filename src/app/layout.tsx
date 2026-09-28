import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GodMode Restaurant Business | The Autonomous Restaurant Operating System",
  description: "How we built autonomous AI agents to run marketing, live kitchen displays, mobile waiter POS, and real-time daily P&L in high-volume restaurants. Follow our builds on YouTube.",
  keywords: ["restaurant automation", "AI restaurant", "kitchen display system", "waiter POS", "restaurant accounting", "GodMode Restaurant Business"],
  authors: [{ name: "Rikki", url: "https://godmoderestaurantbusiness.com" }],
  openGraph: {
    title: "GodMode Restaurant Business | Autonomous Restaurant AI",
    description: "Real-world AI systems running high-volume hospitality. Follow the journey on YouTube.",
    url: "https://godmoderestaurantbusiness.com",
    siteName: "GodMode Restaurant Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
