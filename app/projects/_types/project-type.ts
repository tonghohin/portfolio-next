type Technologies =
    // Languages
    | "JavaScript"
    | "TypeScript"
    | "Go"

    // Frontend frameworks and libraries
    | "React"
    | "Next.js"
    | "Redux"
    | "Zustand"
    | "Zod"

    // Frontend and UI libraries
    | "HTML"
    | "CSS"
    | "Tailwind CSS"
    | "shadcn/ui"
    | "EJS"

    // Backend frameworks
    | "Node.js"
    | "Express"
    | "Gin"
    | "tRPC"
    | "Better Auth"
    | "BullMQ"

    // Databases
    | "MongoDB"
    | "Mongoose"
    | "PostgreSQL"
    | "Drizzle ORM"
    | "MySQL"
    | "Firebase"
    | "Redis"

    // Testing
    | "Vitest"
    | "Jest"
    | "Playwright"
    | "React Testing Library"

    // Data Visualization
    | "Chart.js"
    | "Recharts"
    | "Leaflet"
    | "GeoJSON"

    // Realtime & Communication
    | "Socket.io"
    | "PeerJS"
    | "WebRTC"

    // External APIs
    | "Stripe"
    | "Google Maps API"
    | "OpenAI API"

    // DevOps and cloud
    | "Github Actions"
    | "AWS"
    | "Terraform"
    | "Docker"
    | "Vercel"

    // Observability
    | "Langfuse";

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
