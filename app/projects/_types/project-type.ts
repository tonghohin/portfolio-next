type Technologies = "TypeScript" | "HTML" | "CSS" | "JavaScript" | "Next.js" | "React" | "Tailwind CSS" | "shadcn/ui" | "PeerJS" | "WebRTC";

export interface RepoStats {
    stars: number;
    forks: number;
}

export interface Project {
    title: string;
    icon: React.ReactNode;
    description: string;
    technologies: Technologies[];
    demoUrl?: string;
    repoUrl?: string;
    repoStats?: RepoStats;
}
