import { ScrollArea } from "@/components/ui/scroll-area";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClarityScript } from "./_components/clarity-script";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { SideNav } from "./_components/side-nav";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export const metadata = {
    authors: { name: "Hin Tong" },
    title: {
        template: "Hin | %s ",
        default: "Full Stack Developer"
    },
    description: "Hi there! I'm Hin, a full stack developer based in Canada. Get in touch with me!",
    keywords: ["Full Stack Developer", "Software Developer", "Canada", "Hin Tong"]
} satisfies Metadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} flex h-dvh w-dvw p-4 font-light antialiased`}>
                <main className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-1 flex-col gap-4 overflow-hidden border p-4 md:gap-8 md:p-8">
                        <Header />
                        <div className="flex gap-8 overflow-hidden md:gap-16">
                            <SideNav />
                            <div className="flex-1 overflow-hidden">
                                <ScrollArea className="size-full">{children}</ScrollArea>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
                <Analytics />
                <SpeedInsights />
                <ClarityScript />
            </body>
        </html>
    );
}
