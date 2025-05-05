"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    item: { title: string; href: string };
}

export function NavItem({ item }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link href={item.href} className={cn(`hover:text-primary transition-colors`, pathname === item.href && "text-primary")}>
            {item.title}
        </Link>
    );
}
