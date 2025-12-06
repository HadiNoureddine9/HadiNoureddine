import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hadi Noureddine | Software Engineer & AWS Certified Cloud Architect",
  description: "Software Engineer specializing in scalable backend systems, cloud architecture, and full-stack development. AWS Certified Solutions Architect with expertise in Node.js, React, Python, and serverless technologies.",
  keywords: [
    "Software Engineer",
    "AWS Certified",
    "Cloud Architecture",
    "Full Stack Developer",
    "Node.js",
    "React",
    "TypeScript",
    "Python",
    "Serverless",
    "Backend Development",
    "Beirut",
    "Lebanon"
  ],
  authors: [{ name: "Hadi Noureddine" }],
  creator: "Hadi Noureddine",
  metadataBase: new URL("https://hadinoureddine.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hadinoureddine.com",
    title: "Hadi Noureddine | Software Engineer & AWS Certified Cloud Architect",
    description: "Software Engineer specializing in scalable backend systems, cloud architecture, and full-stack development. AWS Certified Solutions Architect.",
    siteName: "Hadi Noureddine Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hadi Noureddine - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Noureddine | Software Engineer & AWS Certified",
    description: "Software Engineer specializing in scalable backend systems and cloud architecture. AWS Certified Solutions Architect.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hadi Noureddine",
    jobTitle: "Software Engineer",
    url: "https://hadinoureddine.com",
    sameAs: [
      "https://www.linkedin.com/in/hadi-nour-eddine",
      "https://github.com/HadiNoureddine9",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beirut",
      addressCountry: "Lebanon",
    },
    email: "hadi.noureddine.9@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "AWS Academy",
    },
    knowsAbout: [
      "Software Engineering",
      "Cloud Architecture",
      "AWS",
      "Node.js",
      "React",
      "TypeScript",
      "Python",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
