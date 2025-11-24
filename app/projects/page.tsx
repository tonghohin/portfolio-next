import { BinocularsIcon, BuildingIcon, BusFrontIcon, ChartLineIcon, CopyIcon, FilePenIcon, MapIcon, MessagesSquareIcon } from "lucide-react";
import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCard } from "./_components/project-card";
import { Project } from "./_types/project-type";
import { getRepoStats } from "./_utils/getRepoStats";

export default async function Projects() {
    const projects = [
        {
            title: "Share Your Screen",
            icon: <CopyIcon className="size-4 shrink-0" />,
            description: "A real-time screen sharing application. Share your screen with one simple room code. No downloads or sign-ups required.",
            technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "WebRTC", "PeerJS", "Vercel"],
            demoUrl: "https://share-your-screen.vercel.app/",
            repoUrl: "https://github.com/tonghohin/screen-sharing",
            repoStats: await getRepoStats("tonghohin/screen-sharing")
        },
        {
            title: "shadcn Map",
            icon: <MapIcon className="size-4 shrink-0" />,
            description: "A map component built for shadcn/ui.",
            technologies: ["shadcn/ui", "Next.js", "TypeScript", "Leaflet", "Tailwind CSS"],
            demoUrl: "https://shadcn-map.vercel.app/",
            repoUrl: "https://github.com/tonghohin/shadcn-map",
            repoStats: await getRepoStats("tonghohin/shadcn-map")
        },
        {
            title: "Tour",
            icon: <BinocularsIcon className="size-4 shrink-0" />,
            description: "A component for building onboarding tours. Designed to integrate with shadcn/ui.",
            technologies: ["shadcn/ui", "Next.js", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://onboarding-tour.vercel.app/",
            repoUrl: "https://github.com/tonghohin/tour",
            repoStats: await getRepoStats("tonghohin/tour")
        },
        {
            title: "Avenue Insights",
            icon: <Image src="/projects/avenue-intelligence.svg" alt="Avenue Intelligence" width={24} height={24} />,
            description: "A data visualization platform that I led and built from the ground up for Avenue Intelligence. With interactive maps, dynamic charts, and customizable tools, it helps users uncover foot traffic trends and make data-driven decisions.",
            technologies: ["TypeScript", "Next.js", "Node.js", "Express", "Go", "Gin", "AWS", "Docker", "Terraform", "MongoDB", "PostgreSQL", "Mongoose", "Tailwind CSS", "shadcn/ui", "Zustand", "Zod", "Vitest", "Playwright", "React Testing Library", "Recharts", "Leaflet", "Google Maps API", "GeoJSON", "OpenAI API", "Github Actions"]
        },
        {
            title: "NovaXpress Business Management System",
            icon: <Image src="/projects/novaXpress.svg" alt="NovaXpress" width={24} height={24} />,
            description: "An internal business management platform developed for NovaXpress to streamline daily operations. Features include order tracking, dispatch coordination, driver management, and financial tools, all tailored to the needs of a courier service company.",
            technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "Google Maps API", "CSS", "Github Actions"]
        },
        {
            title: "NovaXpress Company Website",
            icon: <Image src="/projects/novaXpress.svg" alt="NovaXpress" width={24} height={24} />,
            description: "The official website for NovaXpress Courier Services. I designed and developed this site to highlight the company's offerings, enable real-time tracking of deliveries, and support online order placement with secure Stripe payments.",
            technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "Google Maps API", "CSS", "Github Actions"],
            demoUrl: "https://novaxpress.ca/"
        },
        {
            title: "Risk Data Visualization Dashboard",
            icon: <ChartLineIcon className="size-4 shrink-0" />,
            description: "A data visualization task I got for an interview. I was given a climate risk dataset and asked to build a dashboard that visualizes the data. It was a great opportunity for me and improve my data visualization skills.",
            technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Chart.js", "Leaflet", "GeoJSON", "Google Maps API", "Vercel", "Jest", "React Testing Library"],
            demoUrl: "https://risk-viz.vercel.app/",
            repoUrl: "https://github.com/tonghohin/risk-viz"
        },
        {
            title: "Fill It Now",
            icon: <FilePenIcon className="size-4 shrink-0" />,
            description: "I hate filling out job application forms with the same information over and over again. So I built this Chrome extension to help me fill them out automatically.",
            technologies: ["JavaScript", "HTML", "CSS"],
            repoUrl: "https://github.com/tonghohin/fill-it-now"
        },
        {
            title: "Chat Application",
            icon: <MessagesSquareIcon className="size-4 shrink-0" />,
            description: "One of the very first projects I built when I started coding. A simple chat application that allows users to send and receive messages in real-time. I still remember how excited I was when I got it to work!",
            technologies: ["JavaScript", "HTML", "CSS", "EJS", "Node.js", "Express", "MySQL", "Socket.io"],
            repoUrl: "https://github.com/tonghohin/chatapp"
        },
        {
            title: "Property Management Portal",
            icon: <BuildingIcon className="size-4 shrink-0" />,
            description: "The first full-stack project I built when I was learning to code. A property management portal designed for making communications between tenants and superintendents easier. Why did I build this? Because I wanted to understand how full-stack applications work while building something useful. I was living in a condo at that time and I thought it would be cool to have a portal like this. I even built three different versions of it, using different languages and databases.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Firebase"],
            repoUrl: "https://github.com/tonghohin/firebase-portal"
        },
        {
            title: "Bus Tracker",
            icon: <BusFrontIcon className="size-4 shrink-0" />,
            description: "A web app that tracks and visualizes all Halifax Transit buses on an interactive map in real-time. It was an assignment for my course at NSCC, Halifax. I was so proud of it because it's the first time I built something that I can actually use in real life!",
            technologies: ["JavaScript", "HTML", "CSS", "Leaflet", "GeoJSON"],
            repoUrl: "https://github.com/tonghohin/bus-tracker-app"
        }
    ] satisfies Project[];

    return (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1 }
                    }}
                    viewport={{ once: true }}>
                    <ProjectCard {...project} />
                </motion.div>
            ))}
        </div>
    );
}

export const metadata = {
    title: "Projects"
} satisfies Metadata;
