import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { ClarityScript } from "./_components/ClarityScript";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], display: "swap" });

export const metadata = {
    authors: { name: "Hin Tong" },
    title: "Hin | Full Stack Developer",
    description: "Hi there! I'm Hin, a full stack developer based in Canada. Get in touch with me!",
    keywords: ["Full Stack", "Developer", "Canada", "Hin Tong"]
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <nav>
                    <Link id="logo" href="/" />
                    <Link className="navItems" href="/about">
                        About
                    </Link>
                    <Link className="navItems" href="/skills">
                        Skills
                    </Link>
                    <Link className="navItems" href="/work">
                        Work
                    </Link>
                    <Link className="navItems" href="/contact">
                        Contact
                    </Link>
                </nav>
                {children}
                <SpeedInsights />
                <ClarityScript />
            </body>
        </html>
    );
}
