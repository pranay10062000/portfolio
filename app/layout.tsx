import type { Metadata, Viewport } from "next";

import "./globals.css";

const siteUrl = "https://portfolio-five-rust-ut3rxo4wsq.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pranay Dumbhare | Software Engineer 2",
    template: "%s | Pranay Dumbhare",
  },
  description:
    "Application Developer 2 at Oracle. I build Java and Spring Boot backend services, improve API performance, and automate testing and delivery with AI.",
  keywords: [
    "Java Backend Engineer",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "Oracle SQL",
    "Performance Engineering",
    "GenAI",
    "Jenkins CI/CD",
    "AWS",
    "OCI",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Pranay Dumbhare | Software Engineer 2",
    description:
      "Backend engineering, performance optimization, GenAI automation, and reliable delivery for enterprise banking systems.",
    url: siteUrl,
    siteName: "Pranay Dumbhare",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
