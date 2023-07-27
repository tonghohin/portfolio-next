import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./style.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], display: "swap", variable: "--roboto" });

export const metadata: Metadata = {
    authors: { name: "Hin Tong" },
    title: "Hin | Full Stack Developer",
    description: "Hi there! I'm Hin, a full stack developer based in Canada. Get in touch with me!",
    keywords: ["Full Stack", "Developer", "Canada", "Hin Tong"],
    other: {
        "msvalidate.01": "AD17407C3C9846839130F82E96DA68F6"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${roboto.variable}`}>
            <head>
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.png" />
                <Script id="clarityScript" type="text/javascript">
                    {`(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "i53d7i7ttw");`}
                </Script>
            </head>
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
                <Analytics />
            </body>
        </html>
    );
}
