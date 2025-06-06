import { RepoStats } from "../_types/project-type";

export async function getRepoStats(repoFullName: string) {
    const response = await fetch(`https://api.github.com/repos/${repoFullName}`, { next: { revalidate: 3600 } });
    if (!response.ok) return;

    const data = await response.json();
    if (!data) return;
    if (data.stargazers_count === undefined || data.forks_count === undefined) return;

    return {
        stars: data.stargazers_count,
        forks: data.forks_count
    } as RepoStats;
}
