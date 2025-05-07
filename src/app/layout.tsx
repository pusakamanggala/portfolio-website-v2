import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pusaka Manggala | Front-end Developer",
  description:
    "Front-end Developer specializing in crafting seamless, user-friendly digital experiences.",
  keywords: [
    "Front-end Developer",
    "Web Developer",
    "Tailwind CSS",
    "React Developer",
    "Next.js Developer",
    "Freelance Developer",
    "UI/UX",
    "JavaScript Developer",
    "Portfolio",
    "Persib Developer",
    "Awan Dinata Teknologi",
  ],
  verification: {
    google: "AH5K04DS7sNlPiZMyvlEgfjNbz_KkxE1AExyT0kBvhk",
  },
  authors: [{ name: "Pusaka Manggala" }],
  creator: "Pusaka Manggala",
  publisher: "Pusaka Manggala",
  openGraph: {
    title: "Pusaka Manggala | Front-end Developer",
    description:
      "Professional Front-end Developer specializing in crafting seamless, user-friendly digital experiences.",
    url: "https://pusakamanggala.vercel.app",
    siteName: "Pusaka Manggala Portfolio",
    // images: [
    //   {
    //     url: "https://yourportfolio.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pusaka Manggala - Front-end Developer",
    //   },
    // ],
    locale: "en_US",
    type: "website",
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
