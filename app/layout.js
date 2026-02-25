import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pixel2tech.vercel.app"),
  title: {
    default: "Pixel2Tech | AI-Powered Digital Agency in Pakistan",
    template: "%s | Pixel2Tech",
  },
  description:
    "Transform your brand with Pixel2Tech - Pakistan's first fully remote AI-powered creative agency. Expert web development, branding, UI/UX design, and digital marketing services.",
  keywords: [
    "digital agency Pakistan",
    "web development",
    "branding agency",
    "AI solutions",
    "UI UX design",
    "digital marketing",
    "creative agency",
    "software development",
  ],
  authors: [{ name: "Pixel2Tech" }],
  creator: "Pixel2Tech",
  publisher: "Pixel2Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixel2tech.vercel.app",
    siteName: "Pixel2Tech",
    title: "Pixel2Tech | AI-Powered Digital Agency",
    description:
      "Transform your brand with smart strategy, modern design, and web development. Pakistan's leading AI-powered creative agency.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pixel2Tech - AI-Powered Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel2Tech | AI-Powered Digital Agency",
    description:
      "Transform your brand with smart strategy, modern design, and web development.",
    creator: "@pixel2tech",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixel2Tech",
    url: "https://pixel2tech.vercel.app",
    logo: "https://pixel2tech.vercel.app/images/logo.png",
    description:
      "AI-Powered Creative Agency from Pakistan serving clients worldwide",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@pixel2tech.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/pixel2tech",
      "https://twitter.com/pixel2tech",
      "https://www.facebook.com/pixel2tech",
      "https://www.instagram.com/pixel2tech",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <Header />
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="0, 0, 0"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.6}
          trailingSpeed={8}
          clickables={[
            "a",
            "button",
            ".cursor-pointer",
            'input[type="text"]',
            'input[type="email"]',
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
