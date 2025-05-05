import { FunFacts } from "./fun-facts";

export function Header() {
    return (
        <header className="flex w-full items-start justify-between">
            <div>
                <h1 className="text-primary text-5xl">Hin Tong</h1>
                <h3 className="text-muted-foreground">Full Stack Developer</h3>
            </div>
            <FunFacts />
        </header>
    );
}
