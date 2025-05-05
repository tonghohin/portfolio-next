import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, GitForkIcon, GithubIcon, ShieldAlertIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { Project } from "../_types/project-type";

export function ProjectCard({ title, icon, description, technologies, demoUrl, repoUrl, repoStats }: Project) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-col justify-between gap-1.5 sm:flex-row">
                    <div className="flex items-center gap-1.5">
                        {icon}
                        {title}
                    </div>
                    {repoStats && (
                        <div className="flex items-center gap-1.5 text-xs">
                            <StarIcon className="text-primary size-4" /> {new Intl.NumberFormat().format(repoStats.stars)}
                            <GitForkIcon className="size-4" /> {new Intl.NumberFormat().format(repoStats.forks)}
                        </div>
                    )}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-wrap items-start gap-1.5">
                {technologies.map((technology, index) => (
                    <Badge key={index}>{technology}</Badge>
                ))}
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4 sm:flex-row">
                {demoUrl || repoUrl ? (
                    <>
                        {demoUrl && (
                            <Button variant="outline" className="flex-1" asChild>
                                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLinkIcon />
                                    Live Demo
                                </Link>
                            </Button>
                        )}
                        {repoUrl && (
                            <Button variant="outline" className="flex-1" asChild>
                                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                                    <GithubIcon />
                                    Source Code
                                </Link>
                            </Button>
                        )}
                    </>
                ) : (
                    <Button variant="outline" className="flex-1" disabled>
                        <ShieldAlertIcon />
                        Private Project
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
