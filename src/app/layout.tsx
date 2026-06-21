import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pusakamanggala.vercel.app"),
  title: {
    default: "Pusaka Manggala | Frontend Developer",
    template: "%s | Pusaka Manggala",
  },
  description:
    "Professional Frontend Developer specializing in crafting seamless, user-friendly, and high-performance digital experiences.",
  applicationName: "Pusaka Manggala Portfolio",
  keywords: [
    "Pusaka Manggala",
    "Frontend Developer",
    "Front-end Developer",
    "Frontend Engineer",
    "Front-end Engineer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Freelance Developer",
    "UI/UX",
    "Portfolio",
    "Persib Developer",
    "Awan Dinata Teknologi",
  ],
  verification: {
    google: "AH5K04DS7sNlPiZMyvlEgfjNbz_KkxE1AExyT0kBvhk",
  },
  authors: [{ name: "Pusaka Manggala", url: "https://pusakamanggala.vercel.app" }],
  creator: "Pusaka Manggala",
  publisher: "Pusaka Manggala",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pusaka Manggala | Frontend Developer",
    description:
      "Professional Frontend Developer specializing in crafting seamless, user-friendly, and high-performance digital experiences.",
    url: "https://pusakamanggala.vercel.app",
    siteName: "Pusaka Manggala Portfolio",
    // images: [
    //   {
    //     url: "https://yourportfolio.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pusaka Manggala - Frontend Developer",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pusaka Manggala | Frontend Developer",
    description:
      "Professional Frontend Developer specializing in crafting seamless, user-friendly, and high-performance digital experiences.",
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
  icons: {
    icon: "/app-icon.ico",
    shortcut: "/app-icon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="relative bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
