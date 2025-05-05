import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { LinkedinIcon } from "./linkedin-icon";

export function Footer() {
    return (
        <footer className="text-muted-foreground flex items-center gap-4 text-xs">
            <span className="flex-1">© Hin Tong</span>
            <Link href="https://github.com/tonghohin">
                <GithubIcon className="hover:text-primary size-4 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/hintong">
                <LinkedinIcon className="hover:text-primary size-4 transition-colors" />
            </Link>
        </footer>
    );
}
