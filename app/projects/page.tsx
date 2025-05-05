import { BuildingIcon, BusFrontIcon, ChartLineIcon, CopyIcon, FilePenIcon, MessagesSquareIcon } from "lucide-react";
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
            technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "PeerJS", "WebRTC"],
            demoUrl: "https://share-your-screen.vercel.app/",
            repoUrl: "https://github.com/tonghohin/screen-sharing",
            repoStats: await getRepoStats("tonghohin/screen-sharing")
        },
        {
            title: "Avenue Insights",
            icon: <Image src="/projects/avenue-intelligence.svg" alt="Avenue Intelligence" width={24} height={24} />,
            description: "A data visualization platform that I led and built from the ground up for Avenue Intelligence. With interactive maps, dynamic charts, and customizable tools, it helps users uncover foot traffic trends and make data-driven decisions.",
            technologies: ["TypeScript", "Next.js", "React"]
        },
        {
            title: "NovaXpress Company Website",
            icon: <Image src="/projects/novaXpress.svg" alt="Avenue Intelligence" width={24} height={24} />,
            description: "Company website for NovaXpress Courier Services.",
            technologies: ["TypeScript", "React"],
            demoUrl: "https://novaxpress.ca/"
        },
        {
            title: "Risk Data Visualization Dashboard",
            icon: <ChartLineIcon className="size-4 shrink-0" />,
            description: "A data visualization task I got for an interview. I was given a climate risk dataset and asked to build a dashboard that visualizes the data. It was a great opportunity for me and improve my data visualization skills.",
            technologies: ["TypeScript", "Next.js", "CSS", "JavaScript"],
            demoUrl: "https://risk-viz.vercel.app/",
            repoUrl: "https://github.com/tonghohin/risk-viz"
        },
        {
            title: "Fill It Now",
            icon: <FilePenIcon className="size-4 shrink-0" />,
            description: "I hate filling out job application forms with the same information over and over again. So I built this Chrome extension to help me fill them out automatically.",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoUrl: "https://github.com/tonghohin/fill-it-now"
        },
        {
            title: "Chat Application",
            icon: <MessagesSquareIcon className="size-4 shrink-0" />,
            description: "One of the very first projects I built when I started coding. A simple chat application that allows users to send and receive messages in real-time. I still remember how excited I was when I got it to work!",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoUrl: "https://github.com/tonghohin/chatapp"
        },
        {
            title: "Property Management Portal",
            icon: <BuildingIcon className="size-4 shrink-0" />,
            description: "The first full-stack project I built when I was learning to code. A property management portal designed for making communications between tenants and superintendents easier. Why did I build this? Because I wanted to understand how full-stack applications work while building something useful. I was living in a condo at that time and I thought it would be cool to have a portal like this. I even built three different versions of it, using different languages and databases.",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoUrl: "https://github.com/tonghohin/chatapp"
        },
        {
            title: "Bus Tracker",
            icon: <BusFrontIcon className="size-4 shrink-0" />,
            description: "A web app that tracks and visualizes all Halifax Transit buses on an interactive map in real-time. It was an assignment for my course at NSCC, Halifax. I was so proud of it because it's the first time I built something that I can actually use in real life!",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoUrl: "https://github.com/tonghohin/bus-tracker-app"
        }
    ] satisfies Project[];

    return (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
