import type { Metadata, Viewport } from "next";

import "./globals.css";

const siteUrl = "https://portfolio-five-rust-ut3rxo4wsq.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pranay Dumbhare | Java Backend Engineer",
    template: "%s | Pranay Dumbhare",
  },
  description:
    "Java backend engineer at Oracle building Spring Boot microservices, banking APIs, performance automation, GenAI workflows, and CI/CD pipelines.",
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
    title: "Pranay Dumbhare | Java Backend Engineer",
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
  themeColor: "#090a0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
