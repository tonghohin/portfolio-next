import { NavItem } from "./nav-item";

export function SideNav() {
    const navItems = [
        { title: "About", href: "/" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" }
    ];

    return (
        <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
                <NavItem key={item.title} item={item} />
            ))}
        </nav>
    );
}
