import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mined Without A Trace",
  description:
    "An interactive visual website that traces the conflict mineral supply chain inside your smartphone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full" style={{ background: "var(--cream)" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
