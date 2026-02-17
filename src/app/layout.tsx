import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl =
    process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_SITE_URL || "https://techimpacters.org";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "Techimpacters | Driving Tech Innovation in Schools",
    description: "Academic NGO dedicated to promoting technology and digital literacy in various schools.",
    icons: {
        icon: [{ url: "/favy.jpg", type: "image/jpeg" }],
        shortcut: "/favy.jpg",
        apple: "/favy.jpg",
    },
    openGraph: {
        title: "Techimpacters | Driving Tech Innovation in Schools",
        description: "Academic NGO dedicated to promoting technology and digital literacy in various schools.",
        images: ["/logo.png"],
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Techimpacters | Driving Tech Innovation in Schools",
        description: "Academic NGO dedicated to promoting technology and digital literacy in various schools.",
        images: ["/logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
